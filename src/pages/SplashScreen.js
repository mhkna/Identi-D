import styles from "./SplashScreen.module.css";
const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      <div className={styles.identidyFrame}>
        <img
          className={styles.deloitteDPicture}
          alt=""
          src="/deloitte-d-picture@2x.png"
        />
      </div>
      <div className={styles.identi}>Identi-</div>
      <div className={styles.identityThatMatters}>Identity that matters</div>
      <div className={styles.identityThatMatters}>Identity that matters</div>
      <img
        className={styles.getStartedPagePhoto}
        alt=""
        src="/get-started-page-photo@2x.png"
      />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.loading}>Loading....</div>
    </div>
  );
};

export default SplashScreen;
