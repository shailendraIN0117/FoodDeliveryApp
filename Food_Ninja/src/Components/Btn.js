import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';

const Btn = ({
  src,
  btnText,
  btnStyle = {},
  btnTextStyle = {},
  iconStyle = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.buttonStyle, ...btnStyle}}>
      <Image style={{...styles.iconStyle, ...iconStyle}} source={src} />
      <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(62),
    width: moderateScale(157),
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.15,
    shadowRadius: 50,
  },
  btnTextStyle: {
    fontFamily: 'BentonSans Bold',
    fontSize: scale(16),
    color: '#09051C',
  },
  iconStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
});
