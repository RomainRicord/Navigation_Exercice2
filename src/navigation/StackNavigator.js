import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}
        
        >
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={DrawerNavigator} name="Drawer" />
    </Stack.Navigator>)
}

export default StackNavigator