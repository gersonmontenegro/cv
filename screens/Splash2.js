import React, { PureComponent } from 'react';
import { Animated, Image, View, Text } from 'react-native';
import { screenWidth, screenHeight } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import SplashScreen from 'react-native-splash-screen';

class Splash2 extends PureComponent{
  constructor(props){
    super(props);
    this.fadeInValue = new Animated.Value(0);
    this.fadeInValueBottomText = new Animated.Value(0);
    this.marginTopAvatar = new Animated.Value((screenHeight / 2)-100);
    this.marginTopTexts = new Animated.Value((screenHeight / 2) - 150);
    this.opacityAnim = this.fadeInValue;
    this.opacityBottomTextAnim = this.fadeInValueBottomText;
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
    ).start(() => {
      this.getUpAvatar();
      this.getDownTexts();
      this.fadeOutTexts();
    });
  }

  fadeOutTexts = () => {
    Animated.timing(
      this.opacityAnim,
      {
        toValue: 0,
        duration: 1000
      }
    ).start();

    Animated.timing(
      this.opacityBottomTextAnim,
      {
        toValue: 0,
        duration: 1000
      }
    ).start();
  }

  getDownTexts = () => {
    Animated.timing(
      this.marginTopTexts,
      {
        toValue: screenHeight,
        duration: 2000
      }
    ).start();
  }

  getUpAvatar = () => {
    Animated.timing(
      this.marginTopAvatar,
      {
        toValue: 22,
        duration: 2000
      }
    ).start();
  }

  componentDidMount(){
    this.fadeInText();
  }

  render(){
    // let opacityAnim = this.fadeInValue;
    // let opacityBottomTextAnim = this.fadeInValueBottomText;
    return (
      <View style={{marginTop: 0}}>
        <View style={{
          width: screenWidth,
          height: screenHeight,
        }}>
          <Animated.View
            style={{
              marginTop: this.marginTopAvatar,
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
          flexDirection: 'column'
        }}>
          <Animated.View
            style={{
              opacity: this.opacityAnim,
              marginTop: this.marginTopTexts
            }}
          >
            <Text style={{fontFamily: 'CocoGothic-Bold', fontSize: 25}}>
              Gerson Montenegro
            </Text>
          </Animated.View>

          <Animated.View
          style={{
            opacity: this.opacityBottomTextAnim
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
