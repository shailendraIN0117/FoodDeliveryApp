import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import React from 'react';
import {PopularMenu} from '../constants/dataItems';

const PopularMenuList = ({horizontal, numColumns}) => {
  return (
    <FlatList
      key={numColumns}
      contentContainerStyle={styles.containerStyle}
      horizontal={horizontal}
      numColumns={numColumns}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={PopularMenu}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity style={styles.resto}>
            <Image source={item.image} style={styles.restoImage} />
            <Text style={styles.restoName}>{item.title}</Text>
            <Text style={styles.restoDistance}>{item.price}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PopularMenuList;
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
    shadowRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: moderateVerticalScale(20),
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
    backgroundColor: '#FEFEFF;',
  },
});
