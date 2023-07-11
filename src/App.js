import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ViewCredentials from "./pages/ViewCredentials";
import HomePage from "./pages/HomePage";
import DocumentsSaved from "./pages/DocumentsSaved";
import SignInPage from "./pages/SignInPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import GetStartedPage from "./pages/GetStartedPage";
import QRCode from "./pages/QRCode";
import SplashScreen from "./pages/SplashScreen";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent from "./pages/FrameComponent";
import ConfirmationPage from "./pages/ConfirmationPage";
import IssueIdentityPage from "./pages/IssueIdentityPage";
import HomePage1 from "./pages/HomePage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/documents-saved":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions-page":
        title = "";
        metaDescription = "";
        break;
      case "/get-started-page":
        title = "";
        metaDescription = "";
        break;
      case "/qr-code":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/confirmation-page":
        title = "";
        metaDescription = "";
        break;
      case "/issue-identity-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ViewCredentials />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/documents-saved" element={<DocumentsSaved />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route
        path="/terms-and-conditions-page"
        element={<TermsAndConditionsPage />}
      />
      <Route path="/get-started-page" element={<GetStartedPage />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/splash-screen" element={<SplashScreen />} />
      <Route path="/frame-1" element={<FrameComponent1 />} />
      <Route path="/frame-2" element={<FrameComponent />} />
      <Route path="/confirmation-page" element={<ConfirmationPage />} />
      <Route path="/issue-identity-page" element={<IssueIdentityPage />} />
      <Route path="/home-page1" element={<HomePage1 />} />
    </Routes>
  );
}
export default App;
