import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import { VictoryPie } from 'victory-native';

const timer = require('react-native-timer');

class Skills extends PureComponent{
  constructor(props){
    super(props);
    this.state = { percent: 70, data: this.getData(70) };
    // this.startTimer();
  }

  startTimer(){
    timer.setInterval(this, '', () => {
      if(this.state.percent < 100){
        this.setState( { percent: this.state.percent + 0.5, data: this.getData( this.state.percent + 0.5 ) } )
      }
    }, 10);
  }

  componentWillUnmount(){
    timer.clearInterval(this);
  }

  getData(percent){
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
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
            <View style={{flexDirection: 'row'}}>
              <VictoryPie
                width={100}
                height={100}
                data={this.state.data}
                innerRadius={40}
                cornerRadius={2}
                labels={() => null}
                style={{
                  data: {
                    fill: (d) => {
                      const color = d.y > 30 ? "green" : "red";
                      return d.x === 1 ? color : "transparent"
                    }
                  }
                }}
               />
               <View style={{justifyContent: 'center'}}>
                <Text>
                  Ionic
                </Text>
                <Text>
                  iOS and Android developer
                </Text>
               </View>
            </View>
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
