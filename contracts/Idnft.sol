// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Idnft is ERC721 {
    struct Identity {
        string name;
        uint256 birthdate;
        bool isVerified;
    }

    mapping(address => Identity) public identities;
    address public issuer;
    uint256 private totalSupply;

    event IdentitySubmitted(address indexed identityAddress, string name, uint256 birthdate);
    event IdentityVerified(address indexed identityAddress, bool isVerified);

    constructor() ERC721("IdentityNFT", "IDNFT") {
        issuer = msg.sender;
    }

    modifier onlyIssuer() {
        require(msg.sender == issuer, "Only the issuer can perform this action");
        _;
    }

    function submitIdentity(string memory _name, uint256 _birthdate) external {
        require(bytes(_name).length > 0, "Name is required");
        require(_birthdate > 0, "Birthdate is required");

        identities[msg.sender] = Identity(_name, _birthdate, false);
        uint256 tokenId = totalSupply;
        _mint(msg.sender, tokenId);
        totalSupply++;
        emit IdentitySubmitted(msg.sender, _name, _birthdate);
    }

    function verifyIdentity(address _identityAddress) external onlyIssuer {
        require(_isIdentityRegistered(_identityAddress), "Identity not found");
        require(!identities[_identityAddress].isVerified, "Identity is already verified");

        identities[_identityAddress].isVerified = true;
        emit IdentityVerified(_identityAddress, true);
    }

    function getIdentity(address _identityAddress) external view returns (string memory, uint256, bool) {
        require(_isIdentityRegistered(_identityAddress), "Identity not found");
        Identity memory identity = identities[_identityAddress];
        return (identity.name, identity.birthdate, identity.isVerified);
    }

    function _isIdentityRegistered(address _identityAddress) internal view returns (bool) {
        return bytes(identities[_identityAddress].name).length > 0;
    }
}
