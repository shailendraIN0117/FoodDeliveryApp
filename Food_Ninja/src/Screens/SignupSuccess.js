import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import navigationString from '../constants/navigationString';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {useRoute} from '@react-navigation/native';

const SignupSuccess = ({navigation}) => {
  const route = useRoute();
  const {SuccessTitle} = route.params;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <BackgroundImage />
        <View style={styles.secondWrapper}>
          <Image source={imagePath.Success} />
          <View>
            <Text style={styles.text1}>Congrats!</Text>
            <Text style={styles.text2}>{SuccessTitle}</Text>
          </View>
        </View>
      </View>

      <ButtonComp
        btnStyle={styles.buttonStyle}
        btnText={'Next'}
        onPress={() => navigation.navigate(navigationString.SIGNUP_SCREEN)}
      />
    </View>
  );
};

export default SignupSuccess;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
  },
  secondWrapper: {
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
    alignItems: 'center',
  },
  text1: {
    fontSize: scale(30),
    fontFamily: 'BentonSans Bold',
    color: colors.themeColor,
    marginTop: moderateVerticalScale(35),
    textAlign: 'center',
  },
  text2: {
    fontSize: scale(20),
    fontFamily: 'BentonSans Bold',
    marginTop: moderateVerticalScale(12),
    lineHeight: moderateVerticalScale(30),
  },
});
