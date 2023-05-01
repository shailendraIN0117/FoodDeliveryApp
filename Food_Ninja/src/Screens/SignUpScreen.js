import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import imagePath from '../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import TextField from '../Components/TextField';
import ButtonComp from '../Components/ButtonComp';
import Btn from '../Components/Btn';
import colors from '../styles/colors';
import navigationString from '../constants/navigationString';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../Redux/actions';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';

const SignUpScreen = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`])(?!.*\s).{8,}$/;

    return passwordRegex.test(password);
  };

  const [errors, setErrors] = React.useState({});
  // const [loggedIn, setLoggedIn] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const {users, email, isLoggedin} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    const temp = users.find(
      user => user.email === inputs.email && user.password === inputs.password,
    );
    if (temp) {
      dispatch(login(inputs.email));
      // setLoggedIn(true);
      console.log('isLoggedin', isLoggedin);
      Alert.alert('User LoggedIn Successfully');
    } else {
      dispatch(logout());
      console.log('isLoggedin', isLoggedin);
      Alert.alert('Invalid Credentials');
    }
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (!validatePassword(inputs.password)) {
      handleError(
        'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.',
        'password',
      );
      isValid = false;
    }

    if (isValid) {
      onClickHandler();
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
      <ScrollView style={styles.wrapper}>
        <View>
          <Image source={imagePath.logo} style={styles.logoStyle} />

          <Text style={styles.titleStyle}>Login To Your Account</Text>

          <View>
            <TextField
              keyboardType={'email-address'}
              placeholder="Email"
              // onChangeText={text => setEmail(text)}
              // value={email}
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              error={errors.email}
            />
            {/* <TextField
              placeholder="Password"
              secureTextEntry={true}
              // onChangeText={text => setPassword(text)}
              // value={password}
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              error={errors.password}
            /> */}

            <TextFieldWithIcon
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              onPressEye={() => {
                setEye(!eye);
                setSecureTextEntry(!secureTextEntry);
              }}
              src={!eye ? imagePath.BlackEyeIcon : imagePath.ColorEyeIcon}
              imageStyle={styles.imageStyle}
              fieldStyle={styles.fieldStyle}
              textFieldStyle={styles.textFieldStyle}
              // onChangeText={text => setPassword(text)}
              // value={password}
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              error={errors.password}
            />
          </View>

          <Text style={styles.NextText}>Or Continue With</Text>

          <View style={styles.BtnWrapper}>
            <Btn btnText={'Facebook'} src={imagePath.facebook} />
            <Btn btnText={'Google'} src={imagePath.google} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}>
            <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>
        <ButtonComp
          btnStyle={styles.buttonStyle}
          btnText={'Login'}
          onPress={() => {
            // navigation.navigate(navigationString.SIGNIN_SCREEN);
            validate();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  logoStyle: {
    width: moderateScale(188),
    height: moderateScale(200),
    marginTop: moderateVerticalScale(30),
    marginBottom: moderateVerticalScale(20),
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: scale(20),
    textAlign: 'center',
    fontFamily: 'BentonSans Bold',
    marginBottom: moderateVerticalScale(30),
  },
  wrapper: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  NextText: {
    fontSize: scale(12),
    fontFamily: 'BentonSans Bold',
    textAlign: 'center',
    marginTop: moderateVerticalScale(20),
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
    marginBottom: verticalScale(60),
  },
  BtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(20),
  },
  forgotPassword: {
    fontSize: scale(13),
    fontFamily: 'BentonSans Medium',
    color: colors.themeColor,
    marginTop: moderateVerticalScale(20),
    marginBottom: moderateVerticalScale(30),
    alignSelf: 'center',
  },
  textFieldStyle: {
    height: '100%',
    width: '80%',
  },
  fieldStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: moderateScale(0),
  },
  imageStyle: {
    marginRight: 8,
  },
});
