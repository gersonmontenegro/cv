import React, { PureComponent } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
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
        <View style={{marginTop: 0, marginLeft: 5}}>
          <ScrollView>
            <Text style={{fontFamily: 'CocoGothic-Bold'}}>
              {"\n"}
              Professional profile
              {"\n"}
            </Text>
            <Text style={{fontFamily: 'CocoGothic', textAlign: 'left'}}>
              I'm a Systems Engineering with a long experience developing almost all kind of software, from desktop applications, to realt time video games. But, in the last years, I'm focusing in mobile applications, so, I made a lot of applications to many years ago using jQuery Mobile, then I learned Ionic, and started to make applications in this technology, and now I'm learging react-native. I made some things using Swift and Java as well, but I realized that react-native is more atrative for me than Swift, or Java.
              {"\n"}
              {"\n"}
              Besides that, I'm a "every thing has a solution" person (and a "everything will be all right" person), and I like to find and to solve errors in my apps, even if the code is not mine.
              {"\n"}
              {"\n"}
              I like to much learn to code and learn to make mobile apps, and just right now I'm learning by myself (like always) react-native. In the past I made some things in Swift, but I didn't keep working with that.
            </Text>
          </ScrollView>
          <View style={{position: 'absolute', alignItems: 'center', marginLeft: (screenWidth/2) - 45, marginTop: -100}}>
            <Circle width={90} height={90} color="white" borderWidth={5} marginTop={40} />
            <Image source={require('./../assets/img/grs.png')} style={{width: 60, height: 60, resizeMode: 'contain', marginTop: -75}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
