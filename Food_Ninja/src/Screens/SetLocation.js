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

const SetLocation = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <BackgroundImage />
        <View style={styles.secondWrapper}>
          <BackBtn
            source={imagePath.IconBack}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>Upload Your Photo Profile</Text>
          <Text
            style={
              styles.subTitleText
            }>{`This data will be displayed in your account\nprofile for security`}</Text>
          <TextFieldWithIcon
            source={imagePath.PinLogo}
            fieldStyle={styles.textFieldWrapper}
            text="Your Location"
            textStyle={styles.iconBoxText}
            imageStyle={styles.iconBoxImg}
          />
          <TouchableOpacity style={styles.SetLocationBtn}>
            <Text style={styles.textInsideSetLocationBtn}>Set Location</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 60}}>
        <ButtonComp
          btnStyle={styles.buttonStyle}
          btnText={'Next'}
          onPress={() =>
            navigation.navigate(navigationString.SIGNUP_SUCCESS, {
              SuccessTitle: 'Your Profile Is Ready To Use',
            })
          }
        />
      </View>
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
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
  SetLocationBtn: {
    width: moderateVerticalScale(322),
    height: moderateVerticalScale(57),
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    // backgroundColor:"red"
  },
  textInsideSetLocationBtn: {
    color: '#000',
    flexDirection: 'column',
    textAlign: 'center',
    marginVertical: moderateVerticalScale(21),
    fontSize: scale(14),
    // fontFamily: "BentonSans Book",
    fontWeight: '500',
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
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
    // backgroundColor: "yellow"
  },
});
