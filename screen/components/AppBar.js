import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import {ICONS} from '../../common/Images'
import {COLORS, SIZES} from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../common/Contant'

const AppBar = () => {
  const navigator = useNavigation();  

  const navigationToMap = () => {
    navigator.push(screens.map)
  }  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => navigationToMap()}>
          <Image source={ICONS.nearby} style={styles.icon}/>
      </TouchableOpacity>

      <View style={styles.app_title}>
          <Text>745 Lincoln PI</Text>
      </View>
      <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image source={ICONS.shopping_basket} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: SIZES.padding * 2
    },
    
    icon: {
        width: 24,
        height: 24
    },

    app_title: {
        backgroundColor: COLORS.lightGray2,
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
        borderRadius: SIZES.radius,
        height: 50
    }
})