import React, { PureComponent } from 'react';
import { Modal, TouchableHighlight, TouchableOpacity, Animated, View, Text } from 'react-native';

import { Button } from 'native-base';

import AnimateNumber from 'react-native-animate-number';
import { mainBackgroundColor, lightMainBackgroundColor, screenHeight, defaultAnimationTime, screenWidth } from './../../assets/css/general';

import { VictoryChart, VictoryTheme, VictoryGroup, VictoryPolarAxis, VictoryLabel, VictoryArea } from "victory-native";

const characterData = [
  { time: 5, projects: 20, feeling: 100 },
  { time: 1, projects: 5, feeling: 50 },
];

class Bars extends PureComponent{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData)
    };
    this.chartWidth = screenWidth - 15;
    this.percentajeToWidth = ((this.chartWidth * props.percentaje) / 100);
    this.primaryColor = props.primaryColor != '' ? props.primaryColor : '#ff00ff';
    this.dynamicWidth = new Animated.Value(0);
    this.dynamicPercentaje = new Animated.Value(0);

  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
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
          <View style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: lightMainBackgroundColor,
            flex: 1,
          }}>
            <View style={{
              width: screenWidth,
              height: 40,
              backgroundColor: this.props.primaryColor,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                alignItems: 'center',
                alignSelf: 'center',
                fontFamily: 'CocoGothic-Bold',
                fontSize: 16,
                color: 'white'
              }}>
                {this.props.name}
              </Text>
            </View>
            <View style={{
              width: screenWidth,
              marginLeft: 15
            }}>

            <VictoryChart polar
              theme={VictoryTheme.material}
              domain={{ y: [ 0, 1 ] }}
            >
              <VictoryGroup colorScale={[lightMainBackgroundColor, this.props.primaryColor]}
                style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
              >
                {this.state.data.map((data, i) => {
                  return <VictoryArea key={i} data={data}/>;
                })}
              </VictoryGroup>
            {
              Object.keys(this.state.maxima).map((key, i) => {
                return (
                  <VictoryPolarAxis key={i} dependentAxis
                    style={{
                      axisLabel: { padding: 10 },
                      axis: { stroke: "none" },
                      grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
                    }}
                    tickLabelComponent={
                      <VictoryLabel labelPlacement="vertical"/>
                    }
                    labelPlacement="perpendicular"
                    axisValue={i + 1} label={key}
                    tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                    tickValues={[0.25, 0.5, 0.75]}
                  />
                );
              })
            }
              <VictoryPolarAxis
                labelPlacement="parallel"
                tickFormat={() => ""}
                style={{
                  axis: { stroke: "none" },
                  grid: { stroke: "grey", opacity: 0.5 }
                }}
              />

            </VictoryChart>

            </View>
            <View style={{ marginLeft: 10, marginRight: 10}}>
              <View style={{width: '100%', backgroundColor: '#cccccc', borderRadius: 10}}>
                <Text style={{ fontFamily: 'CenturyGothic', fontSize: 12, alignSelf: 'center', color: '#000000'}}>
                  Skills resume
                </Text>
              </View>
              <View style={{backgroundColor: '#f5f5f5', borderRadius: 10, flexDirection: 'row'}}>
                <View style={{width: (screenWidth / 3)}}>
                  <Text style={{ fontFamily: 'CenturyGothic', fontSize: 12}}>
                    PROJECTS
                  </Text>
                </View>
                <View>
                  <Text style={{fontFamily: 'CenturyGothic-Bold', fontSize: 12, color: '#000000'}}>
                    {this.props.projects.quantity}
                  </Text>
                </View>
              </View>

              <View style={{backgroundColor: '#f5f5f5', borderRadius: 10, flexDirection: 'row'}}>
                <View style={{width: (screenWidth / 3)}}>
                  <Text style={{ fontFamily: 'CenturyGothic', fontSize: 12}}>
                    Time
                  </Text>
                </View>
                <View>
                  <Text style={{fontFamily: 'CenturyGothic-Bold', fontSize: 12, color: '#000000'}}>
                    {this.yearsToMonths(this.props.projects.time)}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableHighlight
              style={{
                marginLeft: 10,
                width: 150,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainBackgroundColor,
                borderRadius: 10,
              }}
              onPress={
                () => {
                  this.setModalVisible(!this.state.modalVisible);
                }
              }
              >
              <Text style={{
                color: 'white',
                alignSelf: 'center',
                fontFamily: 'CocoGothic'
              }}>
                Close
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
