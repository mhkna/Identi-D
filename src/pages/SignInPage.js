import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";
const SignInPage = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.signInPage}>
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.signInGradientBox} />
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <div className={styles.login}>Login</div>
      </button>
      <div className={styles.forgotPassSignup}>
        <b className={styles.sep252019}>Forgot Password?</b>
        <b className={styles.sep252020}>Sign-Up</b>
      </div>
      <input
        className={styles.passwordFrame}
        type="password"
        placeholder="Password"
        maxLength
        minLength
      />
      <input
        className={styles.usernameFrame}
        type="text"
        placeholder="Username"
        maxLength
        minLength
      />
      <div className={styles.signIn}>Sign-In</div>
      <div className={styles.welcomeBack}>Welcome Back</div>
      <div className={styles.identidyFrame}>
        <img
          className={styles.deloitteDPicture}
          alt=""
          src="/deloitte-d-picture@2x.png"
        />
        <div className={styles.identi}>Identi-</div>
      </div>
    </div>
  );
};

export default SignInPage;
