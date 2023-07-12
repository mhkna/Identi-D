import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProofOfResidencyContainer.module.css";

import { ethers } from 'ethers'
import Idnft from '../artifacts/contracts/Idnft.sol/Idnft.json'

const ProofOfResidencyContainer = () => {
  const navigate = useNavigate();

  const onIssueIdentityButtonClick = useCallback(() => {
    navigate("/confirmation-page");
  }, [navigate]);

  // TODO: UPDATE THIS ADDRESS!!!
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function setIdentity() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, Idnft.abi, signer)
      const transaction = await contract.submitIdentity("hi454re", 20498524)
      await transaction.wait()

      console.log("yo")
      const signerAddress = signer.getAddress()
      const identity = await contract.getIdentity(signerAddress)
      console.log(`name: ${identity[0]}`)
      console.log(`birthdate: ${BigInt(identity[1])}`)
      console.log(`is verified?: ${identity[2]}`)

      onIssueIdentityButtonClick()
    }
  }

  return (
    <div className={styles.overallInputBoxGroup}>
      <div className={styles.overallMiddleBox} />
      <div className={styles.proofOfResidencyButton}>
        <input className={styles.proofOfResidencyButtonChild} type="file" />
        <div className={styles.proofOfResidency}>Proof of Residency:</div>
      </div>
      <div className={styles.proofOfResidency2Button}>
        <input className={styles.residency2Button} type="file" />
        <div className={styles.proofOfResidency}>Proof of Residency 2:</div>
      </div>
      <div className={styles.attachBirthCertificateButto}>
        <input
          className={styles.attachBirthCertificateButtoChild}
          type="file"
        />
        <div className={styles.proofOfResidency}>Birth Certificate:</div>
      </div>
      <div className={styles.socialSecurityCardButton}>
        <input
          className={styles.attachBirthCertificateButtoChild}
          type="file"
        />
        <div className={styles.proofOfResidency}>Social Security Card:</div>
      </div>
      <div
        className={styles.issueIdentityButton}
        onClick={setIdentity}
      >
        <button className={styles.issueIdentityWrapper}>
          <div className={styles.issueIdentity}>Issue Identity</div>
        </button>
      </div>
      <input
        className={styles.didWalletAddressBox}
        type="text"
        placeholder="DID Wallet Address"
        maxLength
        minLength
      />
      <input
        className={styles.drivingRestrictionsBox}
        type="text"
        placeholder="Driving Restrictions"
        maxLength
        minLength
      />
      <input
        className={styles.hairColorBox}
        type="text"
        placeholder="Hair Color"
        maxLength
        minLength
      />
      <input
        className={styles.zipCodeBox}
        type="text"
        placeholder="Zip Code"
        maxLength={5}
        minLength
      />
      <input
        className={styles.eyeColorBox}
        type="text"
        placeholder="Eye Color"
        maxLength
        minLength
      />
      <input
        className={styles.heightBox}
        type="text"
        placeholder="Height"
        maxLength
        minLength
      />
      <input
        className={styles.cityBox}
        type="text"
        placeholder="City"
        maxLength
        minLength
      />
      <input
        className={styles.streetAdress2Box}
        type="text"
        placeholder="Street Address 2"
        maxLength
        minLength
      />
      <input
        className={styles.streetAdressBox}
        type="text"
        placeholder="Street Address 1"
        maxLength
        minLength
      />
      <input
        className={styles.dateOfBirthBox}
        type="text"
        placeholder="Date of Birth"
        maxLength
        minLength
      />
      <input
        className={styles.lastNameBox}
        type="text"
        placeholder="Last Name"
        maxLength
        minLength
      />
      <input
        className={styles.middleNameBox}
        type="text"
        placeholder="Middle Name"
        maxLength
        minLength
      />
      <input
        className={styles.firstNameBox}
        type="text"
        placeholder="First Name"
        maxLength
        minLength
        id="First Name"
      />
    </div>
  );
};

export default ProofOfResidencyContainer;
