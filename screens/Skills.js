import React, { PureComponent } from "react";
import { ScrollView, View, Text } from "react-native";
import Bars from "./../components/charts/Bars";
import { Spinner } from 'native-base';
import FetchData from "../providers/FetchData";
import { URL_DATA } from "../providers/DataSource";
import { screenHeight } from "../assets/css/general";

class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.createSingletonGroup();
    this.settingState();
  }

  componentDidMount() {
    this.loadData();
  }

  createSingletonGroup() {
    this.fetchData = FetchData.getInstance();
  }

  loadData() {
    if (this.fetchData.skills_data == null) {
      this.fetchData.getData(URL_DATA).then((data) => {
        this.fetchData.skills_data = data;
        this.setState({ data: data });
      });
    } else {
      this.setState({ data: this.fetchData.skills_data });
    }
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

  showInterface() {
    if (this.state.data.length > 0) {
      return (
        <View style={{ justifyContent: "flex-start", marginTop: 20, marginLeft: 5, marginRight: 5 }}>
          <ScrollView >
            {this.createBars()}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: screenHeight - 70 }}>
          <Spinner color='green' />
          <Text>Loading data...</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View >
          {this.showInterface()}
        </View>
      </View>
    );
  }
}

export default Skills;
