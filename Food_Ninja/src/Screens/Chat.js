import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import imagePath from '../constants/imagePath';
import {Chats} from '../constants/dataItems';
import navigationString from '../constants/navigationString';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const Chat = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Background />
      <View style={styles.content}>
        <View style={styles.container1}>
          <BackBtn
            source={imagePath.IconBack}
            buttonIconStyle={styles.backBtnStyle}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.container1}>
          <Text style={styles.title}>Chat</Text>
        </View>
        <View style={styles.container1}>
          <FlatList
            contentContainerStyle={styles.containerStyle}
            showsHorizontalScrollIndicator={false}
            data={Chats}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.chats}
                  onPress={() =>
                    navigation.navigate(navigationString.INDIVIDUAL_CHAT, {
                      image: item.image,
                      name: item.title,
                    })
                  }>
                  <Image source={item.image} style={styles.ProfileImage} />
                  <View>
                    <Text style={styles.ProfileName}>{item.title}</Text>
                    <Text style={styles.ProfileSubTitle}>{item.subTitle}</Text>
                  </View>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Chat;

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
    marginTop: verticalScale(50),
  },
  container1: {
    width: width,
    marginBottom: verticalScale(16),
  },
  backBtnStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BentonSans Bold',
  },
  chats: {
    width: width,
    height: moderateScale(87),
    borderRadius: moderateScale(22),
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
    borderWidth: 1.5,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.11,
    shadowRadius: 50,
    marginBottom: moderateVerticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ProfileImage: {},
  ProfileName: {
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
  },
  ProfileSubTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
  chatTime: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
});
