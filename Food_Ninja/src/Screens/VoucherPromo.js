import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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
import Background from '../Components/Background';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import ButtonComp from '../Components/ButtonComp';

const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const VoucherPromo = ({navigation}) => {
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
          <Text style={styles.title}>Voucher Promo</Text>
          <TouchableOpacity>
            <Image
              source={imagePath.Voucher1}
              style={{
                width: width,
                borderRadius: moderateScale(16),
                marginBottom: verticalScale(20),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={imagePath.Voucher2}
              style={{
                width: width,
                borderRadius: moderateScale(16),
              }}
            />
          </TouchableOpacity>
        </View>

        <ButtonComp
          btnText="Check out"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.navigate(navigationString.CART)}
        />
      </View>
    </View>
  );
};

export default VoucherPromo;

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
    height: moderateScale(87),
    borderRadius: moderateScale(22),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginBottom: moderateVerticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ProfileImage: {},
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
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
  chatTime: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  btnStyle: {
    width: width,
    alignSelf: 'center',
    marginBottom: verticalScale(30),
  },
});
