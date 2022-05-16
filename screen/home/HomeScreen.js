import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../../common/Theme'
import AppBar from '../components/AppBar'
import Category from '../components/Category'
import Menu from '../components/Menu'
import { menuData } from '../../common/Contant'

const HomeScreen = () => {
  // const [categorySelected, setCategorySelected] = useState(1)
  // let listMenu = menuData.filter(value => value.categoryId == categorySelected)

  // onSelectCategory = (id) => {
  //   setCategorySelected(id)
  // }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Category />
      <Menu />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1
  }
})

export default HomeScreen