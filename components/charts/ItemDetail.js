import React, { PureComponent } from "react";
import { TouchableHighlight, View, Text, Image } from "react-native";
import { itemStyle } from "./../../assets/css/general";

class ItemDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  addArrow() {
    if (this.props.arrow) {
      return (
        <View style={[itemStyle.arrowContainer, itemStyle.shadow]}>
          <TouchableHighlight style={itemStyle.arrowTouchContainer}>
            <Image
              style={itemStyle.arrowStyle}
              source={require("./../../assets/img/icons/arrow-right.png")}
            />
          </TouchableHighlight>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={itemStyle.itemContainer}>
        <View style={[itemStyle.back]} />
        <View style={[itemStyle.iconContainer, itemStyle.shadow]}>
          <Image style={itemStyle.iconImage} source={this.props.icon} />
        </View>
        <View style={itemStyle.nameContainer}>
          <Text style={itemStyle.nameStyle}>{this.props.name}</Text>
        </View>
        <View style={itemStyle.valueContainer}>
          <Text style={itemStyle.valueStyle}>{this.props.value}</Text>
        </View>
        {this.addArrow()}
      </View>
    );
  }
}
export default ItemDetail;
