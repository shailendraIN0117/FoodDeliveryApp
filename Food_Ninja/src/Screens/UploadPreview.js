import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import imagePath from '../constants/imagePath';
import {useRoute} from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;
const UploadPreview = ({navigation}) => {
  const route = useRoute();
  const {profileImage} = route.params;
  console.log('profileImage =====>', profileImage);
  return (
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

        <Image source={{uri: profileImage}} style={styles.profileImgStyle} />
      </View>

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
  );
};

export default UploadPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  profileImgStyle: {
    alignSelf: 'center',
    height: verticalScale(235),
    width: verticalScale(235),
    borderRadius: moderateScale(22),
    marginTop: verticalScale(60),
  },
  secondWrapper: {
    width: width,
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
  },
});
