import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import styles from "./NavigationContainer.module.css";
const NavigationContainer = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/documents-saved");
  }, [navigate]);

  return (
    <div className={styles.navbar}>
      <div className={styles.iconsHead}>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.home03Wrapper}>
            <img className={styles.home03Icon} alt="" src="/home03.svg" />
          </div>
          <div className={styles.text}>
            <div className={styles.home1}>Home</div>
          </div>
          <img className={styles.homeChild} alt="" src="/group-1.svg" />
        </div>
        <div className={styles.payments}>
          <img
            className={styles.bankNote03Icon}
            alt=""
            src="/banknote031.svg"
          />
          <div className={styles.text1}>
            <div className={styles.payments1}>Payments</div>
          </div>
        </div>
        <ProductsContainer
          productBalance="/box.svg"
          productBalanceText="Products"
        />
        <ProductsContainer
          productBalance="/piggybank02.svg"
          productBalanceText="Balance"
          propOverflow="hidden"
          propBorderRadius="unset"
        />
        <ProductsContainer
          productBalance="/morehorizontal.svg"
          productBalanceText="More"
          propOverflow="unset"
          propBorderRadius="0px var(--br-10xs) 0px 0px"
        />
      </div>
    </div>
  );
};

export default NavigationContainer;
