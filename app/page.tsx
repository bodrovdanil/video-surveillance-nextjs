import HomeScreen from "./components/HomeScreen/HomeScreen";
import Possibilities from "./components/Possibilities/Possibilities";
import FormCalculation from "./components/FormCalculation/FormCalculation";
import SecurityCamerasMobile from "./components/SecurityCameras/SecurituCamerasMobile";
import SecurityCameras from "./components/SecurityCameras/SecurityCameras";
import ImageQuality from "./components/ImageQuality/ImageQuality";
import HotQuestions from "./components/HotQuestions/HotQuestions";
import SEOText from "./components/SEOText/SEOText";


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
    </div>
  );
};

export default HomePage;
