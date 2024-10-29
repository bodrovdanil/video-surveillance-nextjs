import HomeScreen from "./components/HomeScreen";
import Possibilities from "./components/Possibilities/Possibilities";
import FormCalculation from "./components/FormCalculation/FormCalculation";
import SecurityCameras from "./components/SecurityCameras/SecurityCameras";
import ImageQuality from "./components/ImageQuality/ImageQuality";
import HotQuestions from "./components/HotQuestions/HotQuestions";

const HomePage = () => {
  return (
    <div className="p-0">
      <HomeScreen />
      <Possibilities />
      <FormCalculation />
      <SecurityCameras />
      <ImageQuality />
      <HotQuestions />
    </div>
  );
};

export default HomePage;
