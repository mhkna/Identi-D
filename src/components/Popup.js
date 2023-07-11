import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Popup.module.css";
const Popup = ({ onClose }) => {
  const navigate = useNavigate();

  const onNormalButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.popup}>
      <img className={styles.questionIcon} alt="" src="/question.svg" />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.createAVerifiable}>
            Create a Verifiable Presentation?
          </div>
          <div className={styles.documentSelectedDriversContainer}>
            <span className={styles.docu}>Docu</span>
            <span className={styles.m}>m</span>
            <span className={styles.docu}>ent Selected: Driver’s License</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          className={styles.normalButton}
          variant="outline-success"
          onClick={onNormalButtonClick}
        >
          Yes
        </Button>
        <Button className={styles.normalButton1} variant="warning">
          No
        </Button>
      </div>
    </div>
  );
};

export default Popup;
