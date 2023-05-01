import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import imagePath from '../../constants/imagePath';
import ChatBox from '../ChatBox';
import {Testimonials} from '../../constants/dataItems';

import ButtonComp from '../ButtonComp';
import navigationString from '../../constants/navigationString';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const FullMenu = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.lineIndicator} />
        <View>
          <View style={styles.firstContainer}>
            <ChatBox
              text="Popular"
              msgTextStyle={styles.msgTextStyle}
              textWrapperStyle={styles.textWrapperStyle}
            />
            <View style={styles.iconContainer}>
              <Image
                source={imagePath.RestoLocationIcon}
                style={{marginRight: moderateScale(10)}}
              />
              <Image source={imagePath.IconLove} />
            </View>
          </View>

          <Text style={styles.Favorite}>Rainbow Sandwich Sugarless</Text>

          <View style={styles.secondContainer}>
            <View style={styles.rating}>
              <Image
                source={imagePath.IconStar}
                style={{marginRight: moderateScale(13)}}
              />
              <Text style={styles.SecondWrapperText}>4.8 Rating</Text>
            </View>
            <View style={styles.location}>
              <Image
                source={imagePath.bag}
                style={{marginRight: moderateScale(13)}}
              />
              <Text style={styles.SecondWrapperText}>2000+ Order</Text>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.ThirdContainerText}>
              {`Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.
            \n. Strowberry\n. Cream\n. wheat
            \nNulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.`}
            </Text>
          </View>
          <View style={styles.SixthContainer}>
            <FlatList
              contentContainerStyle={styles.containerStyle}
              showsHorizontalScrollIndicator={false}
              data={Testimonials}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={styles.chats}>
                    <Image source={item.image} style={styles.ProfileImage} />
                    <View>
                      <View style={styles.firstBox}>
                        <View>
                          <Text style={styles.ProfileName}>{item.title}</Text>
                          <Text style={styles.chatTime}>{item.time}</Text>
                        </View>
                        <Image source={imagePath.RatingStar} />
                      </View>
                      <Text style={styles.ProfileSubTitle}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
      <ButtonComp
        btnText="Add To Cart"
        btnStyle={styles.btnStyle}
        onPress={() => navigation.navigate(navigationString.PROFILE)}
      />
    </ScrollView>
  );
};

export default FullMenu;
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
    height: moderateScale(100),
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
    justifyContent: 'space-around',
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
  },
  ProfileName: {
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
  },
  chatTime: {
    fontSize: scale(12),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
    opacity: 0.3,
  },
  ProfileSubTitle: {
    fontSize: scale(12),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#000000',
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
    fontSize: scale(27),
    fontFamily: 'BentonSans Bold',
    alignSelf: 'flex-start',
    marginVertical: verticalScale(20),
  },
  msgTextStyle: {
    fontSize: scale(12),
    color: '#53E88B',
  },
  textWrapperStyle: {
    backgroundColor: 'rgb(228,248,240)',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(14),
    paddingVertical: verticalScale(9),
  },
  firstContainer: {
    width: width,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(24),
  },
  SecondWrapperText: {
    fontSize: scale(13),
    color: '#3B3B3B',
    opacity: 0.3,
  },
  thirdContainer: {
    width: width,
    marginVertical: verticalScale(20),
  },
  ThirdContainerText: {
    fontSize: scale(12),
    color: '#000000',
    fontFamily: 'BentonSans Book',
    lineHeight: moderateScale(21),
  },
  fourthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PopularMenu: {
    fontSize: scale(15),
    color: '#09051C',
    fontFamily: 'BentonSans Bold',
    lineHeight: moderateScale(19),
  },
  ViewAll: {
    fontSize: scale(12),
    color: '#FF7C32',
    fontFamily: 'BentonSans Book',
    lineHeight: moderateScale(15),
  },
  fifthContainer: {
    width: width,
  },
  SixthContainer: {
    width: width,
  },
  RatingWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: moderateScale(-20),
    paddingVertical: verticalScale(2),
    borderRadius: 15,
    backgroundColor: 'rgb(228,248,240)',
  },
  RatingTextStyle: {
    fontSize: scale(16),
    color: '#53E88B',
    fontFamily: 'BentonSans Bold',
    lineHeight: moderateScale(28),
    textAlign: 'center',
    alignSelf: 'center',
  },
  iconImageStyle: {
    alignSelf: 'center',
  },
  firstBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ProfileImage: {
    marginRight: 20,
  },
  btnStyle: {
    width: width,
    alignSelf: 'center',
    marginBottom: verticalScale(30),
  },
});
