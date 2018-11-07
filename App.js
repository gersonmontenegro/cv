import React from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Splash2 from './screens/Splash2';

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Skills extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Skills</Text>
      </View>
    );
  }
}

const TabNavigation = createBottomTabNavigator(
  {
    Profile: Profile,
    Skills: Skills
  }
);

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash2
    },
    Tabs: {
      screen: TabNavigation
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
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

// import React, { PureComponent } from 'react';
// import { View, Text } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import Splash from './screens/Splash';
// import TabScreen from './screens/TabScreen';
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { MainAppStyle } from './assets/css/general';

// class Screen1 extends PureComponent {
//   componentDidMount() {
//     console.log("s1 mounted");
//   }

//   render() {
//     console.log("s1");
//     return (
//       <View style={{ backgroundColor: '#ff00ff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Screen 1!</Text>
//       </View>
//     );
//   }
// }

// class Screen2 extends PureComponent {
//   render() {
//     console.log("s2");
//     return (
//       <View>
//         <Text>
//           Screen 2!!
//         </Text>
//       </View>
//     );
//   }
// }

// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { splash: true };
//   }

//   componentDidMount() {
//     SplashScreen.hide();
//   }

//   showUpMessage = (v) => {
//     this.setState({ splash: v })
//   }

//   renderInterface = () => {
//     // return <createBottomTabNavigator />;
//     // if (this.state.splash) {
//     //   return <Splash callback={this.showUpMessage} />;
//     // } else {
//     //   return <createBottomTabNavigator />;
//     //   // return <TabScreen />;
//     // }
//   }

//   render() {
//     // return (
//     // <View style={MainAppStyle.container}>
//     //   {this.renderInterface()}
//     // </View>
//     // );
//     // return (
//     //   <View style={MainAppStyle.container}>
//     //     <createBottomTabNavigator />
//     //   </View>
//     // );
//     const MainNavigator = createBottomTabNavigator({
//       S1: { screen: Screen1 },
//       S2: { screen: Screen2 },
//     });
//     const RootStack = createStackNavigator({
//       Home: {
//         screen: MainNavigator
//       }
//     });
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <RootStack />
//       </View>
//     );
//   }
// }
