import AdaScreen from '../screens/AdaScreen';
import PersonnageScreen from '../screens/PersonnageScreen';
import BiographieScreen from '../screens/BiographieScreen';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useDrawerProgress,
  } from '@react-navigation/drawer';
import {View,Text,Button} from 'react-native'
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const progress = useDrawerProgress();
  
    const translateX = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [-500, 0],
    });
  
    return (
      <DrawerContentScrollView {...props} style={{backgroundColor:"rgb(20,20,20)"}}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...props} />
        </Animated.View>
      </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return(
       <Drawer.Navigator initialRouteName='Biographie'
        useLegacyImplementation
        screenOptions={{
            drawerActiveTintColor:'#e91e63',
            drawerInactiveTintColor:'#ffffff',
            headerTintColor:'#e91e63',
            headerStyle: {
                backgroundColor:'rgb(20,20,20)',
                borderBottomColor:'rgb(20,20,20)',
                borderBottomWidth:0.5
                 // Specify the height of your custom header
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color:'#e91e63',
            },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >

        <Drawer.Screen name="Ada LOVELACE" component={AdaScreen} />
        <Drawer.Screen name="Personnage" component={PersonnageScreen} />
        <Drawer.Screen name="Biographie" component={BiographieScreen} />

    </Drawer.Navigator>)
}

export default DrawerNavigator