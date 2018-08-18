import React, { PureComponent } from 'react';
import { Animated, Image, View, Text } from 'react-native';
import { finalAvatarDimension, profileColor, skillsColor, educationColor, experiencieColor, defaultAnimationTime, screenWidth, screenHeight } from './../assets/css/general';
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
    this.barHeight = new Animated.Value(100);
    this.profileMarginTop = new Animated.Value(-(screenHeight / 2));
    this.profileOpacity = new Animated.Value(0);
    this.skillsMarginTop = new Animated.Value(-(screenHeight / 2));
    this.skillsOpacity = new Animated.Value(0);
    this.educationMarginTop = new Animated.Value(-(screenHeight / 2));
    this.educationOpacity = new Animated.Value(0);
    this.experienceMarginTop = new Animated.Value(-(screenHeight / 2));
    this.experienceOpacity = new Animated.Value(0);
    this.dynamicBarHeight = new Animated.Value(500);
  }

  fadeInText(){
    this.fadeInValue.setValue(0);
    Animated.timing(
      this.fadeInValue,
      {
        toValue: 1,
        duration: defaultAnimationTime * 1.5
      }
    ).start(() => {
      this.showUpBars();
      this.fadeInTextBottomText()
    });
  }

  fadeInTextBottomText(){
    this.fadeInValueBottomText.setValue(0);
    Animated.timing(
      this.fadeInValueBottomText,
      {
        toValue: 1,
        duration: defaultAnimationTime
      }
    ).start(() => {
      setTimeout(() => {
        this.changeAvatarScale();
        this.getUpAvatar();
      }, defaultAnimationTime * 2);

      setTimeout(() => {
        this.fadeOutTexts();
        this.getDownTexts();
      }, defaultAnimationTime);

    });
  }

  showUpProfileBars = (marginVar, opacityVar) => {
    Animated.timing(
      marginVar,
      {
        toValue: screenHeight - 5,
        duration: defaultAnimationTime * 2
      }
    ).start();
    Animated.timing(
      opacityVar,
      {
        toValue: 1,
        duration: defaultAnimationTime * 2
      }
    ).start();
  }

  showUpBars = () => {
    setTimeout(() => {
      this.showUpProfileBars(this.profileMarginTop, this.profileOpacity);
    }, 0);
    setTimeout(() => {
      this.showUpProfileBars(this.skillsMarginTop, this.skillsOpacity);
    }, 50);
    setTimeout(() => {
      this.showUpProfileBars(this.educationMarginTop, this.educationOpacity);
    }, 100);
    setTimeout(() => {
      this.showUpProfileBars(this.experienceMarginTop, this.experienceOpacity);
    }, 150);
  }

  changeAvatarScale = () => {
    Animated.timing(
      this.avatarWidth,
      {
        toValue: finalAvatarDimension,
        duration: defaultAnimationTime
      }
    ).start();
    Animated.timing(
      this.avatarHeight,
      {
        toValue: finalAvatarDimension,
        duration: defaultAnimationTime
      }
    ).start();
  }

  fadeOutTexts = () => {
    Animated.timing(
      this.opacityAnim,
      {
        toValue: 0,
        duration: defaultAnimationTime
      }
    ).start();

    Animated.timing(
      this.opacityBottomTextAnim,
      {
        toValue: 0,
        duration: defaultAnimationTime
      }
    ).start();
  }

  getDownTexts = () => {
    Animated.timing(
      this.marginTopTexts,
      {
        toValue: screenHeight,
        duration: defaultAnimationTime * 2
      }
    ).start();
  }

  getUpAvatar = () => {
    Animated.timing(
      this.marginTopAvatar,
      {
        toValue: 30,
        duration: defaultAnimationTime * 1.2
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
        duration: defaultAnimationTime / 2
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
        <View style={{
          position: 'absolute',
          width: screenWidth,
          flexDirection: 'row'
        }}>
          <Animated.View
            style={{
              width: screenWidth / 4,
              height: screenHeight / 2,
              backgroundColor: profileColor,
              marginTop: this.profileMarginTop,
              opacity: this.profileOpacity
            }}
          />
          <Animated.View
            style={{
              width: screenWidth / 4,
              height: screenHeight / 2,
              backgroundColor: skillsColor,
              marginTop: this.skillsMarginTop,
              opacity: this.skillsOpacity
            }}
          />
          <Animated.View
            style={{
              width: screenWidth / 4,
              height: screenHeight / 2,
              backgroundColor: educationColor,
              marginTop: this.educationMarginTop,
              opacity: this.educationOpacity
            }}
          />
          <Animated.View
            style={{
              width: screenWidth / 4,
              height: screenHeight / 2,
              backgroundColor: experiencieColor,
              marginTop: this.experienceMarginTop,
              opacity: this.experienceOpacity
            }}
          />
        </View>
      </View>
    );
  }
}

export default Splash2;
