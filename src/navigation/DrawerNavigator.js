import AdaScreen from '../screens/AdaScreen';
import PersonnageScreen from '../screens/PersonnageScreen';
import BiographieScreen from '../screens/BiographieScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
    <Drawer.Navigator initialRouteName='Accueil'>

        <Drawer.Screen name="Ada LOVELACE" component={AdaScreen} />
        <Drawer.Screen name="Personnage" component={PersonnageScreen} />
        <Drawer.Screen name="Biographie" component={BiographieScreen} />

    </Drawer.Navigator>)
}

export default DrawerNavigator