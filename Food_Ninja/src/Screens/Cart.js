import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React, {useState, useEffect} from 'react';
import imagePath from '../constants/imagePath';
import Background from '../Components/Background';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import ButtonComp from '../Components/ButtonComp';
import {orderDetails} from '../constants/dataItems';
import ChatBox from '../Components/ChatBox';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useSelector, useDispatch} from 'react-redux';
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from '../Redux/actions';
import {useIsFocused} from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const Cart = ({navigation}) => {
  const {cart, DeliveryCharges, totalPrice, Discount} = useSelector(
    state => state.dish,
  );
  console.log(cart, '======cart cart cart cart cart ');
  const [charges, setCharges] = useState(false);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getCartTotal());
    // cart.length >= 1 && setCharges(!charges);
  }, [isFocused]);

  const EmptyListMessage = ({item}) => {
    return (
      <>
        <View style={styles.EmptyListMessage}>
          <Text style={styles.emptyListStyle}>No Item Found In Cart</Text>
        </View>
        <ButtonComp
          btnText="Add Items"
          btnStyle={styles.btnStyle}
          onPress={() => navigation.navigate(navigationString.PROFILE)}
        />
      </>
    );
  };
  let row = [];
  let prevOpenedRow;

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
          <Text style={styles.title}>Order details</Text>

          <View style={styles.container1}>
            <FlatList
              contentContainerStyle={styles.containerStyle}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={EmptyListMessage}
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                const closeRow = idx => {
                  if (prevOpenedRow && prevOpenedRow !== row[idx]) {
                    prevOpenedRow.close();
                  }
                  prevOpenedRow = row[idx];
                };
                const renderRightActions = () => {
                  return (
                    <View style={styles.swipeToDelete}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(removeItem(item.id));
                        }}>
                        <Image source={imagePath.DeleteIcon} />
                      </TouchableOpacity>
                    </View>
                  );
                };

                return (
                  <Swipeable
                    renderRightActions={(progress, dragX) =>
                      renderRightActions(progress, dragX)
                    }
                    onSwipeableOpen={() => closeRow(index)}
                    ref={ref => (row[index] = ref)}
                    rightOpenValue={-100}>
                    <View style={styles.chats}>
                      <Image source={item.image} style={styles.ProfileImage} />
                      <View>
                        <Text style={styles.ProfileName}>{item.title}</Text>
                        <Text style={styles.ProfileSubTitle}>
                          {item.subTitle}
                        </Text>
                        <Text style={styles.PriceStyle}>
                          {`$ ${item.price * item.quantity}`}
                        </Text>
                      </View>
                      <View style={styles.plusMinusStyle}>
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(decreaseItemQuantity(item.id));
                            dispatch(getCartTotal());
                            if (item.quantity <= 1) {
                              dispatch(removeItem(item.id));
                            }
                          }}>
                          <Image source={imagePath.IconMinus} />
                        </TouchableOpacity>
                        {console.log('item.quantity', item.quantity)}
                        <Text style={styles.itemQuantity}>{item.quantity}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(increaseItemQuantity(item.id));
                            dispatch(getCartTotal());
                          }}>
                          <Image source={imagePath.IconPlus} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Swipeable>
                );
              }}
            />

            <View style={styles.container}>
              <ImageBackground
                source={imagePath.OrderDetailsPattern}
                resizeMode="cover"
                style={styles.image}>
                <View>
                  <View style={styles.textBoxStyle}>
                    <Text style={styles.textStyle}>Sub-Total</Text>
                    <Text style={styles.textStyle}>{`$ ${totalPrice}`}</Text>
                  </View>
                  <View style={styles.textBoxStyle}>
                    <Text style={styles.textStyle}>Delivery Charge</Text>
                    <Text
                      style={styles.textStyle}>{`$ ${DeliveryCharges}`}</Text>
                  </View>
                  <View style={styles.textBoxStyle}>
                    <Text style={styles.textStyle}>Discount</Text>
                    <Text style={styles.textStyle}>{`$ ${Discount}`}</Text>
                  </View>
                </View>

                <View style={styles.textBoxStyle}>
                  <Text style={styles.totalTextStyle}>Total</Text>
                  <Text style={styles.totalTextStyle}>
                    {totalPrice > 0 &&
                      `$ ${totalPrice + DeliveryCharges - Discount}`}
                  </Text>
                </View>

                <ChatBox
                  text="Place My Order"
                  textWrapperStyle={styles.textWrapperStyle}
                  msgTextStyle={styles.msgTextStyle}
                  onPress={() => {
                    navigation.navigate(navigationString.PAYMENT_SCREEN, {
                      subTotal: `$ ${totalPrice}`,
                      Total:
                        totalPrice > 0 &&
                        `$ ${totalPrice + DeliveryCharges - Discount}`,
                    });
                    dispatch(getCartTotal());
                  }}
                />
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

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
  plusMinusStyle: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PriceStyle: {
    color: 'rgb(0, 189, 115)',
    fontSize: scale(19),
    fontFamily: 'BentonSans Bold',
    marginTop: verticalScale(8),
  },
  PatternStyle: {
    backgroundColor: 'rgb(0, 199, 119)',
    borderRadius: moderateVerticalScale(16),
  },
  container: {
    width: width,
    marginBottom: 100,
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
  swipeToDelete: {
    backgroundColor: 'rgb(255, 161, 51)',
    width: width / 4,
    height: moderateScale(87),
    borderRadius: moderateScale(22),
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginBottom: moderateVerticalScale(15),
    // paddingLeft: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  itemQuantity: {
    alignSelf: 'center',
  },
  EmptyListMessage: {
    flex: 1,
    paddingVertical: verticalScale(20),
    backgroundColor: 'rgb(0, 199, 119)',
    borderRadius: moderateScale(16),
    marginVertical: verticalScale(30),
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
