import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import imagePath from '../constants/imagePath';
import FullProfile from '../Components/Profile/FullProfile';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const swipeHt = screenHeight * 0.6;
const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={imagePath.Men}
        style={{width: screenWidth, height: screenHeight * 0.6}}
      />
      <SwipeUpDown
        // itemMini={<View style={styles.MiniView} />}
        // itemFull={<View style={styles.FullView} />}
        itemMini={<FullProfile horizontal={true} />}
        itemFull={<FullProfile />}
        swipeHeight={swipeHt}
        disablePressToShow={true}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MiniView: {flex: 1, backgroundColor: 'white', borderRadius: 30},
  FullView: {flex: 1, backgroundColor: 'white'},
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   Dimensions,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import {
//   scale,
//   verticalScale,
//   moderateScale,
//   moderateVerticalScale,
// } from 'react-native-size-matters';
// import React from 'react';
// import imagePath from '../constants/imagePath';
// import ChatBox from '../Components/ChatBox';
// import {orderDetails} from '../constants/dataItems';
// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;
// import ButtonComp from '../Components/ButtonComp';

// const width = screenWidth * 0.9;

// const Profile = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={imagePath.Men} style={styles.image} />
//       <View style={styles.whiteBackground}>
//         <View style={styles.lineIndicator} />
//         <TouchableOpacity onPress={() => {}} style={styles.textWrapper}>
//           <Text style={styles.textStyle}>Member Gold</Text>
//         </TouchableOpacity>
//         <View style={styles.nameContainer}>
//           <Text style={styles.personName}>Anam Wusono</Text>
//           <Image source={imagePath.editIcon} />
//         </View>
//         <View style={{width: '90%'}}>
//           <Text style={styles.PersonEmail}>anamwp66@gmail.com</Text>
//         </View>
//         <View style={styles.chats}>
//           <View style={styles.box1}>
//             <Image source={imagePath.VoucherIcon} style={styles.ProfileImage} />
//             <Text style={styles.ProfileName}>{'You Have 3 Voucher'}</Text>
//           </View>
//         </View>
//         <View style={styles.container1}>
//           <FlatList
//             contentContainerStyle={styles.containerStyle}
//             showsHorizontalScrollIndicator={false}
//             horizontal
//             data={orderDetails}
//             keyExtractor={item => item.id}
//             renderItem={({item, index}) => {
//               return (
//                 <View style={styles.chats}>
//                   <Image source={item.image} style={styles.ProfileImage} />
//                   <View>
//                     <Text style={styles.ProfileName}>{item.title}</Text>
//                     <Text style={styles.ProfileSubTitle}>{item.subTitle}</Text>
//                     <Text style={styles.PriceStyle}>{item.price}</Text>
//                   </View>
//                   <ButtonComp
//                     btnText="Buy Again"
//                     btnStyle={styles.ProcessBtnStyle}
//                     textStyles={styles.textStyles}
//                   />
//                 </View>
//               );
//             }}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     justifyContent: 'center',
//     height: moderateScale(400),
//   },
//   whiteBackground: {
//     backgroundColor: 'white',
//     width: '100%',
//     height: '100%',
//     marginTop: -80,
//     borderTopRightRadius: moderateScale(30),
//     borderTopLeftRadius: moderateScale(30),
//     alignItems: 'center',
//   },
//   lineIndicator: {
//     height: moderateScale(5),
//     width: moderateScale(70),
//     backgroundColor: 'rgb(255, 210, 130)',
//     alignSelf: 'center',
//     marginTop: verticalScale(15),
//     borderRadius: moderateScale(5),
//   },
//   textWrapper: {
//     backgroundColor: 'rgb(255,246,236)',
//     paddingHorizontal: moderateScale(20),
//     paddingVertical: verticalScale(12),
//     borderRadius: 15,
//     borderColor: '#F4F4F4',
//     borderWidth: 1.5,
//     shadowColor: '#5A6CEA',
//     shadowOffset: {width: 12, height: 26},
//     shadowOpacity: 0.11,
//     shadowRadius: 50,
//     margin: moderateScale(20),
//     width: moderateScale(155),
//     alignSelf: 'flex-start',
//   },
//   textStyle: {
//     fontSize: scale(16),
//     fontFamily: 'BentonSans Medium',
//     color: '#DA6317',
//   },
//   personName: {
//     fontSize: scale(27),
//     fontFamily: 'BentonSans Bold',
//     color: '#09051C',
//   },
//   nameContainer: {
//     width: '90%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   PersonEmail: {
//     fontSize: scale(16),
//     lineHeight: moderateVerticalScale(21),
//     fontFamily: 'BentonSans Book',
//     color: '#3B3B3B',
//     opacity: 0.3,
//     alignSelf: 'flex-start',
//   },
//   chats: {
//     width: width,
//     height: moderateScale(87),
//     borderRadius: moderateScale(22),
//     backgroundColor: '#FFFFFF',
//     borderColor: '#F4F4F4',
//     borderWidth: 1.5,
//     shadowColor: '#5A6CEA',
//     shadowOffset: {width: 12, height: 26},
//     shadowOpacity: 0.11,
//     shadowRadius: 50,
//     marginBottom: moderateVerticalScale(15),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   box1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: moderateScale(20),
//   },
//   ProfileName: {
//     fontSize: scale(15),
//     lineHeight: moderateVerticalScale(20),
//     fontFamily: 'BentonSans Medium',
//     color: '#09051C',
//   },
//   ProfileSubTitle: {
//     fontSize: scale(14),
//     lineHeight: moderateVerticalScale(14),
//     fontFamily: 'BentonSans Book',
//     color: '#3B3B3B',
//     opacity: 0.3,
//   },
//   PriceStyle: {
//     color: 'rgb(0, 189, 115)',
//     fontSize: scale(19),
//     fontFamily: 'BentonSans Bold',
//     marginTop: verticalScale(8),
//   },
//   ProcessBtnStyle: {
//     width: moderateScale(79),
//     height: moderateScale(29),
//   },
//   textStyles: {
//     fontSize: scale(12),
//   },
//   container1: {
//     width: width,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   containerStyle: {
//     backgroundColor: '#FFFFFF',
//   },
// });
