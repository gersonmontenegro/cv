import React, { PureComponent } from 'react';
import { Animated, Image, View, Text } from 'react-native';
import { screenWidth, screenHeight } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import SplashScreen from 'react-native-splash-screen';

class Splash2 extends PureComponent{
  constructor(props){
    super(props);
    this.callback = props.callback;
    this.fadeInValue = new Animated.Value(0);
    this.fadeInValueBottomText = new Animated.Value(0);
    this.marginTopAvatar = new Animated.Value((screenHeight / 2)-100);
    this.marginTopTexts = new Animated.Value((screenHeight / 2) - 150);
    this.opacityAnim = this.fadeInValue;
    this.opacityBottomTextAnim = this.fadeInValueBottomText;
    this.avatarWidth = new Animated.Value(200);
    this.avatarHeight = new Animated.Value(200);
    this.topBarHeight = new Animated.Value(0);
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
      this.changeAvatarScale();
      this.getUpAvatar();
      this.getDownTexts();
      this.fadeOutTexts();
    });
  }

  changeAvatarScale = () => {
    Animated.timing(
      this.avatarWidth,
      {
        toValue: 82,
        duration: 1000
      }
    ).start();
    Animated.timing(
      this.avatarHeight,
      {
        toValue: 82,
        duration: 1000
      }
    ).start();
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
        toValue: 50,
        duration: 1200
      }
    ).start(() => {
      this.showUpTopBar();
    });
  }

  showUpTopBar = () => {
    Animated.timing(
      this.topBarHeight,
      {
        toValue: 120,
        duration: 500
      }
    ).start(() => {
      this.openTabMenu();
    });
  }

  openTabMenu(){
    this.callback(false);
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
          alignItems: 'center'
        }}>
          <Animated.View
            style={{
              height: this.topBarHeight,
              width: screenWidth,
              backgroundColor: '#2e70ac',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute'
            }}
          />
          <Animated.Image
            source={require('./../assets/img/grs_pixel_with_circle_200.png')}
            style={{
              marginTop: this.marginTopAvatar,
              marginLeft: (screenWidth / 2)-(this.avatarWidth / 2),
              width: this.avatarWidth,
              height: this.avatarHeight
            }}
          />
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
