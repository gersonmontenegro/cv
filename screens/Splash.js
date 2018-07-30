import React, { PureComponent } from 'react';
import { Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';

class Splash extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    //<Image source={require('./../assets/img/face.png')} style={{width: 150, resizeMode: 'contain', marginTop: 50}} />
    return (
      <View style={{marginTop: 0}}>
        <View style={{
          height: 130,
          width: screenWidth,
          backgroundColor: '#2e70ac',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Circle width={150} height={150} color="white" borderWidth={8} />
          <Image source={require('./../assets/img/grs.png')} style={{width: 100, height: 100, resizeMode: 'contain', marginTop: -125}} />
        </View>
        <View style={{width: screenWidth, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
          <Text style={{marginTop: 0, fontFamily: 'CocoGothic-Bold', fontSize: 25}}>
            Gerson Montenegro
          </Text>
          <Text style={{marginTop: 15, fontFamily: 'CocoGothic', fontSize: 20}}>
            Mobile developer
          </Text>
        </View>
      </View>
    );
  }
}

export default Splash;
