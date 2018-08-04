import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';

const timer = require('react-native-timer');
const factor = 1.5;

class PieDetail extends PureComponent{
  constructor(props){
    super(props);
    this.state = { percent: 0, data: this.getData(props.percent) };
    this.startTimer();
  }

  startTimer(){
    timer.setInterval(this, '', () => {
      if(this.state.percent < this.props.percent){
        this.setState( { percent: this.state.percent + factor, data: this.getData( this.state.percent + factor ) } )
      }
    }, 1);
  }

  componentWillUnmount(){
    timer.clearInterval(this);
  }

  getData(percent){
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render(){
    return (
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
            { this.props.pie_title }
          </Text>
          <Text>
            { this.props.pie_description }
          </Text>
         </View>
      </View>
    );
  }
}

export default PieDetail;
