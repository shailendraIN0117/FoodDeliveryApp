import {
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BackgroundImage = () => {
  return (
    <ImageBackground source={imagePath.backgroundImg} style={styles.bgImg} />
  );
};

const styles = StyleSheet.create({
  bgImg: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default BackgroundImage;
