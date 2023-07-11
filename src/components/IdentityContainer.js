import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IdentityContainer.module.css";
const IdentityContainer = () => {
  const navigate = useNavigate();

  const onIssueIdentityFrameClick = useCallback(() => {
    navigate("/issue-identity-page");
  }, [navigate]);

  return (
    <div className={styles.middlePageGrouping}>
      <div className={styles.aboutOurSolutionFrame}>
        <div className={styles.aboutOurSolution}>About our Solution</div>
      </div>
      <button
        className={styles.issueIdentityFrame}
        onClick={onIssueIdentityFrameClick}
      >
        <div className={styles.issueIdentity}>Issue Identity</div>
      </button>
      <div className={styles.oneStopSolutionToSimplifyWrapper}>
        <div className={styles.oneStopSolution}>
          One stop solution to simplify identification, documentation, and
          credentials
        </div>
      </div>
      <div className={styles.identityForTheFutureWrapper}>
        <b className={styles.identityForThe}>Identity For The Future</b>
      </div>
    </div>
  );
};

export default IdentityContainer;
