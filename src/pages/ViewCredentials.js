import { useCallback, useEffect, useState } from "react";
import PaymentContainer from "../components/PaymentContainer";
import { useNavigate } from "react-router-dom";
import styles from "./ViewCredentials.module.css";

import { ethers } from 'ethers'
import Idnft from '../artifacts/contracts/Idnft.sol/Idnft.json'

const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

const ViewCredentials = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  useEffect(() => {
    //fetch token address
    fetchData()

  }, []);

  async function fetchData() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = await provider.getSigner()
      const signerAddress = signer.getAddress()
      const contract = new ethers.Contract(contractAddress, Idnft.abi, provider)
      try {
        console.log(signerAddress)
        const data = await contract.getIdentity(signerAddress)
        console.log(`name: ${data[0]}`)
        console.log(`birthdate ${data[1]}`)
        setName(data[0])
        setBirthdate(data[1])
        console.log(name)
        console.log(birthdate)
      } catch (err) {
        console.log("Error: ", err)
      }
      return
    }
  }

  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/qr-code");
  }, [navigate]);

  const onContinueTextClick = useCallback(() => {
    navigate("/qr-code");
  }, [navigate]);

  return (
    <div className={styles.viewCredentials}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </div>
      <div className={styles.verifiablePresentation}>
        <img className={styles.statusbarIcon} alt="" src="/statusbar1.svg" />
        <div className={styles.balance}>
          <div className={styles.availableBalance}>Available Balance</div>
        </div>
        <div className={styles.verifiablePresentationChild} />
        <div className={styles.verifiablePresentation1}>
          Verifiable Presentation
        </div>
        <PaymentContainer />
        <img
          className={styles.iconlyboldpaper}
          alt=""
          src="/iconlyboldpaper1.svg"
        />
        <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
        <div className={styles.identi}>Identi-</div>
        <div className={styles.verifiablePresentationItem} />
        <div className={styles.driversLicense}>Driver’s License</div>
        <div className={styles.credentials}>Credentials</div>
        <div className={styles.name}>Name</div>
        <div className={styles.birthDate}>Birth Date</div>
        <div className={styles.address}>Address</div>
        <div className={styles.driversLicenseNumber}>
          Driver’s License Number
        </div>
        <div className={styles.height}>Height</div>
        <div className={styles.issueDate}>Issue Date</div>
        <div className={styles.hairColor}>Hair Color</div>
        <div className={styles.div}>98746273</div>
        <div className={styles.div1}>6’7”</div>
        <div className={styles.div2}>07/12/2023</div>
        <div className={styles.black}>Black</div>
        <img
          className={styles.verifiablePresentationInner}
          alt=""
          src="/vector-1.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        <img
          className={styles.verifiablePresentationChild1}
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.verifiablePresentationChild2}
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.verifiablePresentationChild3}
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.verifiablePresentationChild4}
          alt=""
          src="/vector-1.svg"
        />
        <img
          className={styles.verifiablePresentationChild5}
          alt=""
          src="/vector-7.svg"
        />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-36.svg"
          onClick={onRectangle2Click}
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.continue} onClick={onContinueTextClick}>
          Continue
        </div>
        <div className={styles.decline}>Decline</div>

        {name ?
          <div className={styles.bobSmith}>{name}</div> :
          <div className={styles.bobSmith}>Bob Smith</div>
        }

        {birthdate ?
          <div className={styles.div3}>{birthdate}</div> :
          <div className={styles.div3}>5/13/1975</div>
        }

      </div>
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <div className={styles.shakedownStreetNashvilleContainer}>
        <p className={styles.shakedownStreet}>{`116 Shakedown Street, `}</p>
        <p className={styles.shakedownStreet}>Nashville TN</p>
      </div>
    </div>
  );
};

export default ViewCredentials;
