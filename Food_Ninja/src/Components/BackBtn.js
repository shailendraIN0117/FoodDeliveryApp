import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const BackBtn = ({
  onPress = () => {},
  source,
  buttonStyle = {},
  buttonIconStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.BackBtnStyle, ...buttonStyle}}>
      <Image style={buttonIconStyle} source={source} />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  BackBtnStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
});
