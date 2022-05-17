import {ImageBackground} from 'react-native'
import ImageComponent from '../components/ImageComponent'

const AdaScreen = () => {
    return (
        <ImageBackground source={require('../../assets/img/968994.jpg')} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ImageComponent/>
        </ImageBackground>
)}

export default AdaScreen