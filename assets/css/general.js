import { StyleSheet, Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const mainBackgroundColor = '#2e70ac';
export const lightMainBackgroundColor = '#f5fcff';
export const defaultAnimationTime = 100;
export const profileColor = '#1fb9d7';
export const skillsColor = '#3071ae';
export const educationColor = '#4ab04a';
export const experiencieColor = '#f86236';
export const finalAvatarDimension = 80;

const nameWidth: numner = screenWidth - (screenWidth * .3);
const titleWidth: numner = screenWidth - (screenWidth * .5);

export const HeaderStyle = StyleSheet.create({
  headerContainer: {
    width: screenWidth,
    height: 102,
    // height: 102,
    backgroundColor: mainBackgroundColor,
    flexDirection: 'row',
  },
  avatarStyle: {
    marginTop: 7,
    marginLeft: 5,
    width: 80,
    height: 80,
  },
  textsContainer: {
    width: (screenWidth - 90),
    alignItems: 'flex-start',
    marginLeft: 5,
    flexDirection: 'column'
  },
  nameStyle: {
    height: 25,
    width: nameWidth,
    backgroundColor: 'white',
    marginTop: 17,
    borderRadius: 10,
    justifyContent: 'center'
  },
  nameTextStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'CocoGothic-Bold',
    fontSize: 16,
    marginLeft: 5,
    color: '#000000'
  },
  titleStyle: {
    width: titleWidth,
    height: 25,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center'
  },
  titleTextStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'CocoGothic',
    marginLeft: 5,
    color: '#000000'
  }
});
