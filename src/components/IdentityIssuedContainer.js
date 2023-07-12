import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IdentityIssuedContainer.module.css";



const IdentityIssuedContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onIssueNewIdentityFrameClick = useCallback(() => {
    navigate("/issue-identity-page");
  }, [navigate]);

  return (
    <div className={styles.overallInputBoxFrame} data-animate-on-scroll>
      <div className={styles.overallMiddleBox} />
      <button
        className={styles.issueNewIdentityFrame}
        onClick={onIssueNewIdentityFrameClick}
      >
        <div className={styles.issueNewIdentity}>Issue New Identity</div>
      </button>
      <div className={styles.helpFrame}>
        <div className={styles.help}>Help</div>
      </div>
      <div className={styles.userShouldCheck}>
        User should check email for confirmation email
      </div>
      <b className={styles.identityIssued}>Identity Issued</b>
    </div>
  );
};

export default IdentityIssuedContainer;
