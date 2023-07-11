import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TermsAndConditionsPage.module.css";
const TermsAndConditionsPage = () => {
  const navigate = useNavigate();

  const onExistingAccountBoxClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.termsAndConditionsPage}>
      <div className={styles.newAccountExistingAccount}>
        <div className={styles.identidyTitle}>
          <div className={styles.identi}>Identi-</div>
          <img
            className={styles.deloitteDPicture}
            alt=""
            src="/deloitte-d-picture1@2x.png"
          />
        </div>
        <div
          className={styles.oneStopSolution}
        >{`One stop solution to simplify identification,  documentation, and credentials `}</div>
        <div className={styles.iAgreeWithContainer}>
          <p className={styles.iAgreeWithTheUserTerms}>
            {`I agree with the `}
            <span className={styles.userTerms}>User Terms</span>
          </p>
          <p className={styles.iAgreeWithTheUserTerms}>
            {`and `}
            <span className={styles.userTerms}>Conditions</span>
          </p>
        </div>
        <div className={styles.newAccountBox}>
          <img className={styles.icon} alt="" src="/1.svg" />
          <div className={styles.createANew}>Create a new Identi-D account</div>
          <div className={styles.newAccount}>New Account</div>
          <img className={styles.greyStarBox} alt="" src="/grey-star-box.svg" />
        </div>
        <button
          className={styles.existingAccountBox}
          onClick={onExistingAccountBoxClick}
        >
          <img className={styles.icon1} alt="" src="/11.svg" />
          <div className={styles.restoreYourAccount}>Restore your account</div>
          <b className={styles.existingAccount}>Existing Account</b>
          <img
            className={styles.greenStarBox}
            alt=""
            src="/green-star-box.svg"
          />
        </button>
        <div className={styles.homeindicator}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
      <input className={styles.termsAndConditionsPageChild} type="checkbox" />
    </div>
  );
};

export default TermsAndConditionsPage;
