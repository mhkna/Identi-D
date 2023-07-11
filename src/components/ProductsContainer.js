import { useMemo } from "react";
import styles from "./ProductsContainer.module.css";
const ProductsContainer = ({
  productBalance,
  productBalanceText,
  propOverflow,
  propBorderRadius,
}) => {
  const productsStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      borderRadius: propBorderRadius,
    };
  }, [propOverflow, propBorderRadius]);

  return (
    <div className={styles.products} style={productsStyle}>
      <img className={styles.boxIcon} alt="" src={productBalance} />
      <div className={styles.text}>
        <div className={styles.products1}>{productBalanceText}</div>
      </div>
    </div>
  );
};

export default ProductsContainer;
