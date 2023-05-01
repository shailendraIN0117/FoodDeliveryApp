import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import {Data} from '../constants/dataItems';
import {useRoute, useNavigation} from '@react-navigation/native';
import navigationString from '../constants/navigationString';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;
const PopularRestaurant = ({horizontal, numColumns}) => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <FlatList
      key={numColumns}
      style={{backgroundColor: '#FFFFFF'}}
      contentContainerStyle={styles.containerStyle}
      horizontal={horizontal}
      numColumns={numColumns}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={Data}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={styles.resto}
            onPress={() =>
              navigation.navigate(navigationString.DETAIL_ABOUT_RESTAURANT)
            }>
            <Image source={item.image} style={styles.restoImage} />
            <Text style={styles.restoName}>{item.title}</Text>
            <Text style={styles.restoDistance}>{item.time}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PopularRestaurant;

const styles = StyleSheet.create({
  resto: {
    width: moderateScale(147),
    height: moderateScale(184),
    borderRadius: moderateScale(22),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: moderateVerticalScale(50),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(20),
  },
  restoImage: {},
  restoName: {
    fontSize: scale(16),
    fontFamily: 'BentonSans Bold',
  },
  restoDistance: {
    fontSize: scale(13),
    fontFamily: 'BentonSans Book',
    alignSelf: 'center',
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
});
