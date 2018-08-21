import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import { HeaderStyle } from './../../assets/css/general';

class CustomHeader extends PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={HeaderStyle.headerContainer}>
        <Text>
          header!!
        </Text>
      </View>
    );
  }
}

export default CustomHeader;
