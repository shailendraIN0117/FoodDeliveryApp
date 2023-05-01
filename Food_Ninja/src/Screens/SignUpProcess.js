import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import TextField from '../Components/TextField';
import navigationString from '../constants/navigationString';
import imagePath from '../constants/imagePath';
import {useState} from 'react';
import {signup} from '../Redux/actions';
import {useDispatch} from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;

const SignUpProcess = ({navigation}) => {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
  });

  // const dispatch = useDispatch('');
  // console.log(inputs);
  // const signupHandler = () => {
  //   dispatch(
  //     // signup({inputs.firstName, inputs.lastName, email, inputs.phoneNo, password, confirmPassword}),
  //     signup(inputs),
  //   );
  //   Alert.alert('Account Created');
  //   // props.navigation.navigate('Login');
  // };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.firstName) {
      handleError('Please input firstName', 'firstName');
      isValid = false;
    }

    if (!inputs.lastName) {
      handleError('Please input lastName', 'lastName');
      isValid = false;
    }

    if (!inputs.phoneNo) {
      handleError('Please input phone number', 'phoneNo');
      isValid = false;
    } else if (inputs.phoneNo.length < 10) {
      handleError('phoneNo must be length of 10', 'phoneNo');
      isValid = false;
    }
    if (isValid) {
      // signupHandler();
      navigation.navigate(navigationString.PAYMENT_METHODS);
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
      <View style={styles.firstWrapper}>
        <View style={styles.secondWrapper}>
          <BackBtn
            source={imagePath.IconBack}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.titleText}>Fill in your bio to get started</Text>
          <Text
            style={
              styles.subTitleText
            }>{`This data will be displayed in your account\nprofile for security`}</Text>
          <View style={styles.textFieldWrapper}>
            <TextField
              placeholder="First Name"
              // onChangeText={text => setFirstName(text)}
              // value={firstName}
              onChangeText={text => handleOnchange(text, 'firstName')}
              onFocus={() => handleError(null, 'firstName')}
              error={errors.firstName}
            />
            <TextField
              placeholder="Last Name"
              // onChangeText={text => setLastName(text)}
              // value={lastName}
              onChangeText={text => handleOnchange(text, 'lastName')}
              onFocus={() => handleError(null, 'lastName')}
              error={errors.lastName}
            />
            <TextField
              keyboardType={'phone-pad'}
              placeholder="Mobile Number"
              // onChangeText={text => setPhoneNo(text)}
              // value={phoneNo}
              onChangeText={text => handleOnchange(text, 'phoneNo')}
              onFocus={() => handleError(null, 'phoneNo')}
              error={errors.phoneNo}
            />
          </View>
        </View>
        <ButtonComp
          btnStyle={styles.buttonStyle}
          btnText={'Next'}
          onPress={() => {
            validate();
            // navigation.navigate(navigationString.PAYMENT_METHODS);
          }}
        />
      </View>
    </View>
  );
};

export default SignUpProcess;

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
    // marginHorizontal: moderateScale(25),
    marginVertical: moderateScale(20),
  },
  titleText: {
    fontSize: scale(25),
    fontFamily: 'BentonSans Bold',
    marginVertical: moderateScale(20),
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
    alignSelf: 'center',
  },
});
