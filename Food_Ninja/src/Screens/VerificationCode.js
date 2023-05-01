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
const VerificationCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.secondWrapper}>
        <BackBtn
          source={imagePath.IconBack}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={styles.titleText}>{`Enter 4-digit\nVerification code`}</Text>
        <Text
          style={
            styles.subTitleText
          }>{`Code send to +6282045**** . This code will\nexpired in 01:30`}</Text>
        <TextFieldWithIcon
          defaultValue={`   1    9    2    3   `}
          fieldStyle={styles.numberField}
          textFieldStyle={styles.textFieldStyle}
        />
      </View>

      <ButtonComp
        btnStyle={styles.buttonStyle}
        btnText={'Next'}
        onPress={() => navigation.navigate(navigationString.VIA_METHOD)}
      />
    </View>
  );
};

export default VerificationCode;

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
    justifyContent: 'center',
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
    // backgroundColor: "yellow"
  },
  numberField: {
    height: moderateVerticalScale(103),
    width: width,
  },
  textFieldStyle: {
    fontSize: scale(40),
  },
});
