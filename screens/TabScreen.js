import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Footer, Content, FooterTab, Button, Icon } from 'native-base';
import { ScrollView, Image, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Circle from './../components/primitives/Circle';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import { screenWidth, screenHeight } from './../assets/css/general.js';

const footerFontSize = 12;
const footerHeight = 70;
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
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <Content>
          <View style={{marginTop: 0, marginLeft: 0, marginRight: 5}}>
            <View style={{marginTop: 20}}>
              <Education />
            </View>
          </View>
        </Content>
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
            <Button active vertical>
              <Icon name="ios-book" />
              <Text style={{ fontFamily: 'CenturyGothic', fontSize: footerFontSize }}>Educat.</Text>
              <View style={{ marginBottom: -6 }}>
                <View style={{ width: screenWidth/4, height: 5, backgroundColor: educationColor}}>
                </View>
              </View>
            </Button>
            <Button vertical>
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
