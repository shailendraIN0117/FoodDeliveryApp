import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import imagePath from '../constants/imagePath';
const screenWidth = Dimensions.get('window').width;
import ButtonComp from '../Components/ButtonComp';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';

const width = screenWidth * 0.9;

const SetLocationMap = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagePath.Map1} style={styles.image}>
        <TextFieldWithIcon
          source={imagePath.searchIcon}
          fieldStyle={styles.textFieldWrapper}
          placeholder={'Find Your Location'}
          placeholderTextColor={'rgb(240,200,171)'}
          textStyle={styles.iconBoxText}
          imageStyle={styles.searchIconStyle}
        />
        <Image source={imagePath.PinRadar} />

        <View style={styles.chats}>
          <Text style={styles.ProfileSubTitle}>{'Your Location'}</Text>
          <View style={styles.box1}>
            <Image
              source={imagePath.IconLocation}
              style={styles.ProfileImage}
            />
            <Text style={styles.ProfileName}>
              {'4517 Washington Ave. Manchester, Kentucky 39495'}
            </Text>
          </View>
          <ButtonComp
            btnText="Set Location"
            btnStyle={styles.btnStyle}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetLocationMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textFieldWrapper: {
    backgroundColor: 'rgb(255,246,236)',
    width: width,
    marginTop: verticalScale(40),
  },
  iconBoxText: {
    marginLeft: moderateScale(24),
    fontSize: scale(12),
  },
  chats: {
    width: width,
    height: moderateScale(200),
    borderRadius: moderateScale(22),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginBottom: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileSubTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
    alignSelf: 'flex-start',
    margin: moderateVerticalScale(10),
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileImage: {
    marginRight: moderateScale(10),
  },
  ProfileName: {
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
  },
  btnStyle: {
    width: moderateScale(300),
    marginBottom: moderateVerticalScale(10),
  },
});
