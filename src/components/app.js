import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


import StationScreen from '../screens/station-screen';
import VideoScreen from '../screens/video-screen';
import VideoDetailsScreen from '../screens/video-details-screen';

const App = () => {
  return (
    <StationScreen />
  );
}

// const StationStack = createStackNavigator(
//     {
//       //Defination of Navigaton from home screen
//       Station: { screen: StationScreen },
//       //Details: { screen: DetailsScreen },
//     },
//     {
//       defaultNavigationOptions: {
//           headerShown: false,
//         // //Header customization of the perticular Screen
//         // headerStyle: {
//         //   backgroundColor: '#42f44b',
//         // },
//         // headerTintColor: '#FFFFFF',
//         // title: 'Home',
//         // //Header title
//       },
//       navigationOptions: {
//         tabBarLabel: "En Vivo"
//       }
//     }
//   );
//   const VideoStack = createStackNavigator(
//     {
//       //Defination of Navigaton from setting screen
//       Video: { screen: VideoScreen },
//       Details: { screen: VideoDetailsScreen },
//       //Profile: { screen: ProfileScreen },
//     },
//     {
//       defaultNavigationOptions: {
//         //Header customization of the perticular Screen
//         animationEnabled: false,
//         headerStyle: {
//           backgroundColor: '#F44336',
//         },
//         headerTintColor: '#FFFFFF',
//         title: 'Videos',
//         //Header title
//       },
//       navigationOptions: {
//         tabBarLabel: "Videos"
//       }
//     }
//   );
//   const App = createBottomTabNavigator(
//     {
//       Station: { screen: StationStack },
//       Video: { screen: VideoStack },
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           const { routeName } = navigation.state;
//           let IconComponent = MaterialIcons;
//           let iconName;
//           if (routeName === 'Station') {
//             iconName = `settings-input-antenna`;
//           } else if (routeName === 'Video') {
//             iconName = `ondemand-video`;
//           }
//           return <IconComponent name={iconName} size={24} color={tintColor} />;
//         },
//       }),
//       tabBarOptions: {
//         activeTintColor: '#F44336',
//         inactiveTintColor: 'gray',
//       },
//     }
//   );
  //export default createAppContainer(App);
  export default App;