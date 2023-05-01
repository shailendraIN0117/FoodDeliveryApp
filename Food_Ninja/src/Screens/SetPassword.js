import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import BackBtn from '../Components/BackBtn';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import navigationString from '../constants/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;
const SetPassword = ({navigation}) => {
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [passwordVisibility2, setPasswordVisibility2] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [errors, setErrors] = React.useState({});
  const [inputs, setInputs] = React.useState({
    newPassword: '',
    confirmPassword: '',
  });

  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`])(?!.*\s).{8,}$/;

    return passwordRegex.test(password);
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.newPassword) {
      handleError('Please input new password', 'newPassword');
      isValid = false;
    } else if (!validatePassword(inputs.newPassword)) {
      handleError(
        'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.',
        'newPassword',
      );
      isValid = false;
    }
    if (!inputs.confirmPassword) {
      handleError('Please input confirm password', 'confirmPassword');
      isValid = false;
    } else if (!validatePassword(inputs.confirmPassword)) {
      handleError(
        'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.',
        'confirmPassword',
      );
      isValid = false;
    }

    if (inputs.newPassword !== inputs.confirmPassword) {
      Alert.alert('Your password and confirmation password do not match.');
      isValid = false;
    }

    if (isValid) {
      navigation.navigate(navigationString.SIGNUP_SUCCESS, {
        SuccessTitle: 'Password reset succesful',
      });
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.secondWrapper}>
        <BackBtn
          source={imagePath.IconBack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>{`Reset your password\nhere`}</Text>
        <Text
          style={
            styles.subTitleText
          }>{`Select which contact details should we\nuse to reset your password`}</Text>
        <TextFieldWithIcon
          placeholder={'New Password'}
          secureTextEntry={passwordVisibility1}
          onIconPress={() => {
            setEye1(!eye1);
            setPasswordVisibility1(!passwordVisibility1);
          }}
          source={eye1 ? imagePath.BlackEyeIcon : imagePath.ColorEyeIcon}
          imageStyle={styles.eyeIconStyle}
          fieldStyle={styles.textFieldWrapper}
          textFieldStyle={styles.textFieldStyle}
          onChangeText={text => handleOnchange(text, 'newPassword')}
          onFocus={() => handleError(null, 'newPassword')}
          error={errors.newPassword}
        />
        <TextFieldWithIcon
          placeholder={'Confirm Password'}
          secureTextEntry={passwordVisibility2}
          onIconPress={() => {
            setEye2(!eye2);
            setPasswordVisibility2(!passwordVisibility2);
          }}
          source={eye2 ? imagePath.BlackEyeIcon : imagePath.ColorEyeIcon}
          imageStyle={styles.eyeIconStyle}
          fieldStyle={styles.textFieldWrapper}
          textFieldStyle={styles.textFieldStyle}
          onChangeText={text => handleOnchange(text, 'confirmPassword')}
          onFocus={() => handleError(null, 'confirmPassword')}
          error={errors.confirmPassword}
        />
      </View>

      <ButtonComp
        btnStyle={styles.buttonStyle}
        btnText={'Next'}
        onPress={() => {
          validate();
        }}
      />
    </View>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
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
  textFieldWrapper: {
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  secondWrapper: {
    width: width,
    marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(50),
  },
  eyeIconStyle: {
    marginRight: moderateScale(-10),
  },
  textFieldStyle: {
    width: '90%',
    height: '100%',
    marginLeft: moderateScale(20),
  },
});
