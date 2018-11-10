import React, { PureComponent } from "react";
import { ScrollView, View, Text } from "react-native";
import Bars from "./../components/charts/Bars";
import { Spinner } from 'native-base';
import FetchData from "../providers/FetchData";
import { URL_DATA } from "../providers/DataSource";

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
      return <ScrollView style={{ marginTop: 20 }}>{this.createBars()}</ScrollView>;
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color='green' />
          <Text>Loading data...</Text>
        </View>
      )
        ;
    }
  }

  render() {
    return (
      <View style={{ justifyContent: "flex-start", flex: 1 }}>
        <View style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
          {this.showInterface()}
        </View>
      </View>
    );
  }
}

export default Skills;
