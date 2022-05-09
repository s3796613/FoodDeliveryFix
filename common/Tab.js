import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from './Contant';
import HomeScreen from '../screen/home/HomeScreen';
import SearchScreen from '../screen/search/SearchScreen'
import UserScreen from '../screen/user/UserScreen';
import LikeScreen from '../screen/like/LikeScreen';
import { ICONS } from './Images';
import { COLORS } from './Theme';


const Tab = createBottomTabNavigator();

const CustomBottomTab = () => {
  return (
      <Tab.Navigator
        screenOptions={
            {
                headerShown: false,
                tabBarShowLabel: false
            }
        }
      >
          <Tab.Screen  name={screens.tab_home} component={HomeScreen}
              options={
                  {
                      tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            source={ICONS.cutlery}
                        />
                      )
                  }
              }
          />
          <Tab.Screen  name={screens.tab_search} component={SearchScreen}
                options={
                    {
                      tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            source={ICONS.search}
                        />
                      )
                    }
                }
           />
          <Tab.Screen  name={screens.tab_like} component={LikeScreen}
              options={
                    {
                      tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            source={ICONS.like}
                        />
                      )
                    }
                }
          />
          <Tab.Screen  name={screens.tab_user} component={UserScreen}
              options={
                    {
                      tabBarIcon: ({focused}) => (
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            source={ICONS.user}
                        />
                      )
                    }
                }
          />
      </Tab.Navigator>
  )
}

export default CustomBottomTab