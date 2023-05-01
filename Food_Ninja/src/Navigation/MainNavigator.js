import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {
  CallModal,
  DetailAboutMenu,
  DetailAboutRestaurant,
  EditLocation,
  EditPayment,
  FinishOrder,
  IndividualChat,
  NotificationScreen,
  PaymentScreen,
  RateScreen,
  SetLocationMap,
  TrackOrder,
  VoucherPromo,
  YourOrder,
} from '../Screens';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {isLoggedin} = useSelector(state => state.auth);
  console.log(isLoggedin, '------------->');
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={navigationString.AUTH_STACK}>
      {!isLoggedin ? (
        <Stack.Screen
          name={navigationString.AUTH_STACK}
          component={AuthStack}
        />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name={navigationString.HOME_STACK}
            component={HomeStack}
          />
          <Stack.Screen
            name={navigationString.CALL_MODAL}
            component={CallModal}
          />

          <Stack.Screen
            name={navigationString.INDIVIDUAL_CHAT}
            component={IndividualChat}
          />
          <Stack.Screen
            name={navigationString.FINISH_ORDER}
            component={FinishOrder}
          />
          <Stack.Screen
            name={navigationString.RATE_SCREEN}
            component={RateScreen}
          />
          <Stack.Screen
            name={navigationString.VOUCHER_PROMO}
            component={VoucherPromo}
          />
          <Stack.Screen
            name={navigationString.NOTIFICATION_SCREEN}
            component={NotificationScreen}
          />
          <Stack.Screen
            name={navigationString.PAYMENT_SCREEN}
            component={PaymentScreen}
          />
          <Stack.Screen
            name={navigationString.EDIT_PAYMENT}
            component={EditPayment}
          />
          <Stack.Screen
            name={navigationString.EDIT_LOCATION}
            component={EditLocation}
          />
          <Stack.Screen
            name={navigationString.YOUR_ORDER}
            component={YourOrder}
          />
          <Stack.Screen
            name={navigationString.SET_LOCATION_MAP}
            component={SetLocationMap}
          />
          <Stack.Screen
            name={navigationString.TRACK_ORDER}
            component={TrackOrder}
          />
          <Stack.Screen
            name={navigationString.DETAIL_ABOUT_RESTAURANT}
            component={DetailAboutRestaurant}
          />
          <Stack.Screen
            name={navigationString.DETAIL_ABOUT_MENU}
            component={DetailAboutMenu}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
