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
    this.data = [
      {name: 'Ionic', percentaje: 70, primaryColor: '#2f9cfc'},
      {name: 'Typescript', percentaje: 60, primaryColor: '#1176be'},
      {name: 'Firebase - Ionic', percentaje: 20, primaryColor: '#f38226'},
      {name: 'PHP', percentaje: 75, primaryColor: '#627dbc'},
      {name: 'Laravel', percentaje: 50, primaryColor: '#f0514b'},
      {name: 'React Native', percentaje: 30, primaryColor: '#1ca6cd'},
      {name: 'Javascript', percentaje: 80, primaryColor: '#d4b840'},
      {name: 'ActionScript', percentaje: 90, primaryColor: '#db4e4e'},
      {name: 'Adobe Flash Builder', percentaje: 75, primaryColor: '#cdbec3'},
      {name: 'Adobe Flash', percentaje: 80, primaryColor: '#cd1018'},
    ];
  }

  createBars = () => {
    let intervalValue = 90;
    return this.data.map(
      (item, index) => {
        return (
          <Bars key={index} name={item.name} startAt={index * intervalValue} percentaje={item.percentaje} primaryColor={item.primaryColor} />
        );
      }
    );
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
