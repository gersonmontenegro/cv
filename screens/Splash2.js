import React, { PureComponent } from 'react';
import { Animated, Image, View, Text } from 'react-native';
import { screenWidth, screenHeight } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import SplashScreen from 'react-native-splash-screen';

class Splash2 extends PureComponent{
  constructor(props){
    super(props);
    // this.state = {
    //   fadeIn: new Animated.Value(0),
    //   fadeOut: new Animated.Value(1),
    //   yPos: 100
    // }
    this.spinValue = new Animated.Value(0);
    this.fadeInValue = new Animated.Value(0);
    this.fadeInValueBottomText = new Animated.Value(0);
  }

  spin(){
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000
      }
    ).start();
  }

  fadeInText(){
    this.fadeInValue.setValue(0);
    Animated.timing(
      this.fadeInValue,
      {
        toValue: 1,
        duration: 2000
      }
    ).start(() => this.fadeInTextBottomText());
  }

  fadeInTextBottomText(){
    this.fadeInValueBottomText.setValue(0);
    Animated.timing(
      this.fadeInValueBottomText,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();
  }

  componentDidMount(){
    //this.spin();
    this.fadeInText();

    // this.state.fadeIn.setValue(0);
    // Animated.timing(
    //   this.state.yPos,
    //   {
    //     toValue: 600,
    //     duration: 6000
    //   }
    // ).start(() => this.fadeOut());
  }

  // fadeOut() {
  //   this.state.fadeIn.setValue(1);
  //   Animated.timing(
  //      this.state.fadeIn,
  //      {
  //        toValue: 0,
  //        duration: 3000,
  //      }
  //   ).start();
  // }

  render(){
    //<Image source={require('./../assets/img/face.png')} style={{width: 150, resizeMode: 'contain', marginTop: 50}} />
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    let opacityAnim = this.fadeInValue;
    let opacityBottomTextAnim = this.fadeInValueBottomText;
    return (
      <View style={{marginTop: 0}}>
        <View style={{
          width: screenWidth,
          height: screenHeight,
        }}>
          <Animated.View
            style={{
              transform: [{rotate: spin}],
              marginTop: (screenHeight / 2)-100,
              marginLeft: (screenWidth / 2)-100,
            }}
          >
            <Image source={require('./../assets/img/grs_pixel_with_circle_200.png')} style={{width: 200, height: 200}} />
          </Animated.View>
        </View>
        <View style={{
          width: screenWidth,
          position: 'absolute',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: (screenWidth / 2)
        }}>
          <Animated.View
            style={{
              opacity: opacityAnim
            }}
          >
            <Text style={{fontFamily: 'CocoGothic-Bold', fontSize: 25}}>
              Gerson Montenegro
            </Text>
          </Animated.View>

          <Animated.View
          style={{
            opacity: opacityBottomTextAnim
          }}
          >
            <Text style={{marginTop: 230, fontFamily: 'CocoGothic', fontSize: 20}}>
              Mobile developer
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Splash2;
