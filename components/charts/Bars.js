import React, { PureComponent } from "react";
import {
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  View,
  Text,
  ScrollView
} from "react-native";

// import AnimateNumber from "react-native-animate-number";
import {
  mainBackgroundColor,
  lightMainBackgroundColor,
  screenHeight,
  defaultAnimationTime,
  screenWidth
} from "./../../assets/css/general";

import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryPolarAxis,
  VictoryLabel,
  VictoryArea
} from "victory-native";

import LinearGradient from "react-native-linear-gradient";
import ItemDetail from "./ItemDetail";

characterData = [];

class Bars extends PureComponent {
  constructor(props) {
    super(props);
    let t = parseFloat(this.props.projects.time);
    characterData[0] = { time: 5, projects: 20, feeling: 100 };
    characterData[1] = {
      time: t,
      projects: this.props.projects.quantity,
      feeling: this.props.projects.feeling
    };
    this.state = {
      modalVisible: false,
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData)
    };
    this.chartWidth = screenWidth - 15;
    this.percentajeToWidth = (this.chartWidth * props.percentaje) / 100;
    this.primaryColor =
      props.primaryColor != "" ? props.primaryColor : "#ff00ff";
    this.dynamicWidth = new Animated.Value(0);
    this.dynamicPercentaje = new Animated.Value(0);
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map(d => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map(datum => makeDataArray(datum));
  }

  componentDidMount() {
    this.increaseBarWidth();
  }

  onClickBar = () => {
    console.log("open modal!");
  };

  increaseBarWidth = () => {
    Animated.timing(this.dynamicWidth, {
      toValue: this.percentajeToWidth,
      delay: this.props.startAt,
      duration: defaultAnimationTime
    }).start();
  };

  quantityText = quantity => {
    if (quantity >= 20) {
      return "20+";
    } else {
      return quantity;
    }
  };

  yearsToMonths = time => {
    if (time < 1) {
      return Math.floor(time * 12) + " months";
    } else {
      if (time >= 5) {
        return time + "+ years";
      } else {
        return time + " years";
      }
    }
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  percentajeText = percentaje => {
    return percentaje + "%";
  };

  render() {
    return (
      <View
        style={{
          width: this.chartWidth,
          flexDirection: "column",
          marginTop: 5
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("modal has been close...");
          }}
        >
          <View
            style={{
              width: screenWidth,
              height: screenHeight,
              backgroundColor: lightMainBackgroundColor,
              flex: 1
            }}
          >
            <View
              style={{
                width: screenWidth,
                height: 40,
                backgroundColor: this.props.primaryColor,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  alignSelf: "center",
                  fontFamily: "CocoGothic-Bold",
                  fontSize: 16,
                  color: "white"
                }}
              >
                {this.props.name}
              </Text>
            </View>
            <LinearGradient
              colors={["#ffffff", mainBackgroundColor]}
              style={{
                width: screenWidth,
                marginLeft: 0,
                backgroundColor: "white"
              }}
            >
              <VictoryChart
                polar
                theme={VictoryTheme.material}
                domain={{ y: [0, 1] }}
              >
                <VictoryGroup
                  colorScale={[
                    lightMainBackgroundColor,
                    this.props.primaryColor
                  ]}
                  style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                >
                  {this.state.data.map((data, i) => {
                    return <VictoryArea key={i} data={data} />;
                  })}
                </VictoryGroup>
                {Object.keys(this.state.maxima).map((key, i) => {
                  return (
                    <VictoryPolarAxis
                      key={i}
                      dependentAxis
                      style={{
                        axisLabel: { padding: 10 },
                        axis: { stroke: "none" },
                        grid: {
                          stroke: "grey",
                          strokeWidth: 0.25,
                          opacity: 0.5
                        }
                      }}
                      tickLabelComponent={
                        <VictoryLabel labelPlacement="vertical" />
                      }
                      labelPlacement="perpendicular"
                      axisValue={i + 1}
                      label={key}
                      tickFormat={t => Math.ceil(t * this.state.maxima[key])}
                      tickValues={[0.25, 0.5, 0.75]}
                    />
                  );
                })}
                <VictoryPolarAxis
                  labelPlacement="parallel"
                  tickFormat={() => ""}
                  style={{
                    axis: { stroke: "none" },
                    grid: { stroke: "grey", opacity: 0.5 }
                  }}
                />
              </VictoryChart>
            </LinearGradient>
            <View
              style={{
                marginTop: -20,
                flexDirection: "column"
              }}
            >
              <ScrollView>
                <ItemDetail
                  name="Projects"
                  value={this.quantityText(this.props.projects.quantity)}
                  icon={require("./../../assets/img/icons/projects.png")}
                  arrow={true}
                />
                <ItemDetail
                  name="Time"
                  value={this.yearsToMonths(
                    parseFloat(this.props.projects.time)
                  )}
                  icon={require("./../../assets/img/icons/time.png")}
                  arrow={false}
                />
                <ItemDetail
                  name="Feeling"
                  value={this.percentajeText(this.props.projects.feeling)}
                  icon={require("./../../assets/img/icons/feeling.png")}
                  arrow={false}
                />
              </ScrollView>
            </View>

            <TouchableHighlight
              style={{
                width: 150,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: mainBackgroundColor,
                borderRadius: 10,
                alignSelf: "center",
                marginTop: 5
              }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  fontFamily: "CocoGothic"
                }}
              >
                Close
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={{ width: this.chartWidth, borderRadius: 5 }}
        >
          <Text style={{ fontFamily: "CocoGothic-Bold", marginLeft: 5 }}>
            {this.props.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={{
            width: this.chartWidth,
            backgroundColor: "lightblue",
            borderRadius: 5
          }}
        >
          <View
            style={{
              height: 20,
              width: this.chartWidth,
              backgroundColor: this.primaryColor,
              borderRadius: 5,
              opacity: 0.3
            }}
          />
          <Animated.View
            style={{
              alignItems: "center",
              position: "absolute",
              height: 20,
              width: this.dynamicWidth,
              backgroundColor: this.primaryColor,
              borderRadius: 5
            }}
          >
            <Text
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "CenturyGothic-Bold"
              }}
            >
              {/* <AnimateNumber
                value={this.props.percentaje}
                countBy={3}
                timing="linear"
              /> */}
              {this.props.percentaje}%
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bars;
