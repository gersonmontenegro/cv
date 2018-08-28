import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { mainBackgroundColor, screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';

class Profile extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView>
            <Text style={{fontFamily: 'CenturyGothic-Bold'}}>
              {"\n"}
              Professional profile
              {"\n"}
            </Text>
            <Text style={{fontFamily: 'CenturyGothic', textAlign: 'left'}}>
              I'm a Systems Engineering with a long (13 years as a Job, 20 as a hobbie) experience developing almost all kind of software, from desktop applications (using C#/Java), to real time video games (using ActionScript 3 and Java). But, in the last 5 years, I've been focused on mobile applications, so, I made a lot of applications too many years ago using ActionScript3, Javascript, jQuery, and jQuery Mobile, then I learned Ionic, and I've been doing applications in this great technology, and now I'm learging react-native, a beautiful framework to deal with. I made some things using Swift and Java as well, but I realized that react-native is more atrative for me than Swift, or Java. That's why I'm making this app, but is not the first one.
              {"\n"}
              {"\n"}
              Besides that, I've been working for about 10 years in Startup companies, so, I know how they think about technology and what the developers do they need in order to create any kind of application, actually, I usually define myself like an "everything will be all right" person, and I like to find and to solve errors not only in my apps, but in another people apps.
              {"\n"}
              {"\n"}
              I love coding and learn better ways to do my apps, but it doesn't mean that I'm only a coder, because in the last years I've had the oportunity to lead developer teams in many projects, such as C4 Systems, like mobile aplications (iOS, Android), and wep applications as well.
              {"\n"}
              {"\n"}
              And for that last reason I've worked a lot with JS technologies, because in Startup's companies usually is very important to make one application, but this app must be able to run in any platform.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Profile;
