import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../styles/colors';

const TextFieldWithIcon = ({error, onFocus = () => {}, ...props}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <>
      <View
        style={[
          {...styles.textFieldWrapperStyle, ...props.fieldStyle},
          {
            borderColor: error
              ? 'red'
              : isFocused
              ? colors.themeColor
              : '#F4F4F4',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={props.onIconPress}>
          {props.source && (
            <Image source={props.source} style={props.imageStyle} />
          )}
        </TouchableOpacity>
        <Text style={props.textStyle}>{props.text}</Text>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          // onChangeText={props.onChangeText}
          // placeholder={props.placeholder}
          // defaultValue={props.defaultValue}
          // secureTextEntry={props.secureTextEntry}
          style={[props.textFieldStyle]}
          // placeholderTextColor={props.placeholderTextColor}
          {...props}
        />
        <TouchableOpacity onPress={props.onPressEye}>
          {props.src && <Image source={props.src} style={props.imageStyle} />}
        </TouchableOpacity>
      </View>
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 13,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          {error}
        </Text>
      )}
    </>
  );
};

export default TextFieldWithIcon;

const styles = StyleSheet.create({
  textFieldWrapperStyle: {
    height: moderateScale(62),
    // width: moderateScale(350),
    borderRadius: moderateScale(15),
    marginVertical: moderateScale(12),
    paddingLeft: moderateScale(25),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  iconText: {
    fontSize: scale(14),
    fontFamily: 'BentonSans Bold',
    // paddingTop: verticalScale()
  },
});

// {
//   text,
//   source,
//   placeholder,
//   defaultValue,
//   fieldStyle = {},
//   textStyle = {},
//   imageStyle = {},
//   textFieldStyle = {},
//   onIconPress = {},
//   secureTextEntry,
//   placeholderTextColor,
// }
