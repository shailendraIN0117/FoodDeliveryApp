import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  LogBox,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

import React, {useEffect, useState} from 'react';
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
import PopularRestaurant from '../Components/PopularRestaurant';
import PopularMenu from '../Components/PopularMenu';
import navigationString from '../constants/navigationString';
import SearchModal from './SearchModal';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/actions';

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [advertising, setAdvertising] = useState(true);
  const [menu, setMenu] = useState(true);
  const [restaurant, setRestaurant] = useState(true);
  const [viewMore, setViewMore] = useState(true);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Background />
      <View style={styles.content}>
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
          <TouchableOpacity onPress={toggleModal}>
            <TextFieldWithIcon
              source={imagePath.searchIcon}
              fieldStyle={styles.textFieldWrapper}
              placeholder={`What do you want to order?`}
              placeholderTextColor={'rgb(240,200,171)'}
              textStyle={styles.iconBoxText}
              imageStyle={styles.searchIconStyle}
            />
          </TouchableOpacity>
          <SearchModal visible={isModalVisible} onClose={toggleModal} />
          <View style={styles.filterWrapper}>
            <BackBtn
              source={imagePath.Filter}
              buttonStyle={styles.filterButtonStyle}
              buttonIconStyle={styles.buttonIconStyle}
              onPress={() => dispatch(logout())}
            />
          </View>
        </View>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {advertising && (
            <TouchableOpacity style={styles.AdvertisingImageStyle}>
              <Image
                source={imagePath.PromoAdvertising}
                style={{
                  height: moderateScale(157),
                  width: width,
                  borderRadius: moderateScale(16),
                }}
              />
            </TouchableOpacity>
          )}
          {!viewMore && (
            <View style={styles.suggestionContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.SearchTextStyle}>{`>10 Km`}</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.SearchTextStyle}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.SearchTextStyle}>Soup</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.SearchTextStyle}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {restaurant && (
            <View style={styles.container3}>
              <View style={styles.restoWrapper}>
                <Text style={styles.NearestRestaurant}>Nearest Restaurant</Text>
                <TouchableOpacity
                  onPress={() => {
                    setAdvertising(false);
                    setMenu(false);
                    setViewMore(false);
                  }}>
                  {viewMore ? (
                    <Text style={styles.ViewMore}>View More</Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setAdvertising(true);
                        setMenu(true);
                        setViewMore(true);
                      }}>
                      <Text style={styles.ViewMore}>View Less</Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </View>
              <PopularRestaurant
                horizontal={viewMore ? true : false}
                numColumns={viewMore ? null : 2}
              />
            </View>
          )}

          {menu && (
            <View style={styles.container3}>
              <View style={styles.restoWrapper}>
                <Text style={styles.NearestRestaurant}>Popular Menu</Text>
                <TouchableOpacity
                  onPress={() => {
                    setAdvertising(false);
                    setMenu(true);
                    setViewMore(false);
                    setRestaurant(false);
                  }}>
                  {viewMore ? (
                    <Text style={styles.ViewMore}>View More</Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setAdvertising(true);
                        setMenu(true);
                        setViewMore(true);
                        setRestaurant(true);
                      }}>
                      <Text style={styles.ViewMore}>View Less</Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </View>
              <PopularMenu horizontal={viewMore ? true : false} />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // zIndex: 1,
    alignItems: 'center',
    marginTop: verticalScale(50),
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
    backgroundColor: '#FFFFFF',
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
});
