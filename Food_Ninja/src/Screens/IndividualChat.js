import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Background from '../Components/Background';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import BackBtn from '../Components/BackBtn';
import imagePath from '../constants/imagePath';
import navigationString from '../constants/navigationString';
import TextFieldWithIcon from '../Components/TextFieldWithIcon';
import BackgroundImage from '../Components/BackgroundImage';
import ChatBox from '../Components/ChatBox';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const screenWidth = Dimensions.get('window').width;

const width = screenWidth * 0.9;

const IndividualChat = ({navigation}) => {
  const [msg, setMsg] = useState('');
  const [myArray, setMyArray] = useState([]);
  const [send, setSend] = useState(false);
  const route = useRoute();
  const {image, name} = route.params;

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        source={imagePath.backgroundImg}>
        <View style={styles.content}>
          <View style={styles.container1}>
            <BackBtn
              source={imagePath.IconBack}
              buttonIconStyle={styles.backBtnStyle}
              onPress={() => navigation.goBack()}
            />

            <Text style={styles.title}>Chat</Text>

            <View style={styles.chats}>
              <Image source={image} style={styles.ProfileImage} />
              <View>
                <Text style={styles.ProfileName}>{name}</Text>
                <View style={styles.onlineStatus}>
                  <Image
                    source={imagePath.onlineIndicator}
                    style={styles.onlineIndicatorStyle}
                  />
                  <Text style={styles.statusTitle}>online</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationString.CALL_MODAL, {
                    image: image,
                    PersonName: name,
                  })
                }>
                <Image
                  source={imagePath.CallLogo}
                  style={styles.CallLogoStyle}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{flex: 1}}>
              <View>
                {/* <View style={styles.container2}>
            <ChatBox
              text={'Just to order'}
              textWrapperStyle={styles.textWrapperStyle1}
            />
          </View>
          <View style={styles.container3}>
            <ChatBox
              text={'Okay, for what level of spiciness?'}
              textWrapperStyle={styles.textWrapperStyle2}
            />
          </View>
          <View style={styles.container2}>
            <ChatBox
              text={'Okay, wait a minute 👍'}
              textWrapperStyle={styles.textWrapperStyle1}
            />
          </View>
          <View style={styles.container3}>
            <ChatBox
              text={`Okay I'm waiting  👍`}
              textWrapperStyle={styles.textWrapperStyle2}
            />
          </View> */}

                {send &&
                  myArray.map((item, index) => {
                    return (
                      <View style={styles.container3} key={index}>
                        <ChatBox
                          text={`${item}`}
                          textWrapperStyle={styles.textWrapperStyle2}
                        />
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextFieldWithIcon
              fieldStyle={styles.textFieldWrapper}
              placeholder={'Type here...'}
              imageStyle={styles.sendIconStyle}
              source={imagePath.Vector}
              textFieldStyle={styles.textFieldStyle}
              onChangeText={text => setMsg(text)}
              value={msg}
              onSubmitEditing={() => {
                setSend(true);
                setMyArray(oldArray => [...oldArray, msg]);
                setMsg('');
              }}
              onIconPress={() => {
                setSend(true);
                setMyArray(oldArray => [...oldArray, msg]);
                setMsg('');
              }}
              returnKeyType="done"
            />
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IndividualChat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    width: width,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // zIndex: 1,
    // alignItems: 'center',
    marginTop: verticalScale(50),
    justifyContent: 'space-between',
    flex: 1,
  },
  container1: {
    flex: 1,
    // width: width,
    marginBottom: verticalScale(16),
  },
  container2: {
    // width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: verticalScale(20),
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
    marginVertical: moderateVerticalScale(20),
  },
  chats: {
    // width: width,
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
    justifyContent: 'space-around',
  },
  ProfileImage: {},
  ProfileName: {
    fontSize: scale(15),
    lineHeight: moderateVerticalScale(20),
    fontFamily: 'BentonSans Medium',
    color: '#09051C',
  },
  statusTitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(14),
    fontFamily: 'BentonSans Book',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
  },
  CallLogoStyle: {
    tintColor: 'rgb(0, 189, 115)',
  },
  textFieldWrapper: {
    width: width,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginBottom: verticalScale(50),
  },
  sendIconStyle: {
    marginRight: moderateScale(-30),
  },
  textWrapperStyle1: {
    backgroundColor: 'rgb(245, 245, 245)',
  },
  textWrapperStyle2: {
    backgroundColor: 'rgb(0, 189, 115)',
  },
  container3: {
    // width: width,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineIndicatorStyle: {
    marginRight: moderateScale(4),
  },
  textFieldStyle: {
    width: '80%',
    height: '90%',
    marginLeft: moderateScale(10),
  },
});
