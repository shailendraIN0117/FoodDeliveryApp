import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import imagePath from '../constants/imagePath';
import Background from '../Components/Background';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const EditLocation = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Background />
      <View style={styles.content}>
        <View style={styles.container1}>
          <BackBtn
            source={imagePath.IconBack}
            buttonIconStyle={styles.backBtnStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Shipping</Text>
          <View style={styles.container1}>
            <View style={styles.chats}>
              <Text style={styles.ProfileSubTitle}>{'Order Location'}</Text>
              <View style={styles.box1}>
                <Image
                  source={imagePath.IconLocation}
                  style={styles.ProfileImage}
                />
                <Text style={styles.ProfileName}>
                  {'8502 Preston Rd. Inglewood, Maine 98380'}
                </Text>
              </View>
            </View>
            <View style={styles.chats}>
              <Text style={styles.ProfileSubTitle}>{'Deliver To'}</Text>
              <View style={styles.box1}>
                <Image
                  source={imagePath.IconLocation}
                  style={styles.ProfileImage}
                />
                <View>
                  <Text style={styles.ProfileName}>
                    {'4517 Washington Ave. Manchester, Kentucky 39495'}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(navigationString.SET_LOCATION_MAP)
                    }>
                    <Text style={styles.PriceStyle}>set location</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditLocation;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    alignItems: 'center',
    marginTop: verticalScale(50),
    justifyContent: 'space-between',
  },
  container1: {
    width: width,
    justifyContent: 'space-between',
  },
  backBtnStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    marginBottom: verticalScale(20),
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BentonSans Bold',
    marginVertical: verticalScale(20),
  },
  chats: {
    width: width,
    height: moderateScale(120),
    borderRadius: moderateScale(22),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginBottom: moderateVerticalScale(15),
    justifyContent: 'center',
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
  ProfileSubTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
    margin: moderateVerticalScale(10),
  },
  PriceStyle: {
    color: 'rgb(0, 189, 115)',
    fontSize: scale(14),
    fontFamily: 'BentonSans Medium',
    marginTop: verticalScale(8),
    opacity: 0.6,
  },

  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
  },
});
