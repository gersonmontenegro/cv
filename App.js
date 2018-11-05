import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Splash from './screens/Splash';
import TabScreen from './screens/TabScreen';
import { MainAppStyle } from './assets/css/general';

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
      <View style={MainAppStyle.container}>
        {this.renderInterface()}
      </View>
    );
    // return (
    //   <View style={MainAppStyle.container}>
    //     <RootStack />
    //   </View>
    // );
  }
}
