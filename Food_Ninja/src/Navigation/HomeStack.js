import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {TabArr} from '../constants/dataItems';
import colors from '../styles/colors';
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {totalQuantity} = useSelector(state => state.dish);

  const {item, onPress, accessibilityState, count} = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        {count > 0 && (
          <View style={styles.tabBarBadge}>
            <Text style={styles.count}>{totalQuantity}</Text>
          </View>
        )}
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.bgColor, borderRadius: moderateScale(16)},
          ]}
        />
        <View style={[styles.btn, {backgroundColor: focused && item.bgColor}]}>
          <Image
            source={item.icon}
            style={[
              styles.iconImageStyle,
              {tintColor: focused ? colors.iconColor : null},
            ]}
          />
          <View>
            {focused && <Text style={styles.labelStyle}>{item.label}</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flex: 1,
          // // alignSelf: 'center',
          // alignItems: 'center',
          // justifyContent: 'center',
          // // alignContent: 'center',
          height: moderateScale(74),
          position: 'absolute',
          margin: moderateVerticalScale(16),
          borderRadius: moderateScale(22),
          // paddingVertical: verticalScale(10),
          paddingTop: verticalScale(25),
          backgroundColor: '#FFFFFF',
          borderColor: '#F4F4F4',
          borderWidth: 1.5,
          shadowColor: '#5A6CEA',
          shadowOffset: {width: 12, height: 26},
          shadowOpacity: 0.11,
          shadowRadius: 50,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton {...props} item={item} count={item.count} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: moderateVerticalScale(8),
    borderRadius: moderateScale(16),
  },
  labelStyle: {
    paddingHorizontal: moderateScale(8),
  },
  iconImageStyle: {
    tintColor: colors.iconColor,
  },
  tabBarBadge: {
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(11),
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
  },
  count: {
    color: 'white',
    fontFamily: 'BentonSans Bold',
    alignSelf: 'center',
    padding: moderateVerticalScale(4),
  },
});
