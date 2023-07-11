import styles from "./PaymentContainer.module.css";
const PaymentContainer = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.iconsHead}>
        <div className={styles.home}>
          <div className={styles.home03Wrapper}>
            <img className={styles.home03Icon} alt="" src="/home031.svg" />
          </div>
          <img className={styles.homeChild} alt="" src="/group-11.svg" />
        </div>
        <div className={styles.payments}>
          <img className={styles.bankNote03Icon} alt="" src="/banknote03.svg" />
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
          <img className={styles.home03Icon} alt="" src="/piggybank021.svg" />
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
  );
};

export default PaymentContainer;
