import { Header } from '@react-navigation/stack'
import {View,Image} from 'react-native'

const HeaderComponent = (props) => {
    return(
        <View>
            <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
            /> 
            <Header {...props} style={{ backgroundColor: 'transparent' }}/>
        </View>
    )
}

