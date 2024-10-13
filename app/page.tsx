import HomeScreen from "./components/HomeScreen";
import Possibilities from "./components/Possibilities/Possibilities";
import SecurityCameras from "./components/SecurityCameras/SecurityCameras";

const HomePage = () => {
  return (
    <div className="p-0">
      <HomeScreen />
      <Possibilities />
      <SecurityCameras />
    </div>
  );
};

export default HomePage;
