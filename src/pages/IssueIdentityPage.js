import { useCallback } from "react";
import ProofOfResidencyContainer from "../components/ProofOfResidencyContainer";
import { useNavigate } from "react-router-dom";
import styles from "./IssueIdentityPage.module.css";
import Idnft from '../artifacts/contracts/Idnft.sol/Idnft.json'

const IssueIdentityPage = () => {
  const navigate = useNavigate();

  const onHOMEClick = useCallback(() => {
    navigate("/home-page1");
  }, [navigate]);

  return (
    <div className={styles.issueIdentityPage}>
      <div className={styles.issueIdentityPageChild} />
      <div className={styles.issueIdentityPageItem} />
      <div className={styles.issueIdentityPageInner} />
      <ProofOfResidencyContainer />
      <div className={styles.headerPages}>
        <button className={styles.home} onClick={onHOMEClick}>
          HOME
        </button>
        <div className={styles.solutions}>SOLUTIONS</div>
        <div className={styles.portal}>PORTAL</div>
        <div className={styles.aboutUs}>ABOUT US</div>
        <div className={styles.contactUs}>CONTACT US</div>
      </div>
      <div className={styles.profileIcon}>
        <div className={styles.profileIconChild} />
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        <b className={styles.b}>5</b>
      </div>
      <div className={styles.identidLogo}>
        <img className={styles.image1Icon} alt="" src="/d-logo@2x.png" />
        <div className={styles.identi}>Identi-</div>
      </div>
      <b className={styles.identityForThe}>Identity For The Future</b>
    </div>
  );
};

export default IssueIdentityPage;
