import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import AntiPollutionMethodsScreen from '../screens/AntiPollutionMethodsScreen';
import PollutedAreasScreen from '../screens/PollutedAreas';
import { Icon } from "react-native-elements";
import  SettingScreen  from '../screens/SettingScreen';
import  WeatherScreen  from '../screens/WeatherScreen'
import  SearchHistoryScreen  from '../screens/SearchHistoryScreen'
  export const AppDrawerNavigator = createDrawerNavigator({
        CleanAndGreen : {
            screen : AppTabNavigator,
            navigationOptions:{
                drawerIcon : <Icon name="home" type ="fontawesome5" />,
                drawerLabel : 'Air Pollution'
              }
            },
            Settings : {
                screen : SettingScreen,   
                navigationOptions:{
                  drawerIcon : <Icon name="settings" type ="fontawesome5" />,
                  drawerLabel : "Settings"
                }
                },
              Weather : {
                    screen : WeatherScreen,   
                    navigationOptions:{
                        drawerIcon : <Icon name="cloud" type ="fontawesome5" />,
                      drawerLabel : "Weather"
                    }
                    },
                    SearchHistory : {
                        screen : SearchHistoryScreen,   
                        navigationOptions:{
                          drawerIcon : <Icon name="search" type ="fontawesome5" />,
                          drawerLabel : "Search History"
                        }
                        },
          },
          {
            contentComponent:CustomSideBarMenu
          },
          {
            initialRouteName : 'CleanAndGreen'
          })