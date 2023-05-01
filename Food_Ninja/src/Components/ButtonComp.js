import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const ButtonComp = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  textStyles = {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={['#53E88B', '#15BE77']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={{...styles.LinearGradientStyle, ...btnStyle}}>
        <Text style={{...styles.btnTextStyle, ...textStyles}}>{btnText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  LinearGradientStyle: {
    height: moderateScale(62),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontFamily: 'BentonSans Bold',
    fontSize: scale(16),
    color: '#FFFFFF',
  },
});
