import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
// import HomeStack from './HomeStack';
const Routes = () => {
  return (
    <NavigationContainer>
      {MainNavigator()}
      {/* {HomeStack()} */}
    </NavigationContainer>
  );
};

export default Routes;
