import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import { VictoryPie } from 'victory-native';
import PieDetail from './../components/PieDetail';
import Bars from './../components/charts/Bars';

const timer = require('react-native-timer');

class Skills extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView style={{marginTop: 20}}>
            <Bars name='ActionScript' startAt={0} percentaje={90} primaryColor='#db4e4e' />
            <Bars name='Ionic' startAt={90} percentaje={70} primaryColor='#2f9cfc' />
            <Bars name='PHP' startAt={180} percentaje={75} primaryColor='#627dbc' />
            <Bars name='Laravel' startAt={270} percentaje={50} primaryColor='#f0514b' />
            <Bars name='React Native' startAt={360} percentaje={30} primaryColor='#1ca6cd' />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Skills;
