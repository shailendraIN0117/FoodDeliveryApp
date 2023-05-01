import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import TextField from '../Components/TextField';
import navigationString from '../constants/navigationString';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import imagePath from '../constants/imagePath';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;
const PaymentMethods = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.firstWrapper}>
        <View style={styles.secondWrapper}>
          <BackBtn
            source={imagePath.IconBack}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>Payment Method</Text>
          <Text
            style={
              styles.subTitleText
            }>{`This data will be displayed in your account\nprofile for security`}</Text>
          <View style={{alignSelf: 'center'}}>
            <TextFieldWithIcon
              source={imagePath.paypal}
              fieldStyle={styles.textFieldWrapper}
              imageStyle={styles.imageStyle}
            />
            <TextFieldWithIcon
              source={imagePath.visa}
              fieldStyle={styles.textFieldWrapper}
              imageStyle={styles.imageStyle}
            />
            <TextFieldWithIcon
              source={imagePath.Payoneer}
              fieldStyle={styles.textFieldWrapper}
              imageStyle={styles.imageStyle}
            />
          </View>
        </View>

        <ButtonComp
          btnStyle={styles.buttonStyle}
          btnText={'Next'}
          onPress={() => navigation.navigate(navigationString.UPLOAD_PHOTO)}
        />
      </View>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  firstWrapper: {
    flex: 1,
    width: width,
    marginTop: moderateScale(38),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondWrapper: {
    marginVertical: moderateScale(20),
  },
  titleText: {
    fontSize: scale(25),
    fontFamily: 'BentonSans Bold',
    marginVertical: moderateScale(20),
    lineHeight: verticalScale(30),
  },
  subTitleText: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Book',
    lineHeight: verticalScale(21),
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
  },
  textFieldWrapper: {
    justifyContent: 'center',
    paddingVertical: verticalScale(28),
  },
  imageStyle: {
    alignSelf: 'center',
  },
});
