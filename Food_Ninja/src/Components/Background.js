import {StyleSheet, View, Dimensions, Image} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Background = () => {
  return (
    <View>
      <Image
        source={imagePath.BackgroundPattern}
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // absoluteFilledObject style={[StyleSheet.absoluteFill, styles.container]}
    // resizeMode: 'cover',
    // height: screenHeight,
    width: screenWidth,
    backgroundColor: '#FEFEFF',
    // backgroundColor: 'red',
  },
});
