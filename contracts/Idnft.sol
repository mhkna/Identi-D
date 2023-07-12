// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Idnft is ERC721 {
    struct Identity {
        string name;
        string birthdate;
        bool isVerified;
        string photoURI;
    }

    mapping(address => Identity) public identities;
    address public issuer;
    uint256 private totalSupply;

    event IdentitySubmitted(address indexed identityAddress, string name, string birthdate, string photoURI);
    event IdentityVerified(address indexed identityAddress, bool isVerified);
    event PhotoURISubmitted(address indexed identityAddress, string photoURI);

    constructor() ERC721("IdentityNFT", "IDNFT") {
        issuer = msg.sender;
    }

    modifier onlyIssuer() {
        require(msg.sender == issuer, "Only the issuer can perform this action");
        _;
    }

    function submitIdentity(string memory _name, string memory _birthdate) external {
        require(bytes(_name).length > 0, "Name is required");
        require(bytes(_birthdate).length > 0, "Birthdate is required");

        uint256 tokenId = totalSupply;
        string memory etherscanUri = _generateTokenUrl(tokenId);
        identities[msg.sender] = Identity(_name, _birthdate, false, etherscanUri);
        _mint(msg.sender, tokenId);
        totalSupply++;
        emit IdentitySubmitted(msg.sender, _name, _birthdate, etherscanUri);
    }

    function verifyIdentity(address _identityAddress) external onlyIssuer {
        require(_isIdentityRegistered(_identityAddress), "Identity not found");
        require(!identities[_identityAddress].isVerified, "Identity is already verified");

        identities[_identityAddress].isVerified = true;
        emit IdentityVerified(_identityAddress, true);
    }

    function getIdentity(address _identityAddress) external view returns (string memory, string memory, bool, string memory) {
        require(_isIdentityRegistered(_identityAddress), "Identity not found");
        Identity memory identity = identities[_identityAddress];
        return (identity.name, identity.birthdate, identity.isVerified, identity.photoURI);
    }

    function submitPhotoURI(address _identityAddress, string memory _photoURI) external {
        require(_isIdentityRegistered(_identityAddress), "Identity not found");

        Identity storage identity = identities[_identityAddress];
        identity.photoURI = _photoURI;
        emit PhotoURISubmitted(_identityAddress, _photoURI);
    }

    function _generateTokenUrl(uint256 tokenId) internal view returns (string memory) {
        string memory url = string(abi.encodePacked("https://etherscan.io/token/", Strings.toHexString(uint160(address(this)), 20), "?a=", Strings.toString(tokenId)));
        return url;
    }

    function _isIdentityRegistered(address _identityAddress) internal view returns (bool) {
        return bytes(identities[_identityAddress].name).length > 0;
    }
}
