import { View, Text,ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BiographieComponent from "../components/BiographieComponent";

const BiographieScreen = () => {
  return (
    <ImageBackground source={require('../../assets/img/968994.jpg')} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ScrollView>
            <BiographieComponent/>
        </ScrollView>
    </ImageBackground>
  );
};

export default BiographieScreen;
