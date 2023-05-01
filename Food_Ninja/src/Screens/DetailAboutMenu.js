import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import imagePath from '../constants/imagePath';
import FullMenu from '../Components/MenuDetails/FullMenu';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const swipeHt = screenHeight * 0.6;
const DetailAboutMenu = () => {
  return (
    <View style={styles.container}>
      <Image
        source={imagePath.PhotoMenu}
        style={{width: screenWidth, height: screenHeight * 0.6}}
      />
      <SwipeUpDown
        itemMini={<FullMenu horizontal={true} numColumns={1} />}
        itemFull={<FullMenu horizontal={true} numColumns={1} />}
        swipeHeight={swipeHt}
        disablePressToShow={true}
      />
    </View>
  );
};

export default DetailAboutMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MiniView: {flex: 1, backgroundColor: 'white', borderRadius: 30},
  FullView: {flex: 1, backgroundColor: 'white'},
});
