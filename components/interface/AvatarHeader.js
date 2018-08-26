import React, { PureComponent } from 'react';
import { Animated, View, Text, Image } from 'react-native';

import { defaultAnimationTime, mainBackgroundColor, finalAvatarDimension, HeaderStyle, screenWidth, screenHeight } from './../../assets/css/general';

class AvatarHeader extends PureComponent{
  constructor(props){
    super(props);
    this.marginLeftHeader = new Animated.Value((screenWidth / 2) - 40);
    this.headerOpacity = new Animated.Value(0);
    this.nameOpacity = new Animated.Value(0);
    this.refOpenTabMenu = null;
    this.nameWidth = new Animated.Value((screenWidth - (screenWidth * .5)));
    this.nameMarginLeft = new Animated.Value(0);
  }

  startAnimation(value: number, showTabMenu: any){
    this.refOpenTabMenu = showTabMenu;
    const animations = [];
    animations.push(this.changeAnimatedVariable(this.marginLeftHeader, value, defaultAnimationTime * 5));
    animations.push(this.changeAnimatedVariable(this.headerOpacity, 1, 0));
    // animations.push(this.changeNameOpacity());
    Animated.parallel(animations).start(
      () => {
        // this.refOpenTabMenu(false);
        this.showName();
      }
    );
  }

  showName(){
    var textsAnimations = [];
    textsAnimations.push(this.changeAnimatedVariable(this.nameOpacity, 1, defaultAnimationTime * 5));
    textsAnimations.push(this.changeAnimatedVariable(this.nameMarginLeft, 0, defaultAnimationTime * 5));
    Animated.parallel(textsAnimations).start();
  }

  changeAnimatedVariable(variable, value, time){
    return Animated.timing(
      variable,
      {
        toValue: value,
        duration: time
      }
    );
  }

  render(){
    return (
      <Animated.View style={{
        marginLeft: this.marginLeftHeader,
        marginTop: 20,
        width: screenWidth,
        flexDirection: 'row',
        opacity: this.headerOpacity
      }}>
        <Image
          source={require('./../../assets/img/grs_pixel_with_circle_200.png')}
          style={{
            marginTop: 7,
            width: 80,
            height: 80,
          }}
        />
        <View style={HeaderStyle.textsContainer}>
          <Animated.View style={{
            height: 25,
            width: this.nameWidth,
            backgroundColor: 'white',
            marginTop: 17,
            borderRadius: 10,
            justifyContent: 'center',
            opacity: this.nameOpacity,
            marginLeft: this.nameMarginLeft
          }}>
            <Text style={HeaderStyle.nameTextStyle}>
              Gerson Montenegro
            </Text>
          </Animated.View>

          <Animated.View style={HeaderStyle.titleStyle}>
            <Text style={HeaderStyle.titleTextStyle}>
              Mobile developer
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

export default AvatarHeader;
