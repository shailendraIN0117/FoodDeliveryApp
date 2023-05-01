import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import navigationString from '../constants/navigationString';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import imagePath from '../constants/imagePath';
import ImagePicker from 'react-native-image-crop-picker';
import {Image} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;

const UploadPhoto = ({navigation}) => {
  const ImageUri = Image.resolveAssetSource(imagePath.Men).uri;
  console.log('asset Image------>', ImageUri);
  const [pic, setPic] = useState(ImageUri);
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setPic(image.path);
        Alert.alert('Photo Uploaded Successfully');
      })
      .catch(error => console.log('Error ====>', error));
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setPic(image.path);
      })
      .catch(error => console.log('Error ====>', error));
  };
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.firstWrapper}>
        <View style={styles.secondWrapper}>
          <BackBtn
            onPress={() => navigation.goBack()}
            source={imagePath.IconBack}
          />
          <Text style={styles.titleText}>Upload Your Photo Profile</Text>
          <Text
            style={
              styles.subTitleText
            }>{`This data will be displayed in your account\nprofile for security`}</Text>
          <View style={styles.thirdWrapper}>
            <TouchableOpacity onPress={choosePhotoFromLibrary}>
              <TextFieldWithIcon
                source={imagePath.GalleryIcon}
                fieldStyle={styles.textFieldWrapper}
                text="From Gallery"
                imageStyle={styles.imageStyle}
                textStyle={styles.textStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePhotoFromCamera}>
              <TextFieldWithIcon
                source={imagePath.CameraIcon}
                fieldStyle={styles.textFieldWrapper}
                text="Take Photo"
                imageStyle={styles.imageStyle}
                textStyle={styles.textStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ButtonComp
          btnStyle={styles.buttonStyle}
          btnText={'Next'}
          onPress={() =>
            navigation.navigate(navigationString.UPLOAD_PREVIEW, {
              profileImage: pic,
            })
          }
        />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  firstWrapper: {
    flex: 1,
    width: width,
    marginTop: moderateScale(38),
    justifyContent: 'space-between',
  },
  secondWrapper: {
    marginVertical: moderateScale(20),
  },
  titleText: {
    fontSize: scale(25),
    fontFamily: 'BentonSans Bold',
    marginVertical: moderateScale(10),
    lineHeight: verticalScale(30),
  },
  subTitleText: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Book',
    lineHeight: verticalScale(21),
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
  },
  textFieldWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(120),
    width: width,
  },
  thirdWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 21,
    marginVertical: verticalScale(10),
  },
  textStyle: {
    textAlign: 'center',
    marginRight: 21,
  },
});
