import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { screenWidth } from './../../assets/css/general';

class Bars extends PureComponent{

  constructor(props){
    super(props);
    this.chartWidth = screenWidth - 15;
    this.percentajeToWidth = ((this.chartWidth * props.percentaje) / 100);
    this.primaryColor = props.primaryColor != '' ? props.primaryColor : '#FCBD24';
  }

  render(){
    return (
      <View style={{width: this.chartWidth, flexDirection: 'column', marginTop: 5}}>
        <View style={{width: this.chartWidth, borderRadius: 5}}>
          <Text style={{fontFamily: 'CocoGothic-Bold', marginLeft: 5}}>
            {this.props.name}
          </Text>
        </View>
        <View style={{width: this.chartWidth, backgroundColor: 'lightblue', borderRadius: 5}}>
          <View style={{height: 20, width: this.chartWidth, backgroundColor: this.primaryColor, borderRadius: 5, opacity: 0.3}}>
          </View>
          <View style={{alignItems: 'center', position: 'absolute', height: 20, width: this.percentajeToWidth, backgroundColor: this.primaryColor, borderRadius: 5}}>
            <Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
              {this.props.percentaje}%
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Bars;
