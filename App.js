import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Splash from './screens/Splash';
import Profile from './screens/Profile';
import Skills from './screens/Skills';
import Education from './screens/Education';
import TabScreen from './screens/TabScreen';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TabScreen />
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
