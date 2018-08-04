import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import TimeLine from 'react-native-timeline-listview';

class Education extends PureComponent{
  constructor(props){
    super(props);
    this.data = [
      { time: '2017', title: 'Software engineering specialist', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
      { time: '2017', title: 'Requirement engineering', description: 'Complete course about requirements' },
      { time: '2006', title: 'Systems engineering', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    ];
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
            <TimeLine data={this.data} />
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

export default Education;
