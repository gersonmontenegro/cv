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
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView style={{marginTop: 20}}>
            <View style={{width: screenWidth - 10, flexDirection: 'column'}}>
              <View style={{width: screenWidth - 15, borderRadius: 5}}>
                <Text style={{fontFamily: 'CocoGothic-Bold', marginLeft: 5}}>
                  ActionScript
                </Text>
              </View>
              <View style={{width: screenWidth - 15, backgroundColor: 'lightblue', borderRadius: 5}}>
                <View style={{height: 20, width: screenWidth - 15, backgroundColor: '#7E98B0', borderRadius: 5, opacity: 0.3}}>
                </View>
                <View style={{alignItems: 'center', position: 'absolute', height: 20, width: screenWidth - 50, backgroundColor: '#7E98B0', borderRadius: 5}}>
                  <Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
                    90%
                  </Text>
                </View>
              </View>
            </View>

            <View style={{width: screenWidth - 10, flexDirection: 'column', marginTop: 5}}>
              <View style={{width: screenWidth - 15, borderRadius: 5}}>
                <Text style={{fontFamily: 'CocoGothic-Bold', marginLeft: 5}}>
                  Ionic
                </Text>
              </View>
              <View style={{width: screenWidth - 15, backgroundColor: 'lightblue', borderRadius: 5}}>
                <View style={{height: 20, width: screenWidth - 15, backgroundColor: '#FCBD24', borderRadius: 5, opacity: 0.3}}>
                </View>
                <View style={{alignItems: 'center', position: 'absolute', height: 20, width: screenWidth - 90, backgroundColor: '#FCBD24', borderRadius: 5}}>
                  <Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
                    70%
                  </Text>
                </View>
              </View>
            </View>

            <PieDetail color="green" percent={95} pie_title="ActionScript" pie_description="iOS, Android, and Desktop developer" />
            <PieDetail color="lightblue" percent={70} pie_title="Ionic" pie_description="iOS and Android developer" />
            <PieDetail color="blue" percent={50} pie_title="React-Native" pie_description="iOS and Android developer" />
            <PieDetail color="orange" percent={70} pie_title="PHP" pie_description="Web developer" />
            <PieDetail color="red" percent={50} pie_title="Laravel" pie_description="PHP developer" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Skills;
