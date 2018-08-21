import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const mainBackgroundColor = '#2e70ac';
export const defaultAnimationTime = 50;
// export const defaultAnimationTime = 500;
export const profileColor = '#1fb9d7';
export const skillsColor = '#3071ae';
export const educationColor = '#4ab04a';
export const experiencieColor = '#f86236';
export const finalAvatarDimension = 80;

export const HeaderStyle = StyleSheet.create({
  headerContainer: {
    width: screenWidth,
    height: 102,
    backgroundColor: mainBackgroundColor
  }
});
