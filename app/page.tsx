import HomeScreen from "./components/HomeScreen/HomeScreen";
import Possibilities from "./components/Possibilities/Possibilities";
import FormCalculation from "./components/FormCalculation/FormCalculation";
import SecurityCamerasMobile from "./components/SecurityCameras/SecurityCamerasMobile";
import SecurityCameras from "./components/SecurityCameras/SecurityCameras";
import ImageQuality from "./components/ImageQuality/ImageQuality";
import HotQuestions from "./components/HotQuestions/HotQuestions";
import SEOText from "./components/SEOText/SEOText";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import Footer from "./components/Footer/Footer";


const HomePage = () => {
  return (
    <div className="p-0">
      <HomeScreen />
      <Possibilities />
      <FormCalculation />
      <SecurityCamerasMobile />
      <SecurityCameras />
      <ImageQuality />
      <HotQuestions />
      <SEOText />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default HomePage;
