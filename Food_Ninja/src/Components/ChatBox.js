import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const ChatBox = ({
  text,
  source,
  textWrapperStyle = {},
  msgTextStyle = {},
  onPress = () => {},
  iconImageStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.textWrapper, ...textWrapperStyle}}>
      <Image source={source} style={iconImageStyle} />
      <Text style={{...styles.textStyle, ...msgTextStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(12),
    borderRadius: 15,
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
  },
  textStyle: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Medium',
  },
});
