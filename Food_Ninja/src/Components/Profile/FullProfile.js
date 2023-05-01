import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React, {useState} from 'react';
import ButtonComp from '../ButtonComp';
import imagePath from '../../constants/imagePath';
import {orderDetails} from '../../constants/dataItems';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, logout} from '../../Redux/actions';
import {ScrollView} from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const FullProfile = ({horizontal}) => {
  const {items} = useSelector(state => state.dish);
  const {email, fullName} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.lineIndicator} />
      <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
        <Text style={styles.textStyle}>Member Gold</Text>
      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text style={styles.personName}>{fullName}</Text>
        {/* <Text style={styles.personName}>Anam Wusono</Text> */}
        {/* <Image source={imagePath.editIcon} /> */}
        <ButtonComp
          btnText="Logout"
          btnStyle={styles.logOutBtnStyle}
          textStyles={styles.logoutTextStyle}
          onPress={() => {
            console.log('OnClickCalled');
            dispatch(logout());
          }}
        />
      </View>
      <View style={{width: '90%'}}>
        {/* <Text style={styles.PersonEmail}>anamwp66@gmail.com</Text> */}
        <Text style={styles.PersonEmail}>{email}</Text>
      </View>

      <View style={styles.chats}>
        <Image source={imagePath.VoucherIcon} style={styles.ProfileImage} />
        <Text style={styles.ProfileName}>{'You Have 3 Voucher'}</Text>
      </View>

      <Text style={styles.Favorite}>Favorite</Text>

      <View style={styles.container1}>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal={horizontal}
          data={orderDetails}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View style={styles.chats}>
                <Image source={item.image} style={styles.ProfileImage} />
                <View>
                  <Text style={styles.ProfileName}>{item.title}</Text>
                  <Text style={styles.ProfileSubTitle}>{item.subTitle}</Text>
                  <Text style={styles.PriceStyle}>{`${item.price} $`}</Text>
                </View>
                <ButtonComp
                  btnText="Buy Again"
                  btnStyle={styles.ProcessBtnStyle}
                  textStyles={styles.textStyles}
                  onPress={() => {
                    console.log('OnClickCalled');
                    dispatch(addToCart(item));
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FullProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
  whiteBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: -80,
    borderTopRightRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(30),
    alignItems: 'center',
  },
  lineIndicator: {
    height: moderateScale(5),
    width: moderateScale(70),
    backgroundColor: 'rgb(255, 210, 130)',
    alignSelf: 'center',
    marginTop: verticalScale(15),
    borderRadius: moderateScale(5),
  },
  textWrapper: {
    backgroundColor: 'rgb(255,246,236)',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(12),
    borderRadius: 15,
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    margin: moderateScale(20),
    width: moderateScale(155),
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: scale(16),
    fontFamily: 'BentonSans Medium',
    color: '#DA6317',
  },
  personName: {
    fontSize: scale(27),
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
  },
  nameContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PersonEmail: {
    fontSize: scale(16),
    lineHeight: moderateVerticalScale(21),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
    alignSelf: 'flex-start',
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
    marginVertical: moderateVerticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  },
  PriceStyle: {
    color: 'rgb(0, 189, 115)',
    fontSize: scale(19),
    fontFamily: 'BentonSans Bold',
    marginTop: verticalScale(8),
  },
  ProcessBtnStyle: {
    width: moderateScale(79),
    height: moderateScale(29),
  },
  textStyles: {
    fontSize: scale(12),
  },
  container1: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
  Favorite: {
    fontSize: scale(15),
    fontFamily: 'BentonSans Bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  logoutTextStyle: {
    fontSize: scale(16),
  },
  logOutBtnStyle: {
    width: moderateScale(79),
    height: moderateScale(35),
    borderRadius: moderateScale(22),
  },
});
