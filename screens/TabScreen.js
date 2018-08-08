import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import Skills from './Skills';
import { screenWidth } from './../assets/css/general.js';

const footerFontSize = 12;
const profileColor = '#1fb9d7';
const skillsColor = '#3071ae';
const educationColor = '#4ab04a';
const experiencieColor = '#f86236';

class TabScreen extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Container style={{ width: screenWidth }}>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-contact" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Profile</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: profileColor}}>
                </View>
              </View>
            </Button>
            <Button vertical>
              <Icon name="ios-cog" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Skills</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: skillsColor}}>
                </View>
              </View>
            </Button>
            <Button vertical>
              <Icon name="ios-book" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Educat.</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: educationColor}}>
                </View>
              </View>
            </Button>
            <Button active vertical>
              <Icon name="ios-construct" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Exper.</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: experiencieColor}}>
                </View>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}

export default TabScreen;
