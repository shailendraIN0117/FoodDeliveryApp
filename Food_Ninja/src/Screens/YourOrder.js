import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const width = screenWidth * 0.9;

import React from 'react';
import imagePath from '../constants/imagePath';
import Background from '../Components/Background';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import ButtonComp from '../Components/ButtonComp';
import {orderDetails} from '../constants/dataItems';
import {useSelector, useDispatch} from 'react-redux';

const YourOrder = ({navigation}) => {
  const {cart, totalQuantity, totalPrice, items} = useSelector(
    state => state.dish,
  );
  const EmptyListMessage = ({item}) => {
    return (
      <View>
        <View style={styles.EmptyListMessage}>
          <Text style={styles.emptyListStyle}>No Item Found In Cart</Text>
        </View>
        <ButtonComp
          btnText="Add Items"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.navigate(navigationString.PROFILE)}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Background />
      <View style={styles.content}>
        <View>
          <View style={styles.container1}>
            <Text style={styles.title}>{`Find Your\nFavorite Food`}</Text>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() =>
                navigation.navigate(navigationString.NOTIFICATION_SCREEN)
              }>
              <Image source={imagePath.bellIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity>
              <TextFieldWithIcon
                source={imagePath.searchIcon}
                fieldStyle={styles.textFieldWrapper}
                placeholder={`What do you want to order?`}
                placeholderTextColor={'rgb(240,200,171)'}
                textStyle={styles.iconBoxText}
                imageStyle={styles.searchIconStyle}
              />
            </TouchableOpacity>
            <View style={styles.filterWrapper}>
              <BackBtn
                source={imagePath.Filter}
                buttonStyle={styles.filterButtonStyle}
                buttonIconStyle={styles.buttonIconStyle}
              />
            </View>
          </View>

          <View style={styles.container1}>
            <FlatList
              contentContainerStyle={styles.containerStyle}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={EmptyListMessage}
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.chats}>
                    <Image source={item.image} style={styles.ProfileImage} />
                    <View>
                      <Text style={styles.ProfileName}>{item.title}</Text>
                      <Text style={styles.ProfileSubTitle}>
                        {item.subTitle}
                      </Text>
                      <Text style={styles.PriceStyle}>{`${
                        item.price * item.quantity
                      } $`}</Text>
                    </View>
                    <ButtonComp
                      btnText="Proccess"
                      btnStyle={styles.ProcessBtnStyle}
                      textStyles={styles.textStyles}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
        {cart.length !== 0 && (
          <ButtonComp
            btnText="Check out"
            btnStyle={styles.btnStyle}
            onPress={() => navigation.navigate(navigationString.TRACK_ORDER)}
          />
        )}
      </View>
    </View>
  );
};

export default YourOrder;
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BentonSans Bold',
  },
  textFieldWrapper: {
    backgroundColor: 'rgb(255,246,236)',
    width: moderateScale(255),
  },
  iconBoxText: {
    marginLeft: moderateScale(24),
    fontSize: scale(12),
  },
  filterWrapper: {
    height: moderateScale(62),
    width: moderateScale(62),
    // opacity: 0.7,
    backgroundColor: 'rgb(255,246,236)',
    borderRadius: 15,
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: scale(16),
    color: '#000',
  },
  iconStyle: {
    backgroundColor: '#fff',
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 15,
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    position: 'absolute',
    flexDirection: 'row',
    fontSize: scale(17),
    fontFamily: 'BentonSans Bold',
    color: '#FFFFFF',
    marginLeft: moderateScale(173),
    marginRight: moderateScale(10),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(76),
  },
  AdvertisingImageStyle: {
    height: moderateScale(157),
    width: width,
    borderRadius: moderateScale(16),
  },
  NearestRestaurant: {
    fontSize: scale(15),
    fontFamily: 'BentonSans Bold',
  },
  ViewMore: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Book',
    color: '#FF7C32',
  },
  container3: {
    width: width,
    marginTop: moderateVerticalScale(20),
  },
  restoWrapper: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flexDirection: 'row',
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
    marginRight: moderateScale(20),
  },
  SearchTextStyle: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Medium',
    color: '#DA6317',
    marginLeft: moderateScale(10),
  },
  suggestionContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStyle: {
    width: width,
    alignSelf: 'center',
    marginBottom: verticalScale(30),
  },
  ProcessBtnStyle: {
    width: moderateScale(79),
    height: moderateScale(29),
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
  PriceStyle: {
    color: 'rgb(0, 189, 115)',
    fontSize: scale(19),
    fontFamily: 'BentonSans Bold',
    marginTop: verticalScale(8),
  },
  textStyles: {
    fontSize: scale(12),
  },
  EmptyListMessage: {
    paddingVertical: verticalScale(20),
    backgroundColor: 'rgb(0, 199, 119)',
    borderRadius: moderateScale(16),
    marginBottom: screenHeight / 2,
    marginTop: verticalScale(20),
  },
  emptyListStyle: {
    color: '#FEFEFF',
    fontSize: scale(18),
    fontFamily: 'BentonSans Bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
