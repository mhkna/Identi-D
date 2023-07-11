import { useCallback, useEffect } from "react";
import IdentityContainer from "../components/IdentityContainer";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage1.module.css";
const HomePage1 = () => {
  const navigate = useNavigate();

  const onPORTALTextClick = useCallback(() => {
    navigate("/issue-identity-page");
  }, [navigate]);

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

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageChild} />
      <div className={styles.homePageItem} />
      <div className={styles.homePageInner} />
      <img
        className={styles.rotatePictureButtons}
        alt=""
        src="/rotate-picture-buttons.svg"
      />
      <IdentityContainer />
      <div className={styles.headerPages}>
        <button className={styles.home}>HOME</button>
        <div className={styles.solutions}>SOLUTIONS</div>
        <div className={styles.portal} onClick={onPORTALTextClick}>
          PORTAL
        </div>
        <div className={styles.aboutUs}>ABOUT US</div>
        <div className={styles.contactUs}>CONTACT US</div>
      </div>
      <div className={styles.profileIcon}>
        <div className={styles.profileIconChild} />
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        <b className={styles.b}>5</b>
      </div>
      <div className={styles.identiDLogo} data-animate-on-scroll>
        <img className={styles.dLogoIcon} alt="" src="/d-logo@2x.png" />
        <div className={styles.identi}>Identi-</div>
      </div>
      <img
        className={styles.handHoldingPhonePicture1}
        alt=""
        src="/hand-holding-phone-picture-1@2x.png"
      />
    </div>
  );
};

export default HomePage1;
