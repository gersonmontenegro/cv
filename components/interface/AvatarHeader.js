import React, { PureComponent } from 'react';
import { Animated, View, Text, Image } from 'react-native';

import { mainBackgroundColor, finalAvatarDimension, HeaderStyle, screenWidth, screenHeight } from './../../assets/css/general';

class AvatarHeader extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{marginTop: 20, width: screenWidth, flexDirection: 'row', opacity: this.props.opacity}}>
        <Image
          source={require('./../../assets/img/grs_pixel_with_circle_200.png')}
          style={{
            marginTop: 7,
            marginLeft: 12,
            width: 80,
            height: 80,
          }}
        />
        <View style={HeaderStyle.textsContainer}>
          <View style={HeaderStyle.nameStyle}>
            <Text style={HeaderStyle.nameTextStyle}>
              Gerson Montenegro
            </Text>
          </View>
          <View style={HeaderStyle.titleStyle}>
            <Text style={HeaderStyle.titleTextStyle}>
              Mobile developer
            </Text>
           </View>
        </View>
      </View>
    );
  }
}

export default AvatarHeader;
