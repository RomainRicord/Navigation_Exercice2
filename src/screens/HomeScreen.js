import {View,Text, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Bienvenue !</Text>
            <Button title="Rentrer" onPress={() => {navigation.navigate("Drawer")}}/>
        </View>
)}

export default HomeScreen