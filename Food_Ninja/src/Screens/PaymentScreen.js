import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React, {useState} from 'react';
import imagePath from '../constants/imagePath';
import Background from '../Components/Background';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import ChatBox from '../Components/ChatBox';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const PaymentScreen = ({navigation}) => {
  const {DeliveryCharges, Discount} = useSelector(state => state.dish.cart);
  console.log(Discount, '==========================');
  const [charges, setCharges] = useState(false);
  const route = useRoute();
  const {subTotal, Total} = route.params;
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
          <Text style={styles.title}>Confirm Order</Text>
          <View style={styles.container1}>
            <View style={styles.chats}>
              <View style={styles.box1}>
                <Text style={styles.ProfileSubTitle}>{'Deliver To'}</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(navigationString.EDIT_LOCATION)
                  }>
                  <Text style={styles.PriceStyle}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box1}>
                <Image
                  source={imagePath.IconLocation}
                  style={styles.ProfileImage}
                />
                <Text style={styles.ProfileName}>
                  {'4517 Washington Ave. Manchester, Kentucky 39495'}
                </Text>
              </View>
            </View>
            <View style={styles.chats}>
              <View style={styles.box1}>
                <Text style={styles.ProfileSubTitle}>{'Payment Method'}</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(navigationString.EDIT_PAYMENT)
                  }>
                  <Text style={styles.PriceStyle}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box1}>
                <Image source={imagePath.paypal} style={styles.ProfileImage} />
                <Text style={styles.ProfileName}>{'2121 6352 8465 ****'}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <ImageBackground
            source={imagePath.OrderDetailsPattern}
            resizeMode="cover"
            style={styles.image}>
            <View>
              <View style={styles.textBoxStyle}>
                <Text style={styles.textStyle}>Sub-Total</Text>
                <Text style={styles.textStyle}>{subTotal}</Text>
              </View>
              <View style={styles.textBoxStyle}>
                <Text style={styles.textStyle}>Delivery Charge</Text>
                <Text style={styles.textStyle}>{`$ ${DeliveryCharges}`}</Text>
              </View>
              <View style={styles.textBoxStyle}>
                <Text style={styles.textStyle}>Discount</Text>
                <Text style={styles.textStyle}>{`$ ${Discount}`}</Text>
              </View>
            </View>

            <View style={styles.textBoxStyle}>
              <Text style={styles.totalTextStyle}>Total</Text>
              <Text style={styles.totalTextStyle}>{Total}</Text>
            </View>

            <ChatBox
              text="Place My Order"
              textWrapperStyle={styles.textWrapperStyle}
              msgTextStyle={styles.msgTextStyle}
              onPress={() => navigation.navigate(navigationString.YOUR_ORDER)}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
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
    height: moderateScale(100),
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
    // marginRight: moderateScale(10),
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
    fontSize: scale(14),
    fontFamily: 'BentonSans Bold',
    marginTop: verticalScale(8),
  },
  PatternStyle: {
    backgroundColor: 'rgb(0, 199, 119)',
    borderRadius: moderateVerticalScale(16),
  },
  container: {
    width: width,
    marginBottom: verticalScale(30),
    height: moderateVerticalScale(200),
  },
  image: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'rgb(0, 199, 119)',
    borderRadius: verticalScale(20),
    padding: moderateVerticalScale(20),
  },
  textBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(7),
  },
  textStyle: {
    color: '#FEFEFF',
    fontSize: scale(14),
    fontFamily: 'BentonSans Medium',
    justifyContent: 'space-between',
  },
  totalTextStyle: {
    color: '#FEFEFF',
    fontSize: scale(18),
    fontFamily: 'BentonSans Bold',
    justifyContent: 'space-between',
  },
  textWrapperStyle: {
    backgroundColor: '#FEFEFF',
  },
  msgTextStyle: {
    alignSelf: 'center',
    color: 'rgb(0, 199, 119)',
    fontSize: scale(14),
    fontFamily: 'BentonSans Bold',
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    marginBottom: moderateVerticalScale(10),
  },
});
