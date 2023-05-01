import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import BackgroundImage from '../Components/BackgroundImage';
import imagePath from '../constants/imagePath';
import navigationString from '../constants/navigationString';
import {useRoute, useNavigation} from '@react-navigation/native';

const CallModal = () => {
  const [speakerToggle, setSpeakerToggle] = useState(true);
  const [myText, setMyText] = useState('Ringing . . .');
  const updateText = () => {
    setMyText('15.23 Min');
  };

  setTimeout(updateText, 5000);

  const route = useRoute();
  const navigation = useNavigation();
  const {image, PersonName} = route.params;

  return (
    <View style={styles.mainContainer}>
      <BackgroundImage />
      <View style={styles.content}>
        <View style={styles.ProfileContainer}>
          <Image source={image} style={styles.callingPersonImg} />
          <Text style={styles.ProfileName}>{PersonName}</Text>
          <Text style={styles.ProfileSubTitle}>{myText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setSpeakerToggle(!speakerToggle)}>
            <Image
              source={
                speakerToggle ? imagePath.SpeakerIcon : imagePath.MuteIcon
              }
              style={{marginRight: moderateScale(20)}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationString.FINISH_ORDER, {image: image})
            }>
            <Image source={imagePath.CloseIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CallModal;

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(65),
  },
  callingPersonImg: {
    width: 161,
    height: 161,
    borderRadius: 80.5,
    borderWidth: 8,
    borderColor: 'rgb(0, 189, 115)',
    marginBottom: moderateVerticalScale(60),
  },
  ProfileName: {
    fontSize: scale(25),
    lineHeight: moderateVerticalScale(32),
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    marginBottom: moderateVerticalScale(20),
  },
  ProfileSubTitle: {
    fontSize: scale(19),
    lineHeight: verticalScale(19),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  ProfileContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: moderateVerticalScale(200),
  },
});
