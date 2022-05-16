import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BiographieComponent from "../components/BiographieComponent";

const BiographieScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView>
            <BiographieComponent/>
        </ScrollView>
    </View>
  );
};

export default BiographieScreen;
