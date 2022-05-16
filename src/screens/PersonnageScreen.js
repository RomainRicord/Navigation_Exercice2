import { View, Text } from "react-native";
import PersonnageComponent from "../components/PersonnageComponent";

const PersonnageScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PersonnageComponent/>
    </View>
  );
};

export default PersonnageScreen;
