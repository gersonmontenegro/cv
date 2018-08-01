import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';

class Skills extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <View style={{
          height: 100,
          width: screenWidth,
          backgroundColor: '#2e70ac',
          alignItems: 'center'
        }}>
        </View>
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView>
            
          </ScrollView>
          <View style={{position: 'absolute', alignItems: 'center', marginLeft: (screenWidth/2) - 45, marginTop: -100}}>
            <Circle width={90} height={90} color="white" borderWidth={5} marginTop={40} />
            <Image source={require('./../assets/img/grs.png')} style={{width: 60, height: 60, resizeMode: 'contain', marginTop: -75}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Skills;
