import { ImageBackground } from "react-native";
import PersonnageComponent from "../components/PersonnageComponent";

const PersonnageScreen = () => {
  return (
    <ImageBackground source={require('../../assets/img/968994.jpg')} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
      <PersonnageComponent/>
    </ImageBackground>
  );
};

export default PersonnageScreen;
