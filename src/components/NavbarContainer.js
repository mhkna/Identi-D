import styles from "./NavbarContainer.module.css";
const NavbarContainer = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.iconsHead}>
        <button className={styles.home}>
          <div className={styles.home03Wrapper}>
            <img className={styles.home03Icon} alt="" src="/home032.svg" />
          </div>
          <img className={styles.homeChild} alt="" src="/group-12.svg" />
        </button>
        <div className={styles.payments}>
          <img
            className={styles.bankNote03Icon}
            alt=""
            src="/banknote0311.svg"
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
          <img className={styles.home03Icon} alt="" src="/piggybank022.svg" />
          <div className={styles.text}>
            <div className={styles.payments1}>Balance</div>
          </div>
        </div>
        <div className={styles.more}>
          <img
            className={styles.home03Icon}
            alt=""
            src="/morehorizontal2.svg"
          />
          <div className={styles.text}>
            <div className={styles.payments1}>More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
