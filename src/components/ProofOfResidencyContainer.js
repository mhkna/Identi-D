import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProofOfResidencyContainer.module.css";

import { ethers } from 'ethers'
import Idnft from '../artifacts/contracts/Idnft.sol/Idnft.json'

const ProofOfResidencyContainer = () => {
  const navigate = useNavigate();

  const onIssueIdentityButtonClick = useCallback(() => {
    navigate("/confirmation-page");
  }, [navigate]);

  const [inputField, setInputField] = useState({
    name: '',
    birthdate: ''
  });

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const inputsHandler = (e) =>{
    setInputField( {[e.target.name]: e.target.value} )
  }

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  // TODO: UPDATE THIS ADDRESS!!!
  const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function setIdentity() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, Idnft.abi, signer)
      //const transaction = await contract.submitIdentity("hi454re", "20498524")
      const transaction = await contract.submitIdentity(name, inputField.birthdate)
      await transaction.wait()

      const signerAddress = signer.getAddress()
      const identity = await contract.getIdentity(signerAddress)
      console.log(`name: ${identity[0]}`)
      console.log(`birthdate: ${identity[1]}`)
      console.log(`is verified?: ${identity[2]}`)
      console.log(`uri: ${identity[3]}`)

      onIssueIdentityButtonClick()
      return
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
      />
      <input
        className={styles.drivingRestrictionsBox}
        type="text"
        placeholder="Driving Restrictions"
      />
      <input
        className={styles.hairColorBox}
        type="text"
        placeholder="Hair Color"
      />
      <input
        className={styles.zipCodeBox}
        type="text"
        placeholder="Zip Code"
        maxLength={5}
      />
      <input
        className={styles.eyeColorBox}
        type="text"
        placeholder="Eye Color"
      />
      <input
        className={styles.heightBox}
        type="text"
        placeholder="Height"
      />
      <input
        className={styles.cityBox}
        type="text"
        placeholder="City"
      />
      <input
        className={styles.streetAdress2Box}
        type="text"
        placeholder="Street Address 2"
      />
      <input
        className={styles.streetAdressBox}
        type="text"
        placeholder="Street Address 1"
      />
      <input
        className={styles.dateOfBirthBox}
        type="text"
        placeholder="Date of Birth"
        name="birthdate"
        onChange={inputsHandler}
        value={inputField.birthdate}
      />
      <input
        className={styles.lastNameBox}
        type="text"
        placeholder="Last Name"
      />
      <input
        className={styles.middleNameBox}
        type="text"
        placeholder="Middle Name"
      />
      <input
        className={styles.firstNameBox}
        type="text"
        placeholder="First Name"
        name="name"
        onChange={nameHandler}
        value={name}
        id="First Name"
      />
    </div>
  );
};

export default ProofOfResidencyContainer;
