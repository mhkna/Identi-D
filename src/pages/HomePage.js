import NewContainer from "../components/NewContainer";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage1}>
        <div className={styles.home}>
          <img className={styles.statusbarIcon} alt="" src="/statusbar.svg" />
          <div className={styles.topAppBar}>
            <div className={styles.topAppBar1}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/ellipse-343@2x.png"
                />
                <div className={styles.headline}>Hello, User</div>
              </div>
              <img
                className={styles.notificationSolidSvgrepoComIcon}
                alt=""
                src="/notificationsolidsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className={styles.homeChild} />
          <NewContainer />
          <div className={styles.groupParent}>
            <img className={styles.frameItem} alt="" src="/group-6.svg" />
            <div className={styles.driversLicense}>
              <p className={styles.drivers}>{`Driver’s `}</p>
              <p className={styles.drivers}>License</p>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.frameInner} alt="" src="/group-61.svg" />
            <div className={styles.passport}>Passport</div>
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameInner} alt="" src="/group-62.svg" />
            <div className={styles.passport}>
              <p className={styles.drivers}>{`Social `}</p>
              <p className={styles.drivers}>Security</p>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <img className={styles.frameInner} alt="" src="/group-63.svg" />
            <div className={styles.passport}>Car Title</div>
          </div>
          <div className={styles.groupParent2}>
            <img className={styles.frameInner} alt="" src="/group-64.svg" />
            <div className={styles.passport}>
              <p className={styles.drivers}>Health</p>
              <p className={styles.drivers}>Insurance</p>
            </div>
          </div>
          <div className={styles.groupParent3}>
            <img className={styles.frameInner} alt="" src="/group-65.svg" />
            <div className={styles.passport}>
              <p className={styles.drivers}>Car</p>
              <p className={styles.drivers}>Insurance</p>
            </div>
          </div>
          <div className={styles.documentsSaved}>Documents Saved</div>
          <div className={styles.promo}>
            <div className={styles.secureYourDigital}>
              Secure Your Digital ID
            </div>
            <div className={styles.seeMore}>See more</div>
            <div className={styles.card}>
              <b className={styles.learnBestPracticesContainer}>
                <p className={styles.drivers}>Learn Best Practices</p>
                <p className={styles.drivers}>To Protect Your ID</p>
              </b>
              <div className={styles.whenDocumentsAre}>
                When documents are verified on the blockchain
              </div>
            </div>
          </div>
          <div className={styles.homeIndicator}>
            <div className={styles.homeIndicator1} />
          </div>
          <NavigationContainer />
          <img
            className={styles.iconlyboldpaper}
            alt=""
            src="/iconlyboldpaper.svg"
          />
          <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.identi}>Identi-</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
