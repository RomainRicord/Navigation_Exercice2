import {Text, Button,ImageBackground, Pressable} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/img/968994.jpg')} style={{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Text style={{color:'white',fontSize:40,textAlign:'center'}}>Bienvenue !</Text>
            <Pressable onPress={() => {navigation.navigate("Drawer")}} style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(20,20,20,1)',width:300,height:62,borderRadius:20,borderColor:'#e91e63',borderWidth:2}}>
                <Text style={{color:'white',fontSize:32,fontWeight:'bold',textAlign:'center'}}>Entrer</Text>
            </Pressable>
        </ImageBackground>
)}

export default HomeScreen