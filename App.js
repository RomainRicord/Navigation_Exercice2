import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AdaScreen from './src/screens/AdaScreen';
import PersonnageScreen from './src/screens/PersonnageScreen';
import BiographieScreen from './src/screens/BiographieScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>        
        <Drawer.Navigator initialRouteName='Accueil'>

          <Drawer.Screen name="Accueil" component={HomeScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }} /> 
          <Drawer.Screen name="Ada LOVELACE" component={AdaScreen} />
          <Drawer.Screen name="Personnage" component={PersonnageScreen} />
          <Drawer.Screen name="Biographie" component={BiographieScreen} />

        </Drawer.Navigator>
    </NavigationContainer>
)}

export default App