import React, { PureComponent } from 'react';
import { Modal, TouchableHighlight, TouchableOpacity, Animated, View, Text } from 'react-native';

import AnimateNumber from 'react-native-animate-number';
import { defaultAnimationTime, screenWidth } from './../../assets/css/general';

class Bars extends PureComponent{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    };
    this.chartWidth = screenWidth - 15;
    this.percentajeToWidth = ((this.chartWidth * props.percentaje) / 100);
    this.primaryColor = props.primaryColor != '' ? props.primaryColor : '#FCBD24';
    this.dynamicWidth = new Animated.Value(0);
    this.dynamicPercentaje = new Animated.Value(0);
  }

  componentDidMount(){
    this.increaseBarWidth();
  }

  onClickBar = () => {
    console.log("open modal!");
  }

  increaseBarWidth = () => {
    Animated.timing(
      this.dynamicWidth,
      {
        toValue: this.percentajeToWidth,
        delay: this.props.startAt,
        duration: defaultAnimationTime
      }
    ).start();
  }

  yearsToMonths = (time: any) => {
    if(time < 1){
      return Math.floor(time * 12) + ' months';
    }else{
      return time + ' years';
    }
  }

  setModalVisible(visible){
    this.setState({ modalVisible: visible });
  }

  render(){
    return (
      <View style={{width: this.chartWidth, flexDirection: 'column', marginTop: 5}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={
            () => {
              console.log("modal has been close...");
            }
          }
          >
          <View>
            <Text>
              I'm the modal!
            </Text>
            <TouchableHighlight
              onPress={
                () => {
                  this.setModalVisible(!this.state.modalVisible);
                }
              }
              >
              <Text>
                Close modal
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableOpacity onPress={
            () => {
              this.setModalVisible(true);
            }
          }
         style={{width: this.chartWidth, borderRadius: 5}}>
          <Text style={{fontFamily: 'CocoGothic-Bold', marginLeft: 5}}>
            {this.props.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={
          () => {
            this.setModalVisible(true);
          }
        }
        style={{width: this.chartWidth, backgroundColor: 'lightblue', borderRadius: 5}}>
          <View style={{height: 20, width: this.chartWidth, backgroundColor: this.primaryColor, borderRadius: 5, opacity: 0.3}}>
          </View>
          <Animated.View style={{alignItems: 'center', position: 'absolute', height: 20, width: this.dynamicWidth, backgroundColor: this.primaryColor, borderRadius: 5}}>
            <Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
              <AnimateNumber value={this.props.percentaje} countBy={3} timing="linear" />%
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bars;
