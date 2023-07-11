import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GetStartedPage.module.css";
const GetStartedPage = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/terms-and-conditions-page");
  }, [navigate]);

  return (
    <div className={styles.getStartedPage}>
      <div className={styles.frameParent}>
        <button className={styles.frame} onClick={onFrameClick}>
          <div className={styles.getStarted}>Get started</div>
        </button>
        <div className={styles.identidyFrame}>
          <img
            className={styles.deloitteDPicture}
            alt=""
            src="/deloitte-d-picture@2x.png"
          />
        </div>
        <div className={styles.identi}>Identi-</div>
        <div className={styles.identityThatMatters}>Identity that matters</div>
        <img
          className={styles.getStartedPagePhoto}
          alt=""
          src="/get-started-page-photo@2x.png"
        />
        <div className={styles.homeindicator}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
