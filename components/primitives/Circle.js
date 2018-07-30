import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

class Circle extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      color: props.color
    };
  }

  render(){
    return (
      <View style={{
        width: this.props.width,
        height: this.props.height,
        borderRadius: 150/2,
        borderColor: '#000000',
        borderWidth: this.props.borderWidth,
        backgroundColor: this.props.color
      }} />
    );
  };
}

// const circleStyle = StyleSheet.create({
//   basic:{
//     width: _width,
//     height: _height,
//     borderRadius: 150/2,
//     backgroundColor: 'white'
//   }
// });

export default Circle;
