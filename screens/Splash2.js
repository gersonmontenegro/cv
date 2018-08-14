import React, { PureComponent } from 'react';
import { Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import SplashScreen from 'react-native-splash-screen';

class Splash2 extends PureComponent{
  constructor(props){
    super(props);
    // SplashScreen.hide();
  }

  componentDidMount(){
    // SplashScreen.hide();
  }

  render(){
    //<Image source={require('./../assets/img/face.png')} style={{width: 150, resizeMode: 'contain', marginTop: 50}} />
    return (
      <View style={{marginTop: 0}}>
        <View style={{
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('./../assets/img/grs_pixel_with_circle_200.png')} style={{width: 200, height: 200, resizeMode: 'contain'}} />
        </View>
      </View>
    );
  }
}

export default Splash2;
