import React, { PureComponent } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Splash from './screens/Splash';
import TabScreen from './screens/TabScreen';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { splash: true };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  showUpMessage = (v) => {
    this.setState({ splash: v })
  }

  renderInterface = () => {
    if (this.state.splash) {
      return <Splash callback={this.showUpMessage} />;
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
    backgroundColor: '#FFFFFF',
  },
});
