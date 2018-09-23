import React, { PureComponent } from "react";
import { ScrollView, Image, View, Text } from "react-native";
import Bars from "./../components/charts/Bars";

class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.createSingletonGroup();
    this.settingState();
    this.loadData();
                }
  createSingletonGroup() {
    this.fetchData = FetchData.getInstance();
            }
  loadData() {
    this.fetchData.getData(URL_DATA).then((data) => {
      this.setState({ data: data });
    });
        }

  createBars = () => {
    let intervalValue = 90;
    return this.state.data.map((item, index) => {
      return (
        <Bars
          key={index}
          name={item.name}
          startAt={index * intervalValue}
          percentaje={item.percentaje}
          primaryColor={item.primaryColor}
          projects={item.projects}
        />
      );
    });
  };

  settingState() {
    this.state = { data: [] };
  }

  render() {
    return (
      <View style={{ justifyContent: "flex-start", flex: 1 }}>
        <View style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
          <ScrollView style={{ marginTop: 20 }}>{this.createBars()}</ScrollView>
        </View>
      </View>
    );
  }
}

export default Skills;
