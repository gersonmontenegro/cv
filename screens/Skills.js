import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import { VictoryPie } from 'victory-native';
import PieDetail from './../components/PieDetail';

const timer = require('react-native-timer');

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
          <ScrollView style={{marginTop: 20}}>
            <PieDetail color="green" percent={95} pie_title="ActionScript" pie_description="iOS, Android, and Desktop developer" />
            <PieDetail color="lightblue" percent={70} pie_title="Ionic" pie_description="iOS and Android developer" />
            <PieDetail color="blue" percent={50} pie_title="React-Native" pie_description="iOS and Android developer" />
            <PieDetail color="orange" percent={70} pie_title="PHP" pie_description="Web developer" />
            <PieDetail color="red" percent={50} pie_title="Laravel" pie_description="PHP developer" />
          </ScrollView>
          <View style={{position: 'absolute', alignItems: 'center', marginLeft: (screenWidth/2) - 45, marginTop: -115}}>
            <Circle width={90} height={90} color="white" borderWidth={5} marginTop={40} />
            <Image source={require('./../assets/img/grs.png')} style={{width: 60, height: 60, resizeMode: 'contain', marginTop: -75}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Skills;
