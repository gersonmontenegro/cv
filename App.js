import React from 'react';
import { Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Splash2 from './screens/Splash2';
import Profile from './screens/Profile';
import Skills from './screens/Skills';
import Experience from './screens/Experience';
import Education from './screens/Education';

const TabNavigation = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name="ios-contact" style={{ color: "gray" }} />
        )
      })
    },
    Skills: {
      screen: Skills,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name="ios-cog" style={{ color: "gray" }} />
        )
      })
    },
    Experience: {
      screen: Experience,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name="ios-book" style={{ color: "gray" }} />
        )
      })
    },
    Education: {
      screen: Education,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Icon name="ios-construct" style={{ color: "gray" }} />
        )
      })
    }
  },
  {
    initialRouteName: 'Skills',
    navigationOptions: {
      tabBarOptions: {
        showIcon: true
      },
    }
  }
);

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash2,
    },
    Tabs: {
      screen: TabNavigation,
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      }
    })
  }
);

export default class App extends React.PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <RootStack />
    );
  }
}
