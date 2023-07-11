import styles from "./NewContainer.module.css";
const NewContainer = () => {
  return (
    <div className={styles.homeInner}>
      <div className={styles.topUpParent}>
        <div className={styles.topUp}>
          <img
            className={styles.iconlylightwallet}
            alt=""
            src="/iconlylightwallet.svg"
          />
          <div className={styles.new}>{`New `}</div>
        </div>
        <div className={styles.topUp}>
          <img
            className={styles.moneyTransferSvgrepoCom1Icon}
            alt=""
            src="/moneytransfersvgrepocom-1.svg"
          />
          <div className={styles.new}>Update</div>
        </div>
        <div className={styles.topUp}>
          <img
            className={styles.moneyTransferSvgrepoCom1Icon}
            alt=""
            src="/historysvgrepocom-1.svg"
          />
          <div className={styles.new}>History</div>
        </div>
      </div>
    </div>
  );
};

export default NewContainer;
