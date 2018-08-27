import React, { PureComponent } from 'react';
import { Animated, Image, View, Text } from 'react-native';
import { mainBackgroundColor, finalAvatarDimension, profileColor, skillsColor, educationColor, experiencieColor, defaultAnimationTime, screenWidth, screenHeight } from './../assets/css/general';
import { Header, Footer, Content, FooterTab, Button, Icon } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import AnimatedHeader from './../components/interface/AnimatedHeader';

class Splash2 extends PureComponent{
  constructor(props){
    super(props);
    this.callback = props.callback;
    this.fadeInValue = new Animated.Value(0);
    this.fadeInValueBottomText = new Animated.Value(0);
    this.avatarWidth = new Animated.Value(200);
    this.avatarHeight = new Animated.Value(200);
    this.marginTopAvatar = new Animated.Value((screenHeight / 2) - 100);
    this.marginLeftAvatar = new Animated.Value(0);
    this.marginTopTexts = new Animated.Value((screenHeight / 2) - 150);
    this.opacityAnim = this.fadeInValue;
    this.opacityBottomTextAnim = this.fadeInValueBottomText;
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
    this.nameWidth = new Animated.Value(0);
    this.nameOpacity = new Animated.Value(0);
    this.titleWidth = new Animated.Value(0);
    this.titleOpacity = new Animated.Value(0);

    this.profileMarginTop = new Animated.Value(-(screenHeight / 2));
    this.profileOpacity = new Animated.Value(0);
    this.skillsMarginTop = new Animated.Value(-(screenHeight / 2));
    this.skillsOpacity = new Animated.Value(0);
    this.educationMarginTop = new Animated.Value(-(screenHeight / 2));
    this.educationOpacity = new Animated.Value(0);
    this.experienceMarginTop = new Animated.Value(-(screenHeight / 2));
    this.experienceOpacity = new Animated.Value(0);
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
        duration: defaultAnimationTime * 4
      }
    ).start();
    Animated.timing(
      opacityVar,
      {
        toValue: 1,
        duration: defaultAnimationTime * 4
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
        toValue: 25,
        duration: defaultAnimationTime * 1.2
      }
    ).start(() => {
      this.moveAvatarToLeft();
      this.showUpTopBar();
      this.moveTopTexts();
    });
  }

  moveTopTexts = () => {
    setTimeout(() => {
      this.showUpTopTexts(this.nameWidth, (screenWidth - (screenWidth * .3)), this.nameOpacity, 1);
    }, 0);
    setTimeout(() => {
      this.showUpTopTexts(this.titleWidth, (screenWidth - (screenWidth * .5)), this.titleOpacity, 1);
    }, 200);
  }

  showUpTopTexts = (widthVar, widthVal, opacityVar, opacityVal) => {
    Animated.timing(
      widthVar,
      {
        toValue: widthVal,
        duration: defaultAnimationTime
      }
    ).start();
    Animated.timing(
      opacityVar,
      {
        toValue: opacityVal,
        duration: defaultAnimationTime
      }
    ).start();
  }

  moveAvatarToLeft = () => {
    Animated.timing(
      this.marginLeftAvatar,
      {
        toValue: -(screenWidth - 100),
        duration: defaultAnimationTime
      }
    ).start(

    );
  }

  showUpTopBar = () => {
    Animated.timing(
      this.topBarHeight,
      {
        toValue: 120,
        duration: defaultAnimationTime / 2
      }
    ).start();
  }

  componentDidMount(){
    this.fadeInText();
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, width: screenWidth}}>
        <AnimatedHeader refOpenTabMenu={this.callback} />
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
