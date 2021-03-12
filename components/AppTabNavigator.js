import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AntiPollutionMethodsScreen from '../screens/AntiPollutionMethodsScreen';
import PollutedAreasScreen from '../screens/PollutedAreas';


export const AppTabNavigator = createBottomTabNavigator({
  AntiPollutionMethods : {
    screen : AntiPollutionMethodsScreen,
    navigationOptions :{
     
      tabBarLabel : "Preventive Measures",
    }
  },
  PollutedAreas: {
    screen : PollutedAreasScreen,
    navigationOptions :{
  
      tabBarLabel : "AQI feedback",
    }
  }
});