import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import {
  IndividualChat,
  OnboardingScreen,
  PaymentMethods,
  SetLocation,
  SetPassword,
  SignInScreen,
  SignUpProcess,
  SignUpScreen,
  SignupSuccess,
  UploadPhoto,
  UploadPreview,
  VerificationCode,
  ViaMethod,
} from '../Screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationString.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={navigationString.SIGNUP_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={navigationString.SIGNIN_SCREEN}
        component={SignInScreen}
      />
      <Stack.Screen
        name={navigationString.SIGNUP_PROCESS}
        component={SignUpProcess}
      />
      <Stack.Screen
        name={navigationString.PAYMENT_METHODS}
        component={PaymentMethods}
      />
      <Stack.Screen
        name={navigationString.UPLOAD_PHOTO}
        component={UploadPhoto}
      />
      <Stack.Screen
        name={navigationString.UPLOAD_PREVIEW}
        component={UploadPreview}
      />
      <Stack.Screen
        name={navigationString.SET_LOCATION}
        component={SetLocation}
      />
      <Stack.Screen
        name={navigationString.SIGNUP_SUCCESS}
        component={SignupSuccess}
      />
      <Stack.Screen
        name={navigationString.VERIFICATION_CODE}
        component={VerificationCode}
      />
      <Stack.Screen name={navigationString.VIA_METHOD} component={ViaMethod} />
      <Stack.Screen
        name={navigationString.SET_PASSWORD}
        component={SetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
