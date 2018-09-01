import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { itemStyle, screenWidth } from "./../../assets/css/general";

class ItemDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={itemStyle.itemContainer}>
        <View style={[itemStyle.back]} />
        <View style={[itemStyle.iconContainer]}>
          <Image style={itemStyle.iconImage} source={this.props.icon} />
        </View>

        <View style={itemStyle.nameContainer}>
          <Text style={itemStyle.nameStyle}>{this.props.name}</Text>
        </View>

        <View style={itemStyle.valueContainer}>
          <Text style={itemStyle.valueStyle}>{this.props.value}</Text>
        </View>
      </View>
    );
  }
}
export default ItemDetail;
