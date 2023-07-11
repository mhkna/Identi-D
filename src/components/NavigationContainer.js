import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ProductsContainer from "./ProductsContainer";
import styles from "./NavigationContainer.module.css";
const NavigationContainer = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.iconsHead}>
        <div className={styles.home}>
          <div className={styles.home03Wrapper}>
            <img className={styles.home03Icon} alt="" src="/home03.svg" />
          </div>
          <div className={styles.text}>
            <div className={styles.home1}>Home</div>
          </div>
          <img className={styles.homeChild} alt="" src="/group-1.svg" />
        </div>
        <Button
          className={styles.payments}
          variant="outline"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Button
        </Button>
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
