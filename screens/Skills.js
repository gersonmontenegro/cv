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
            <Bars name='ActionScript' percentaje={90} primaryColor='#db4e4e' />
            <Bars name='Ionic' percentaje={70} primaryColor='#2f9cfc' />
            <Bars name='PHP' percentaje={75} primaryColor='#627dbc' />
            <Bars name='Laravel' percentaje={50} primaryColor='#f0514b' />
            <Bars name='React Native' percentaje={30} primaryColor='#1ca6cd' />

            {/* <PieDetail color="green" percent={95} pie_title="ActionScript" pie_description="iOS, Android, and Desktop developer" />
            <PieDetail color="lightblue" percent={70} pie_title="Ionic" pie_description="iOS and Android developer" />
            <PieDetail color="blue" percent={50} pie_title="React-Native" pie_description="iOS and Android developer" />
            <PieDetail color="orange" percent={70} pie_title="PHP" pie_description="Web developer" />
            <PieDetail color="red" percent={50} pie_title="Laravel" pie_description="PHP developer" /> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Skills;
