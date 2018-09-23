import React, { PureComponent } from "react";
import { Animated, View } from "react-native";
import { finalAvatarDimension, profileColor, skillsColor, educationColor, experiencieColor, defaultAnimationTime, screenWidth, screenHeight } from "./../assets/css/general";
import AnimatedHeader from "../components/interface/AnimatedHeader";
import HelperProvider from "../providers/HelperProvider";

class Splash extends PureComponent {
    constructor(props) {
        super(props);
        this.createSingletonGroup();
        this.creatingAnimatedValues();
        this.creatingSimpleValues();
    }

    creatingAnimatedValues() {
        this.fadeInValue = new Animated.Value(0);
        this.fadeInValueBottomText = new Animated.Value(0);
        this.avatarWidth = new Animated.Value(200);
        this.avatarHeight = new Animated.Value(200);
        this.marginTopAvatar = new Animated.Value(screenHeight / 2 - 100);
        this.marginLeftAvatar = new Animated.Value(0);
        this.marginTopTexts = new Animated.Value(screenHeight / 2 - 150);
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

    creatingSimpleValues() {
        this.callback = this.props.callback;
        this.opacityAnim = this.fadeInValue;
        this.opacityBottomTextAnim = this.fadeInValueBottomText;
    }

    createSingletonGroup() {
        this.helper = HelperProvider.getInstance();
    }

    fadeInText() {
        this.fadeInValue.setValue(0);
        this.helper.animateVariable(this.fadeInValue, 1, defaultAnimationTime * 1.5).start(() => {
            this.showUpBars();
            this.fadeInTextBottomText();
        });
    }

    fadeInTextBottomText() {
        this.fadeInValueBottomText.setValue(0);
        this.helper.animateVariable(this.fadeInValueBottomText, 1, defaultAnimationTime).start(() => {
            setTimeout(() => {
                this.changeAvatarScale();
                this.getUpAvatar();
            }, defaultAnimationTime * 2);

            setTimeout(() => {
                this.fadeOutTexts();
                this.getDownTexts();
            }, defaultAnimationTime);
        }
        );
    }

    showUpProfileBars = (marginVar, opacityVar, delay) => {
        this.helper.animateVariable(marginVar, screenHeight - 5, defaultAnimationTime * 4, delay).start();
        this.helper.animateVariable(opacityVar, 1, defaultAnimationTime * 4, delay).start();
    };

    showUpBars = () => {
        this.showUpProfileBars(this.profileMarginTop, this.profileOpacity, 0);
        this.showUpProfileBars(this.skillsMarginTop, this.skillsOpacity, 50);
        this.showUpProfileBars(this.educationMarginTop, this.educationOpacity, 100);
        this.showUpProfileBars(this.experienceMarginTop, this.experienceOpacity, 150);
    };

    changeAvatarScale = () => {
        this.helper.animateVariable(this.avatarWidth, finalAvatarDimension, defaultAnimationTime).start();
        this.helper.animateVariable(this.avatarHeight, finalAvatarDimension, defaultAnimationTime).start();
    };

    fadeOutTexts = () => {
        this.helper.animateVariable(this.opacityAnim, 0, defaultAnimationTime).start();
        this.helper.animateVariable(this.opacityBottomTextAnim, 0, defaultAnimationTime).start();
    };

    getDownTexts = () => {
        this.helper.animateVariable(this.marginTopTexts, screenHeight, defaultAnimationTime * 2).start();
    };

    getUpAvatar = () => {
        this.helper.animateVariable(this.marginTopAvatar, 25, defaultAnimationTime * 1.2).start(() => {
            this.moveAvatarToLeft();
            this.showUpTopBar();
            this.moveTopTexts();
        });
    };

    moveTopTexts = () => {
        setTimeout(() => {
            this.showUpTopTexts(
                this.nameWidth,
                screenWidth - screenWidth * 0.3,
                this.nameOpacity,
                1
            );
        }, 0);
        setTimeout(() => {
            this.showUpTopTexts(
                this.titleWidth,
                screenWidth - screenWidth * 0.5,
                this.titleOpacity,
                1
            );
        }, 200);
    };

    showUpTopTexts = (widthVar, widthVal, opacityVar, opacityVal) => {
        this.helper.animateVariable(widthVar, widthVal, defaultAnimationTime).start();
        this.helper.animateVariable(opacityVar, opacityVal, defaultAnimationTime).start();
    };

    moveAvatarToLeft = () => {
        this.helper.animateVariable(this.marginLeftAvatar, -(screenWidth - 100), defaultAnimationTime).start();
    };

    showUpTopBar = () => {
        this.helper.animateVariable(this.topBarHeight, 120, defaultAnimationTime).start();
    };

    componentDidMount() {
        this.fadeInText();
    }

    render() {
        return (
            <View
                style={{ justifyContent: "flex-start", flex: 1, width: screenWidth }}
            >
                <AnimatedHeader refOpenTabMenu={this.callback} />
                <View
                    style={{
                        position: "absolute",
                        width: screenWidth,
                        flexDirection: "row"
                    }}
                >
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

export default Splash;
