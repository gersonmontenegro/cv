import React, { PureComponent } from 'react';
import { Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';

class Intro extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{marginTop: 0}}>
        <View style={{
          height: 130,
          width: screenWidth,
          marginLeft: 5,
          marginRight: 5,
          backgroundColor: '#2e70ac',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('./../assets/img/face.png')} style={{width: 150, resizeMode: 'contain', marginTop: 50}} />
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

export default Intro;
