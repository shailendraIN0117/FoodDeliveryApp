import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../styles/colors';
const TextField = ({error, onFocus = () => {}, ...props}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View>
      <Image source={props.source} />
      <TextInput
        {...props}
        style={[
          styles.textFieldStyle,
          {
            borderColor: error
              ? 'red'
              : isFocused
              ? colors.themeColor
              : '#F4F4F4',
            alignItems: 'center',
          },
        ]}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 13,
            justifyContent: 'flex-start',
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textFieldStyle: {
    height: moderateScale(62),
    width: moderateScale(350),
    borderRadius: moderateScale(15),
    marginVertical: moderateVerticalScale(12),
    paddingLeft: moderateScale(28),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
  },
});
