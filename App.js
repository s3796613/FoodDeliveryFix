import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {screens} from './common/Contant'
import HomeScreen from './screen/home/HomeScreen'
import DetailScreen from './screen/detail/DetailScreen'
import MapScreen from './screen/map/MapScreen'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import CustomBottomTab from './common/Tab'
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
          }
        }
      >
        <Stack.Screen name={screens.home} component={CustomBottomTab}/>
        <Stack.Screen name={screens.detail} component={DetailScreen}/>
        <Stack.Screen name={screens.map} component={MapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App