import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import { finalAvatarDimension, HeaderStyle, screenWidth } from './../../assets/css/general';

class CustomHeader extends PureComponent{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={HeaderStyle.headerContainer}>
        <Image
          source={require('./../../assets/img/grs_pixel_with_circle_200.png')}
          style={HeaderStyle.avatarStyle}
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

export default CustomHeader;
