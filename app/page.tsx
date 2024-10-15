import FormCalculation from "./components/FormCalculation/FormCalculation";
import HomeScreen from "./components/HomeScreen";
import Possibilities from "./components/Possibilities/ossibilities";
import SecurityCameras from "./components/SecurityCameras/SecurityCameras";

const HomePage = () => {
  return (
    <div className="p-0">
      <HomeScreen />
      <Possibilities />
      <SecurityCameras />
      <FormCalculation />
    </div>
  );
};

export default HomePage;
