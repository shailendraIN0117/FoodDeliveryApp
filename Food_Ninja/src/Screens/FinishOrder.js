import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import BackgroundImage from '../Components/BackgroundImage';
import imagePath from '../constants/imagePath';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import navigationString from '../constants/navigationString';
import {useRoute, useNavigation} from '@react-navigation/native';
import ButtonComp from '../Components/ButtonComp';
import ChatBox from '../Components/ChatBox';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const FinishOrder = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {image} = route.params;

  const stars = Array(5).fill(0);

  const [star, setStar] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <BackgroundImage />
      <View style={styles.content}>
        <View style={styles.ProfileContainer}>
          <Image source={image} style={styles.callingPersonImg} />
          <Text
            style={styles.ProfileName}>{`Thank You!\nOrder Completed`}</Text>
          <Text style={styles.ProfileSubTitle}>{`Please rate your Food`}</Text>
          <View style={styles.startContainer}>
            {stars.map((_, index) => (
              <TouchableOpacity key={index} onPress={() => setStar(index - 5)}>
                <Image
                  source={
                    star < index - 5 ? imagePath.LightStar : imagePath.DarkStar
                  }
                  style={styles.starStyle}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{marginBottom: 30}}>
          <TextFieldWithIcon
            fieldStyle={styles.textFieldWrapper}
            placeholder={'Leave feedback'}
            imageStyle={styles.editIconStyle}
            source={imagePath.editIcon}
            textFieldStyle={styles.textFieldStyle}
          />
          <View style={styles.buttonConatiner}>
            <ButtonComp
              btnText="Submit"
              btnStyle={styles.btnStyle}
              msgTextStyle={styles.skipBtn}
            />
            <ChatBox
              text="Skip"
              textWrapperStyle={styles.textWrapperStyle}
              msgTextStyle={styles.skipBtn}
              onPress={() =>
                navigation.navigate(navigationString.RATE_SCREEN, {
                  image: image,
                  title: `Thank You!\nEnjoy Your Meal`,
                  subtitle: `Please rate your Food`,
                })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FinishOrder;

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
    justifyContent: 'space-between',
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
    textAlign: 'center',
  },
  ProfileSubTitle: {
    fontSize: scale(14),
    lineHeight: verticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.4,
  },
  ProfileContainer: {
    alignItems: 'center',
    marginTop: moderateVerticalScale(200),
  },
  textFieldWrapper: {
    flexDirection: 'row',
  },
  editIconStyle: {
    marginRight: 20,
  },
  btnStyle: {
    width: moderateScale(233),
    height: moderateScale(57),
    marginRight: moderateScale(10),
  },
  buttonConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipBtn: {
    fontFamily: 'BentonSans Bold',
    fontSize: scale(16),
    color: 'rgb(0, 189, 115)',
  },
  textWrapperStyle: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: verticalScale(17),
    borderRadius: moderateScale(15),
  },
  startContainer: {
    flexDirection: 'row',
    margin: moderateScale(20),
  },
  starStyle: {
    marginRight: moderateScale(20),
  },
  textFieldStyle: {
    // backgroundColor: 'red',
    width: '80%',
    height: '100%',
  },
});
