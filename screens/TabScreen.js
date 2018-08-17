import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Footer, Content, FooterTab, Button, Icon } from 'native-base';
import { Animated, ScrollView, Image, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Circle from './../components/primitives/Circle';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import { defaultAnimationTime, profileColor, skillsColor, educationColor, experiencieColor, mainBackgroundColor, screenWidth, screenHeight } from './../assets/css/general.js';

const footerFontSize = 12;
const footerHeight = 70;

class TabScreen extends Component{
  constructor(props){
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
    this.state = { currentInterface: 1 };
    this.profileMarginTop = new Animated.Value(50);
  }

  componentDidMount(){
    this.startButtonsShowUp();
  }

  startButtonsShowUp = () => {
    setTimeout(() => {
      this.animatingValue(this.profileMarginTop);
    }, 0);
  }

  animatingValue = (value: any) => {
    Animated.timing(
      value,
      {
        toValue: 0,
        duration: defaultAnimationTime / 2
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
        <Content>
          <View style={{marginTop: 0, marginLeft: 0, marginRight: 5}}>
            <View style={{marginTop: 20}}>
                {this.renderComponent()}
            </View>
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

            <Button active={this.isButtonActive(2)} onPress={() => { this.changeInterface(2) }}>
              <Icon name="ios-cog" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Skills</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: skillsColor}}>
                </View>
              </View>
            </Button>
            <Button active={this.isButtonActive(3)} vertical onPress={() => { this.changeInterface(3) }}>
              <Icon name="ios-book" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Educat.</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: educationColor}}>
                </View>
              </View>
            </Button>
            <Button active={this.isButtonActive(4)} vertical onPress={() => { this.changeInterface(4) }}>
              <Icon name="ios-construct" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Exper.</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: experiencieColor}}>
                </View>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default TabScreen;
