import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Chat from '../screens/ChatScreen';
import PlantATree from '../screens/PlantATree';

import MyForestScreen from '../screens/MyForestScreen';
import SMS from '../screens/ChatScreen copy';


export const AppTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Community: { screen: Chat },
    PlantATree: { screen: PlantATree },
    Foundation: { screen: SMS },
    MyForest: { screen: MyForestScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/home-icon.png')}
              style={{ width: 20, height: 20, backgroundColor:'black' }}
            />
          );
        } else if (routeName === 'Community') {
          return (
            <Image
              source={require('../assets/chat-icon.png')}
              style={{ width: 20, height: 20, backgroundColor:'black' }}
            />
          );
        } else if (routeName === 'PlantATree') {
          return (
            <Image
              source={require('../assets/plant-icon.png')}
              style={{ width: 20, height: 20, backgroundColor:'black' }}
            />
          );
        } else if (routeName === 'MyForest') {
          return (
            <Image
              source={require('../assets/forest.png')}
              style={{ width: 20, height: 20, backgroundColor:'black' }}
            />
          );
          }else if (routeName === 'Foundation') {
            return (
              <Image
                source={require('../assets/Foundation.png')}
                style={{ width: 20, height: 20, backgroundColor:'black' }}
              />
            );
        }
      },
    }),
  }
);
