import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QRCode.module.css";

import { ethers } from 'ethers'
import Idnft from '../artifacts/contracts/Idnft.sol/Idnft.json'
import QRCode from "react-qr-code";

const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

const QRCodeComponent = () => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    //fetch token address
    fetchUri()

  });

  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  async function fetchUri() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = await provider.getSigner()
      const signerAddress = signer.getAddress()
      const contract = new ethers.Contract(contractAddress, Idnft.abi, provider)
      try {
        console.log(signerAddress)
        const data = await contract.getIdentity(signerAddress)
        console.log(`uri: ${data[3]}`)
        setUri(data[3])
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  return (
    <div className={styles.qrCode}>
      <div className={styles.statusbarParent}>
        <img className={styles.statusbarIcon} alt="" src="/statusbar3.svg" />
        <div className={styles.frameChild} />
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicator1} />
        </div>
        <div className={styles.navbar}>
          <div className={styles.iconsHead}>
            <div className={styles.homeParent}>
              <button className={styles.home}>
                <div className={styles.home03Wrapper}>
                  <img
                    className={styles.home03Icon}
                    alt=""
                    src="/home031.svg"
                  />
                </div>
                <img className={styles.homeChild} alt="" src="/group-11.svg" />
              </button>
              <div className={styles.payments}>
                <img
                  className={styles.bankNote03Icon}
                  alt=""
                  src="/banknote03.svg"
                />
                <div className={styles.text}>
                  <div className={styles.payments1}>Payments</div>
                </div>
              </div>
              <div className={styles.payments}>
                <img className={styles.home03Icon} alt="" src="/box1.svg" />
                <div className={styles.text}>
                  <div className={styles.payments1}>Products</div>
                </div>
              </div>
              <div className={styles.balance}>
                <img
                  className={styles.home03Icon}
                  alt=""
                  src="/piggybank021.svg"
                />
                <div className={styles.text}>
                  <div className={styles.payments1}>Balance</div>
                </div>
              </div>
              <div className={styles.more}>
                <img
                  className={styles.home03Icon}
                  alt=""
                  src="/morehorizontal1.svg"
                />
                <div className={styles.text}>
                  <div className={styles.payments1}>More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
        <div className={styles.identi}>Identi-</div>
        <div className={styles.frameItem} />
        <div className={styles.credentials}>Credentials</div>
        <div className={styles.verifyCredential}>Verify Credential</div>
        <div className={styles.scanYourQr}>Scan your QR Code</div>
        <div className={styles.image1Parent}>

          { uri ?
            <QRCode className={styles.image1Icon} value={uri} />
            :
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          }

          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
        <div className={styles.frameInner} onClick={onRectangle2Click} />
        <div className={styles.vectorParent} onClick={onFrameContainer3Click}>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <div className={styles.done}>Done</div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeComponent;
