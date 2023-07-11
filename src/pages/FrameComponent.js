import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.image13Parent}>
      <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.driversLicenseCa1529835Container}>
        <p className={styles.driversLicense}>Drivers License</p>
        <p className={styles.driversLicense}>CA1529835</p>
      </div>
      <div className={styles.nameJohnDoeContainer}>
        <p className={styles.name}>Name</p>
        <p className={styles.johnDoe}>John Doe</p>
        <p className={styles.name}>&nbsp;</p>
        <p className={styles.name}>Over 21</p>
        <p className={styles.johnDoe}>True</p>
        <p className={styles.johnDoe}>&nbsp;</p>
        <p className={styles.name}>Driver Photo</p>
      </div>
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.frameInner} />
      <div className={styles.issuedSeptember10}>Issued: September 10, 2021</div>
    </div>
  );
};

export default FrameComponent;
