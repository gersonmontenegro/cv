import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Header, Footer, Content, FooterTab, Button, Icon } from 'native-base';
import { Animated, ScrollView, Image, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Circle from './../components/primitives/Circle';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import { finalAvatarDimension, defaultAnimationTime, profileColor, skillsColor, educationColor, experiencieColor, mainBackgroundColor, screenWidth, screenHeight } from './../assets/css/general.js';

const footerFontSize = 12;
const footerHeight = 70;

class TabScreen extends Component{
  constructor(props){
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
    this.state = { currentInterface: 1 };
    this.profileMarginTop = new Animated.Value(50);
    this.profileOpacity = new Animated.Value(0);
    this.skillsOpacity = new Animated.Value(0);
    this.educationOpacity = new Animated.Value(0);
    this.experienceOpacity = new Animated.Value(0);
    this.skillsMarginTop = new Animated.Value(25);
    this.educationMarginTop = new Animated.Value(25);
    this.experienceMarginTop = new Animated.Value(25);
    this.titleOpacity = new Animated.Value(1);
    this.nameOpacity = new Animated.Value(1);
    this.nameWidth = new Animated.Value((screenWidth - (screenWidth * .3)));
    this.titleWidth = new Animated.Value((screenWidth - (screenWidth * .5)));
    this.marginTopAvatar = new Animated.Value(0);
    this.marginLeftAvatar = new Animated.Value(0);
    this.avatarWidth = new Animated.Value(80);
    this.avatarHeight = new Animated.Value(100);
  }

  componentDidMount(){
    this.startButtonsShowUp();
  }

  startButtonsShowUp = () => {
    setTimeout(() => {
      this.animatingValue(this.profileMarginTop, 0);
    }, 0);

    setTimeout(() => {
      this.animatingValue(this.skillsOpacity, 1, defaultAnimationTime);
    }, defaultAnimationTime / 3);

    setTimeout(() => {
      this.animatingValue(this.skillsMarginTop, 0, defaultAnimationTime);
    }, defaultAnimationTime / 3);

    setTimeout(() => {
      this.animatingValue(this.educationOpacity, 1, defaultAnimationTime);
    }, defaultAnimationTime / 2);

    setTimeout(() => {
      this.animatingValue(this.educationMarginTop, 0, defaultAnimationTime);
    }, defaultAnimationTime / 2);

    setTimeout(() => {
      this.animatingValue(this.experienceOpacity, 1, defaultAnimationTime);
    }, defaultAnimationTime);

    setTimeout(() => {
      this.animatingValue(this.experienceMarginTop, 0, defaultAnimationTime);
    }, defaultAnimationTime);
  }

  animatingValue = (value: any, finalValue: number, durationValue: number) => {
    Animated.timing(
      value,
      {
        toValue: finalValue,
        duration: durationValue
      }
    ).start();
  }

  renderComponent = () =>{
    switch(this.state.currentInterface){
      case 1: {
        return <Profile />
        break;
      }
      case 2: {
        return <Skills />
        break;
      }
      case 3: {
        return <Education />
        break;
      }
      case 4: {
        return <Experience />
        break;
      }
      default:{
        console.log("wot!");
      }
    }
  }

  changeInterface = (i: Number) => {
    this.setState({ currentInterface: i });
  }

  isButtonActive = (b: Number) => {
    if(b == this.state.currentInterface){
      return true;
    }else{
      return false;
    }
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, width: screenWidth}}>
        <Header style={{backgroundColor: mainBackgroundColor, height: 120}}>
          <View style={{
            width: screenWidth * 1.5,
            height: 103,
            backgroundColor: mainBackgroundColor
          }}>
          <Image
            source={require('./../assets/img/grs_pixel_with_circle_200.png')}
            style={{
              marginTop: 7,
              marginLeft: 92,
              width: 80,
              height: 80,
              alignSelf: 'flex-start',
              position: 'absolute'
            }}
          />
          <View
            style={{
              height: 25,
              backgroundColor: 'white',
              marginTop: 17,
              alignSelf: 'flex-end',
              borderRadius: 10,
              marginRight: 78,
              justifyContent: 'center',
              width: this.nameWidth,
              opacity: this.nameOpacity
            }}
          >
            <Text style={{ alignSelf: 'flex-end', fontFamily: 'CocoGothic-Bold', marginRight: 15, fontSize: 16}}>
              Gerson Montenegro
            </Text>
          </View>
          <View
            style={{
              opacity: this.titleOpacity,
              width: this.titleWidth,
              height: 25,
              backgroundColor: 'white',
              marginRight: 78,
              marginTop: 5,
              alignSelf: 'flex-end',
              borderRadius: 10,
              justifyContent: 'center'
            }}
           >
            <Text style={{ alignSelf: 'flex-end', fontFamily: 'CocoGothic', marginRight: 15 }}>
              Mobile developer
            </Text>
           </View>
          </View>
        </Header>
        <Content>
          <View style={{marginTop: 0, marginLeft: 0, marginRight: 5}}>
              {this.renderComponent()}
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Animated.View
              style={{
                marginTop: this.profileMarginTop
              }}
            >
              <Button active={this.isButtonActive(1)} vertical onPress={() => { this.changeInterface(1) }}>
                <Icon name="ios-contact" />
                <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Profile</Text>
                <View style={{ marginBottom: -6 }}>
                  <View style={{ width: screenWidth/4, height: 5, backgroundColor: profileColor}}>
                  </View>
                </View>
              </Button>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.skillsOpacity,
                marginTop: this.skillsMarginTop
              }}
            >
              <Button active={this.isButtonActive(2)} onPress={() => { this.changeInterface(2) }}>
                <Icon name="ios-cog" />
                <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Skills</Text>
                <View style={{ marginBottom: -6 }}>
                  <View style={{ width: screenWidth/4, height: 5, backgroundColor: skillsColor}}>
                  </View>
                </View>
              </Button>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.educationOpacity,
                marginTop: this.educationMarginTop
              }}
            >
              <Button active={this.isButtonActive(3)} vertical onPress={() => { this.changeInterface(3) }}>
                <Icon name="ios-book" />
                <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Educat.</Text>
                <View style={{ marginBottom: -6 }}>
                  <View style={{ width: screenWidth/4, height: 5, backgroundColor: educationColor}}>
                  </View>
                </View>
              </Button>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.experienceOpacity,
                marginTop: this.experienceMarginTop
              }}
            >
              <Button active={this.isButtonActive(4)} vertical onPress={() => { this.changeInterface(4) }}>
                <Icon name="ios-construct" />
                <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Exper.</Text>
                <View style={{ marginBottom: -6 }}>
                  <View style={{ width: screenWidth/4, height: 5, backgroundColor: experiencieColor}}>
                  </View>
                </View>
              </Button>
            </Animated.View>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default TabScreen;
