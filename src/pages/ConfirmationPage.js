import { useCallback } from "react";
import IdentityIssuedContainer from "../components/IdentityIssuedContainer";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmationPage.module.css";
const ConfirmationPage = () => {
  const navigate = useNavigate();

  const onHOMEClick = useCallback(() => {
    navigate("/home-page1");
  }, [navigate]);

  return (
    <div className={styles.confirmationPage}>
      <div className={styles.confirmationPageChild} />
      <div className={styles.confirmationPageItem} />
      <div className={styles.confirmationPageInner} />
      <IdentityIssuedContainer />
      <b className={styles.identityForThe}>Identity For The Future</b>
      <div className={styles.profileIcon}>
        <div className={styles.profileIconChild} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.b}>5</b>
      </div>
      <div className={styles.headerPages}>
        <button className={styles.home} onClick={onHOMEClick}>
          HOME
        </button>
        <div className={styles.solutions}>SOLUTIONS</div>
        <div className={styles.portal}>PORTAL</div>
        <div className={styles.aboutUs}>ABOUT US</div>
        <div className={styles.contactUs}>CONTACT US</div>
      </div>
      <div className={styles.identidLogo}>
        <img className={styles.image1Icon} alt="" src="/d-logo@2x.png" />
        <div className={styles.identi}>Identi-</div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
