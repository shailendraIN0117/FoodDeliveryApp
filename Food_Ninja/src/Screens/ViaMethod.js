import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import BackBtn from '../Components/BackBtn';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import navigationString from '../constants/navigationString';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;
const ViaMethod = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.secondWrapper}>
        <BackBtn
          source={imagePath.IconBack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>{`Forgot password?`}</Text>
        <Text
          style={
            styles.subTitleText
          }>{`Select which contact details should we\nuse to reset your password`}</Text>
        <TextFieldWithIcon
          defaultValue={`**** **** 4235`}
          text="Via sms:"
          fieldStyle={styles.numberField}
          source={imagePath.Msg}
          textStyle={styles.textInsideBox}
          textFieldStyle={styles.textFieldStyle}
        />
        <TextFieldWithIcon
          defaultValue={`**** @gmail.com`}
          text="Via email:"
          fieldStyle={styles.numberField}
          source={imagePath.mail}
          textStyle={styles.textInsideBox}
          textFieldStyle={styles.textFieldStyle}
        />
      </View>

      <ButtonComp
        btnStyle={styles.buttonStyle}
        btnText={'Next'}
        onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}
      />
    </View>
  );
};

export default ViaMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
  },
  titleText: {
    fontSize: scale(25),
    fontFamily: 'BentonSans Bold',
    marginVertical: moderateScale(10),
    lineHeight: verticalScale(30),
  },
  subTitleText: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Book',
    lineHeight: verticalScale(21),
  },
  textFieldWrapper: {
    alignItems: 'flex-start',
    height: verticalScale(120),
    paddingTop: verticalScale(20),
  },
  iconBoxText: {
    fontSize: scale(14),
    fontFamily: 'BentonSans Bold',
    marginLeft: 20,
    paddingTop: 10,
  },
  iconBoxImg: {
    height: moderateScale(33),
    width: moderateScale(33),
  },
  secondWrapper: {
    width: width,
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
    // backgroundColor: "yellow"
  },
  numberField: {
    height: moderateVerticalScale(105),
    alignSelf: 'center',
  },
  textInsideBox: {
    color: '#828282',
    fontSize: scale(13),
    marginLeft: moderateScale(12),
    marginTop: verticalScale(-30),
  },
  textFieldStyle: {
    marginLeft: moderateScale(-55),
    marginTop: verticalScale(10),
    fontSize: scale(20),
  },
});
