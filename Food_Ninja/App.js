import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/store';
// import store, {persistor} from './src/Redux/store';

const App = () => {
  useEffect(() => {
    console.log('HereInTHeUseEffect');
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});

export default App;
