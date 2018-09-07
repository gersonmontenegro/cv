import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash2 from './screens/Splash2';
import TabScreen from './screens/TabScreen';
import SplashScreen from 'react-native-splash-screen';


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { splash: true };
    SplashScreen.hide();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  showUpMessage = (v: boolean) => {
    this.setState({ splash: v })
  }

  renderInterface = () => {
    if (this.state.splash) {
      return <Splash2 callback={this.showUpMessage} />;
    } else {
      return <TabScreen />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInterface()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
