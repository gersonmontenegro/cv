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
        <View style={{
          height: 100,
          width: screenWidth,
          backgroundColor: '#2e70ac',
          alignItems: 'center'
        }}>
        </View>
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView>
            <Text style={{fontFamily: 'CenturyGothic-Bold'}}>
              {"\n"}
              Professional profile
              {"\n"}
            </Text>
            <Text style={{fontFamily: 'CenturyGothic', textAlign: 'left'}}>
              I'm a Systems Engineering with a long (13 years as a Job, 20 as a hobbie) experience developing almost all kind of software, from desktop applications (using C#/Java), to real time video games (using ActionScript 3 and Java). But, in the last 5 years, I've been focus in mobile applications, so, I made a lot of applications to many years ago using jQuery Mobile, then I learned Ionic, and I've been doing applications in this great technology, and now I'm learging react-native, an beautiful framework to deal with. I made some things using Swift and Java as well, but I realized that react-native is more atrative for me than Swift, or Java. That's why I'm making this app, but is not the first one.
              {"\n"}
              {"\n"}
              Besides that, I'm a "every thing has a solution" person (and a "everything will be all right" person), and I like to find and to solve errors in my apps, even if the code is not mine.
              {"\n"}
              {"\n"}
              I like to much learn to code and learn better ways to do my apps, but it doesn't mean that I'm only a coder, because in the last years I've had the oportunity to lead developer teams in many projects, such as C4 Systems, and
            </Text>
          </ScrollView>
          <View style={{position: 'absolute', alignItems: 'center', marginLeft: (screenWidth/2) - 45, marginTop: -115}}>
            <Image source={require('./../assets/img/grs_pixel_with_circle_200.png')} style={{width: 100, height: 100, resizeMode: 'contain', marginTop: 0}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
