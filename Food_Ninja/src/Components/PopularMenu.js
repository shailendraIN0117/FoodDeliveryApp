import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Menu} from '../constants/dataItems';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import navigationString from '../constants/navigationString';
import {useRoute, useNavigation} from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const PopularMenu = ({horizontal}) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <FlatList
      contentContainerStyle={styles.containerStyle}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal}
      data={Menu}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={styles.menu}
            onPress={() =>
              navigation.navigate(navigationString.DETAIL_ABOUT_MENU)
            }>
            <Image source={item.image} style={styles.menuImage} />
            <View>
              <Text style={styles.DishName}>{item.title}</Text>
              <Text style={styles.DishSubTitle}>{item.subTitle}</Text>
            </View>
            <Text style={styles.DishPrice}>{item.price}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PopularMenu;

const styles = StyleSheet.create({
  menu: {
    width: width,
    height: moderateScale(87),
    borderRadius: moderateScale(10),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginRight: moderateVerticalScale(20),
    marginTop: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuImage: {},
  DishName: {
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
  },
  DishSubTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
  DishPrice: {
    fontSize: scale(22),
    lineHeight: moderateVerticalScale(28),
    fontFamily: 'BentonSans Bold',
    color: '#FEAD1D',
  },
});
