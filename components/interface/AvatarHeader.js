import React, { PureComponent } from "react";
import { Animated, View, Text, Image } from "react-native";
import { defaultAnimationTime, mainBackgroundColor, HeaderStyle, screenWidth } from "./../../assets/css/general";

class AvatarHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.refNavigation = null;
    this.nameWidth = new Animated.Value(screenWidth - screenWidth * 0.3);

    if (this.props.static === true) {
      this.initStaticVersion();
    } else {
      this.initAnimatedVersion();
    }
  }

  initStaticVersion() {
    this.headerOpacity = new Animated.Value(1);
    this.nameOpacity = new Animated.Value(1);
    this.titleOpacity = new Animated.Value(1);
    this.HeaderHeight = new Animated.Value(100);

    this.marginLeftHeader = new Animated.Value(0);
    this.nameMarginLeft = new Animated.Value(0);
    this.titleMarginLeft = new Animated.Value(0);
  }

  initAnimatedVersion() {
    this.headerOpacity = new Animated.Value(0);
    this.nameOpacity = new Animated.Value(0);
    this.titleOpacity = new Animated.Value(0);
    this.HeaderHeight = new Animated.Value(0);
    this.marginLeftHeader = new Animated.Value(screenWidth / 2 - 40 - 5);
    this.nameMarginLeft = new Animated.Value(200);
    this.titleMarginLeft = new Animated.Value(290);
  }

  startAnimation(value, refNavigation) {
    this.refNavigation = refNavigation;
    const animations = [];
    animations.push(
      this.changeAnimatedVariable(
        this.marginLeftHeader,
        value,
        defaultAnimationTime * 2.5
      )
    );
    animations.push(this.changeAnimatedVariable(this.headerOpacity, 1, 0));
    // animations.push(this.changeNameOpacity());
    Animated.parallel(animations).start(() => {
      this.showName();
    });
  }

  showName() {
    var textsAnimations = [];
    textsAnimations.push(
      this.changeAnimatedVariable(
        this.nameOpacity,
        1,
        defaultAnimationTime * 2.5
      )
    );
    textsAnimations.push(
      this.changeAnimatedVariable(
        this.nameMarginLeft,
        0,
        defaultAnimationTime * 2.5
      )
    );
    Animated.parallel(textsAnimations).start(() => {
      this.showTitle();
    });
  }

  showTitle() {
    var textsAnimations = [];
    textsAnimations.push(
      this.changeAnimatedVariable(
        this.titleOpacity,
        1,
        defaultAnimationTime * 2.5
      )
    );
    textsAnimations.push(
      this.changeAnimatedVariable(
        this.titleMarginLeft,
        0,
        defaultAnimationTime * 2.5
      )
    );
    Animated.parallel(textsAnimations).start(() => {
      this.backWallEmerge();
    });
  }

  backWallEmerge() {
    this.changeAnimatedVariable(
      this.HeaderHeight,
      100,
      defaultAnimationTime * 2
    ).start(() => {
      this.refNavigation.navigate("Tabs");
    });
  }

  changeAnimatedVariable(variable, value, time) {
    return Animated.timing(variable, {
      toValue: value,
      duration: time
    });
  }

  render() {
    return (
      <Animated.View
        style={{
          marginLeft: this.marginLeftHeader,
          width: screenWidth,
          height: 100,
          flexDirection: "row",
          opacity: this.headerOpacity
        }}
      >
        <Animated.View
          style={{
            width: screenWidth,
            height: this.HeaderHeight,
            backgroundColor: mainBackgroundColor,
            position: "absolute"
          }}
        />

        <Image
          source={require("./../../assets/img/grs_pixel_with_circle_200.png")}
          style={{
            marginTop: 7,
            marginLeft: 5,
            width: 80,
            height: 80
          }}
        />
        <View style={HeaderStyle.textsContainer}>
          <Animated.View
            style={{
              height: 25,
              width: this.nameWidth,
              backgroundColor: "white",
              marginTop: 17,
              borderRadius: 10,
              justifyContent: "center",
              opacity: this.nameOpacity,
              marginLeft: this.nameMarginLeft
            }}
          >
            <Text style={HeaderStyle.nameTextStyle}>Gerson Montenegro</Text>
          </Animated.View>

          <Animated.View
            style={[
              HeaderStyle.titleStyle,
              {
                marginLeft: this.titleMarginLeft,
                opacity: this.titleOpacity
              }
            ]}
          >
            <Text style={HeaderStyle.titleTextStyle}>Mobile developer</Text>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

export default AvatarHeader;
