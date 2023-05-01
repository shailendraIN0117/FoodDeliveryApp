import {
  StyleSheet,
  Text,
  View,
  Image,
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
import imagePath from '../../constants/imagePath';
import ChatBox from '../ChatBox';
import PopularMenuList from '../PopularMenuList';
import {Testimonials} from '../../constants/dataItems';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const FullRestaurant = ({horizontal, numColumns}) => {
  const [viewMore, setViewMore] = useState(true);
  return (
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

        <Text style={styles.Favorite}>Wijie Bar and Resto</Text>

        <View style={styles.secondContainer}>
          <View style={styles.location}>
            <Image
              source={imagePath.IconmapPin}
              style={{marginRight: moderateScale(13)}}
            />
            <Text style={styles.SecondWrapperText}>19 Km</Text>
          </View>
          <View style={styles.rating}>
            <Image
              source={imagePath.IconStar}
              style={{marginRight: moderateScale(13)}}
            />
            <Text style={styles.SecondWrapperText}>4.8 Rating</Text>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.ThirdContainerText}>
            Most whole Alaskan Red King Crabs get broken down into legs, claws,
            and lump meat. We offer all of these options as well in our online
            shop, but there is nothing like getting the whole . . . .
          </Text>
        </View>
        <View style={styles.fourthContainer}>
          <Text style={styles.PopularMenu}>Popular Menu</Text>
          <TouchableOpacity>
            <Text style={styles.ViewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fifthContainer}>
          <PopularMenuList horizontal={horizontal} numColumns={numColumns} />
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
                      {/* <ChatBox
                        source={imagePath.RatingStar}
                        iconImageStyle={styles.iconImageStyle}
                        text="5"
                        msgTextStyle={styles.RatingTextStyle}
                        textWrapperStyle={styles.RatingWrapperStyle}
                      /> */}
                    </View>
                    <Text style={styles.ProfileSubTitle}>{item.subTitle}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FullRestaurant;
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
});
