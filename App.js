import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {screens} from './common/Contant'
import DetailScreen from './screen/detail/DetailScreen'
import MapScreen from './screen/map/MapScreen'
import CustomBottomTab from './common/Tab'
import { Provider } from 'react-redux'
import store from './store'
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App