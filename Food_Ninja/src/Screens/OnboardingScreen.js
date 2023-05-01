import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import ButtonComp from '../Components/ButtonComp';
import navigationString from '../constants/navigationString';

const OnboardingScreen = ({navigation}) => {
  const [page, setPage] = useState(2);
  const [image, setImage] = useState(imagePath.onboarding1);
  const [title, setTitle] = useState(`Find your Comfort\nFood here`);
  const [subTitle, setSubTitle] = useState(
    `Here You Can find a chef or dish for every\ntaste and color. Enjoy!`,
  );
  const handleNext = () => {
    // if (page === 1) {
    //   setImage(require('./assets/img1.jpg'));
    //   setTitle(`Find your\nComfort Food here`);
    //   setSubTitle(`Here You Can find a chef or dish for every\ntaste and color. Enjoy!`);
    // } else
    if (page === 2) {
      setImage(imagePath.onboarding2);
      setTitle(`Food Ninja is Where Your\nComfort Food Lives`);
      setSubTitle(`Enjoy a fast and smooth food delivery at\nyour doorstep`);
    } else if (page === 3) {
      // Go to the next screen
      navigation.navigate(navigationString.SIGNIN_SCREEN);
    }
    setPage(page + 1);
  };
  return (
    <View style={style.container}>
      <Image style={style.onboardingImg} source={image} />
      <View style={style.wrapper1}>
        <View>
          <Text style={style.titleStyle}>{title}</Text>
          <Text style={style.subtitleStyle}>{subTitle}</Text>
        </View>
      </View>
      <ButtonComp
        btnText={'Next'}
        btnStyle={style.buttonStyle}
        onPress={handleNext}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  onboardingImg: {
    width: '100%',
    height: moderateScale(400),
    marginTop: verticalScale(50),
  },
  titleStyle: {
    fontSize: scale(22),
    fontFamily: 'BentonSans Bold',
    textAlign: 'center',
    paddingBottom: verticalScale(20),
    lineHeight: moderateScale(28),
  },
  subtitleStyle: {
    fontSize: scale(12),
    fontWeight: '400',
    fontFamily: 'BentonSans Book',
    textAlign: 'center',
    lineHeight: moderateScale(21),
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonStyle: {
    width: moderateScale(157),
    marginBottom: verticalScale(60),
  },
});

export default OnboardingScreen;
