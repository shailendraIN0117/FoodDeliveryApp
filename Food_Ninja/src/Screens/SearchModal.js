import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

import imagePath from '../constants/imagePath';
import Background from '../Components/Background';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import ButtonComp from '../Components/ButtonComp';

const SearchModal = ({visible, onClose}) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.mainContainer}>
        <Background />
        <View style={styles.content}>
          <View style={styles.container1}>
            <Text style={styles.title}>{`Find Your\nFavorite Food`}</Text>
            <View style={styles.iconStyle}>
              <Image source={imagePath.bellIcon} />
            </View>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => {}}>
              <TextFieldWithIcon
                source={imagePath.searchIcon}
                fieldStyle={styles.textFieldWrapper}
                placeholder={`What do you want to order?`}
                placeholderTextColor={'rgb(240,200,171)'}
                textStyle={styles.iconBoxText}
                imageStyle={styles.searchIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: width}}>
            <Text style={styles.TypeStyle}>Type</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Menu</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: width}}>
            <Text style={styles.TypeStyle}>Location</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>{`1 Km`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>{`>10 Km`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>{`<10 Km`}</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: width}}>
            <Text style={styles.TypeStyle}>Food</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Cake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Soup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Main Course</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
              <Text style={styles.textStyle}>Dessert</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchButtonStyle}>
            <ButtonComp
              btnText={'Search'}
              btnStyle={styles.searchBtnStyle}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: verticalScale(50),
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
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BentonSans Bold',
  },
  textFieldWrapper: {
    backgroundColor: 'rgb(255,246,236)',
    width: width,
  },
  iconBoxText: {
    marginLeft: moderateScale(24),
    fontSize: scale(12),
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
  searchBtnStyle: {
    width: width,
  },
  TypeStyle: {
    fontSize: scale(15),
    fontFamily: 'BentonSans Bold',
    alignSelf: 'flex-start',
  },
  suggestionField: {
    width: moderateScale(108),
    backgroundColor: 'rgb(255,246,236)',
  },
  textStyle: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Medium',
    color: '#DA6317',
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
  },
  searchButtonStyle: {
    marginBottom: verticalScale(30),
    marginTop: verticalScale(100),
  },
});
