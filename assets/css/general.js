import { StyleSheet, Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const mainBackgroundColor = "#2e70ac";
export const lightMainBackgroundColor = "#f5fcff";
export const itemBackgroundColor = "#f0f7ef";
export const defaultAnimationTime = 100;
// export const defaultAnimationTime = 300;
export const profileColor = "#1fb9d7";
export const skillsColor = "#3071ae";
export const educationColor = "#4ab04a";
export const experiencieColor = "#f86236";
export const finalAvatarDimension = 80;

const iconSpace = 40;
const iconDimension = 25;

const itemQuantity = 5;
const nameWidth = screenWidth - screenWidth * 0.3;
const titleWidth = screenWidth - screenWidth * 0.5;

export const itemStyle = StyleSheet.create({
  back: {
    backgroundColor: itemBackgroundColor,
    width: screenWidth - 30,
    borderRadius: 10,
    height: iconSpace,
    zIndex: 1
  },
  iconContainer: {
    width: iconSpace,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -screenWidth + 10,
    zIndex: 2
  },
  iconImage: {
    width: iconDimension,
    height: iconDimension
  },
  shadow: {
    shadowColor: "gray",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  nameContainer: {
    width: (screenWidth - iconSpace) / (itemQuantity - 3),
    justifyContent: "center",
    zIndex: 1
  },
  nameStyle: {
    fontFamily: "CenturyGothic",
    fontSize: 15,
    color: "black"
  },
  valueContainer: {
    width: (screenWidth - iconSpace) / (itemQuantity - 2),
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1
  },
  valueStyle: {
    fontFamily: "CenturyGothic-Bold",
    fontSize: 15,
    color: "#000000"
  },
  itemContainer: {
    height: iconSpace,
    marginTop: 3,
    marginBottom: 3,
    flexDirection: "row",
    marginLeft: 20
  },
  arrowContainer: {
    width: iconSpace + 10,
    height: iconSpace,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  arrowTouchContainer: {
    width: iconDimension,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  arrowStyle: {
    width: 20,
    height: 20,
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "#c0d6e4"
  }
});

export const HeaderStyle = StyleSheet.create({
  headerContainer: {
    width: screenWidth,
    height: 100,
    backgroundColor: mainBackgroundColor,
    flexDirection: "row",
    marginTop: 0
  },
  avatarStyle: {
    marginTop: 7,
    marginLeft: 5,
    width: 80,
    height: 80
  },
  textsContainer: {
    width: screenWidth - 90,
    alignItems: "flex-start",
    marginLeft: 5,
    flexDirection: "column"
  },
  nameStyle: {
    height: 25,
    width: nameWidth,
    backgroundColor: "white",
    marginTop: 17,
    borderRadius: 10,
    justifyContent: "center"
  },
  nameTextStyle: {
    alignSelf: "flex-start",
    fontFamily: "CocoGothic-Bold",
    fontSize: 16,
    marginLeft: 5,
    color: "#000000"
  },
  titleStyle: {
    width: titleWidth,
    height: 25,
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 10,
    justifyContent: "center"
  },
  titleTextStyle: {
    alignSelf: "flex-start",
    fontFamily: "CocoGothic",
    marginLeft: 5,
    color: "#000000"
  }
});
