import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
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
const screenWidth = Dimensions.get('window').width;
import BackBtn from '../Components/BackBtn';
import Btn from '../Components/Btn';
import navigationString from '../constants/navigationString';
import {ScrollView} from 'react-native-gesture-handler';

const width = screenWidth * 0.9;
const TrackOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagePath.Map1} style={styles.image}>
        <BackBtn
          source={imagePath.IconBack}
          onPress={() => navigation.goBack()}
          buttonStyle={styles.buttonStyle}
        />
        <Image source={imagePath.CarTrack} style={styles.CarTrack} />

        <View style={styles.chats}>
          <ImageBackground
            source={imagePath.BackgroundPattern}
            style={styles.bgPatterStyle}>
            <Text style={styles.ProfileSubTitle}>{'Track Orders'}</Text>
            <View
              style={{
                ...styles.chats,
                ...styles.personDetail,
              }}>
              <Image
                source={imagePath.DeliveryPerson}
                style={styles.ProfileImage}
              />
              <View>
                <Text style={styles.ProfileName}>{'Mr Kemplas'}</Text>
                <View style={styles.onlineStatus}>
                  <Image
                    source={imagePath.Iconmaps}
                    style={styles.onlineIndicatorStyle}
                  />
                  <Text style={styles.statusTitle}>25 minutes on the way</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <Btn
                btnText="Call"
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                src={imagePath.CallLogo}
                onPress={() =>
                  navigation.navigate(navigationString.CALL_MODAL, {
                    image: imagePath.DeliveryPerson,
                    PersonName: 'Mr Kemplas',
                  })
                }
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationString.CHAT, {
                    image: imagePath.DeliveryPerson,
                    PersonName: 'Mr Kemplas',
                  })
                }>
                <Image source={imagePath.msgBtn} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TrackOrder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    alignSelf: 'flex-start',
    margin: moderateVerticalScale(5),
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
  buttonStyle: {
    alignSelf: 'flex-start',
    marginTop: verticalScale(40),
    marginHorizontal: moderateScale(20),
  },
  MessageBtn: {
    width: moderateScale(68),
    height: moderateScale(68),
  },
  statusTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  onlineIndicatorStyle: {
    marginRight: moderateScale(6),
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: ' rgb(0, 209, 124)',
    fontFamily: 'BentonSans Medium',
    marginLeft: moderateScale(8),
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -160,
  },
  MsgTextStyle: {
    color: 'white',
    fontFamily: 'BentonSans Medium',
  },
  MsgStyle: {
    marginBottom: moderateVerticalScale(10),
    backgroundColor: ' rgb(0, 209, 124)',
  },
  iconStyle: {
    tintColor: 'white',
  },
  personDetail: {
    flexDirection: 'row',
    height: moderateScale(80),
    width: '100%',
    borderRadius: moderateScale(15),
    marginBottom: moderateVerticalScale(10),
  },
  btnStyle: {
    height: moderateScale(68),
    width: moderateScale(220),
    justifyContent: 'center',
  },
  bgPatterStyle: {
    // backgroundColor: 'red',
    resizeMode: 'cover',
  },
});
