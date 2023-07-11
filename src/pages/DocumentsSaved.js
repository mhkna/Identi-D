import { useState, useCallback } from "react";
import Popup from "../components/Popup";
import PortalPopup from "../components/PortalPopup";
import NavbarContainer from "../components/NavbarContainer";
import styles from "./DocumentsSaved.module.css";
const DocumentsSaved = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.documentsSaved}>
        <div className={styles.documentsSaved1}>
          <img className={styles.statusbarIcon} alt="" src="/statusbar2.svg" />
          <div className={styles.balance}>
            <div className={styles.availableBalance}>Available Balance</div>
          </div>
          <div className={styles.documentsSavedChild} />
          <div className={styles.documentsSaved2}>Documents Saved</div>
          <div className={styles.homeIndicator}>
            <div className={styles.homeIndicator1} />
          </div>
          <NavbarContainer />
          <img
            className={styles.iconlyboldpaper}
            alt=""
            src="/iconlyboldpaper2.svg"
          />
          <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
          <div className={styles.identi}>Identi-</div>
          <button
            className={styles.documentsSavedItem}
            autoFocus
            onClick={openPopup}
          />
          <div className={styles.documentsSavedInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.documentsSavedChild1} />
          <div className={styles.driversLicense}>Driver’s License</div>
          <div className={styles.passport}>Passport</div>
          <div className={styles.socialSecurity}>Social Security</div>
          <div className={styles.carTitle}>Car Title</div>
          <div className={styles.credentials}>Credentials</div>
          <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
          <i className={styles.issuedSept2021}>Issued: Sept. 2021</i>
          <i className={styles.issuedNov2013}>Issued: Nov. 2013</i>
          <i className={styles.issuedSept1985}>Issued: Sept. 1985</i>
          <i className={styles.issuedJan2017}>Issued: Jan. 2017</i>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.verified}>Verified</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <div className={styles.verified1}>Verified</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild} />
            <div className={styles.verified1}>Verified</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild1} />
              <div className={styles.expired}>Expired</div>
            </div>
          </div>
          <div className={styles.id98746273}>ID: 98746273</div>
          <div className={styles.idZm478qt}>ID: ZM-478QT</div>
          <div className={styles.id663}>ID: 663-**-****</div>
          <div className={styles.vinZm43f5g67jjq}>VIN: ZM43F5G67JJQ</div>
        </div>
      </div>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DocumentsSaved;
