import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import BackgroundImage from '../Components/BackgroundImage';
import ButtonComp from '../Components/ButtonComp';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import navigationString from '../constants/navigationString';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {signup} from '../Redux/actions';
const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.9;
const SignInScreen = ({navigation}) => {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [eye, setEye] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [inputs, setInputs] = React.useState({
    email: '',
    fullName: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});

  const dispatch = useDispatch('');

  const signupHandler = () => {
    dispatch(signup(inputs));
  };

  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`])(?!.*\s).{8,}$/;

    return passwordRegex.test(password);
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

    if (!inputs.fullName) {
      handleError('Please input fullName', 'fullName');
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
    // if (checkBox1 === false || checkBox2 === false) {
    //   Alert.alert('Please checked the below checkBox');
    //   isValid = false;
    // }

    if (isValid) {
      signupHandler();
      navigation.navigate(navigationString.SIGNUP_PROCESS);
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
          <View style={styles.logoStyle}>
            <Image source={imagePath.logo} />
          </View>

          <Text style={styles.titleStyle}>Sign Up For Free </Text>

          <View fieldStyle={styles.textFieldWrapper}>
            <TextFieldWithIcon
              placeholder="Name"
              source={imagePath.profile}
              imageStyle={styles.imageStyle}
              textFieldStyle={styles.textFieldStyle}
              // onChangeText={text => setName(text)}
              // value={name}
              onChangeText={text => handleOnchange(text, 'fullName')}
              onFocus={() => handleError(null, 'fullName')}
              error={errors.fullName}
            />
            <TextFieldWithIcon
              placeholder="Email"
              source={imagePath.email}
              imageStyle={styles.imageStyle}
              textFieldStyle={styles.textFieldStyle}
              // onChangeText={text => setEmail(text)}
              // value={email}
              keyboardType={'email-address'}
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              error={errors.email}
            />
            <TextFieldWithIcon
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              onPressEye={() => {
                setEye(!eye);
                setSecureTextEntry(!secureTextEntry);
              }}
              source={imagePath.password}
              src={!eye ? imagePath.BlackEyeIcon : imagePath.ColorEyeIcon}
              imageStyle={styles.imageStyle}
              textFieldStyle={styles.textFieldStyle}
              // onChangeText={text => setPassword(text)}
              // value={password}
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              error={errors.password}
            />
          </View>

          <View style={styles.CheckList}>
            <View style={styles.checkBoxWrapper}>
              <TouchableOpacity onPress={() => setCheckBox1(!checkBox1)}>
                {!checkBox1 ? (
                  <View style={styles.hollowCheckBox} />
                ) : (
                  <Image
                    source={imagePath.checkListIcon}
                    style={styles.checkBox}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.NextText}>Keep Me Signed In</Text>
            </View>
            <View style={styles.checkBoxWrapper}>
              <TouchableOpacity onPress={() => setCheckBox2(!checkBox2)}>
                {!checkBox2 ? (
                  <View style={styles.hollowCheckBox} />
                ) : (
                  <Image
                    source={imagePath.checkListIcon}
                    style={styles.checkBox}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.NextText}>
                Email Me About Special Pricing
              </Text>
            </View>
          </View>
        </View>
        <View>
          <ButtonComp
            btnStyle={styles.buttonStyle}
            btnText={'Create Account'}
            onPress={() => {
              validate();
              // navigation.navigate(navigationString.SIGNUP_PROCESS);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationString.SIGNUP_SCREEN);
            }}>
            <Text style={styles.HaveAccountText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  logoStyle: {
    width: moderateScale(188),
    height: moderateScale(200),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: scale(20),
    textAlign: 'center',
    fontFamily: 'BentonSans Bold',
  },
  wrapper: {
    flex: 1,
    width: width,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  buttonStyle: {
    width: moderateScale(157),
    alignSelf: 'center',
  },
  HaveAccountText: {
    fontSize: scale(15),
    fontFamily: 'BentonSans Medium',
    color: colors.themeColor,
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
    alignSelf: 'center',
  },
  textFieldWrapper: {
    marginTop: moderateScale(40),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    borderRadius: 15,
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: moderateScale(8),
  },
  hollowCheckBox: {
    borderRadius: 15,
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: moderateScale(8),
    borderWidth: moderateScale(4),
    borderColor: colors.themeColor,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: verticalScale(7),
  },
  NextText: {
    color: '#000000',
    fontFamily: 'BentonSans Book',
  },
  textFieldStyle: {
    flex: 1,
    height: '100%',
  },
  imageStyle: {
    marginRight: moderateScale(18),
  },
});
