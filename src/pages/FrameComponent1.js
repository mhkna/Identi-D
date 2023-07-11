import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.image16Parent}>
      <img className={styles.image16Icon} alt="" src="/image-1311@2x.png" />
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.scanQrCode}>Scan QR Code</div>
      <img className={styles.groupIcon} alt="" src="/group-4.svg" />
      <button className={styles.vectorParent} onClick={onFrameButtonClick}>
        <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
        <div className={styles.scanQrCode1}>Scan QR Code</div>
      </button>
    </div>
  );
};

export default FrameComponent1;
