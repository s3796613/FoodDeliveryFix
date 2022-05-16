import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../common/Theme'
import { ICONS } from '../../common/Images'
import { useSelector } from 'react-redux'


const Menu = () => {
    const menuData = useSelector((state) => state.home.menuData)
    renderItem = ({item}) => (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image source={item.photo} style={styles.image}/>
            </View>

            <View style={styles.duration}>
                <Text style={styles.duration_text}>{item.duration}</Text>
            </View>
            <Text style={styles.menu_title}>{item.name}</Text>
            <View style={styles.menu_type}>
                <Image source={ICONS.star} style={styles.menu_type__icon}/>
                <Text style={styles.marginRight8}>{item.star}</Text>
                <Text style={styles.marginRight8}>CategorySelected</Text>
                <Text style={styles.marginRight8}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )

  return (
      <FlatList
          data={menuData}
          renderItem={renderItem}
      />
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding*2,
        elevation: 5
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: SIZES.radius
    },
    duration: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        top: 137,
        padding: SIZES.padding * 2,
        width: SIZES.width * 0.3,
        height: "34%",
        marginLeft: SIZES.padding * 2,
        borderBottomLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        elevation: 2,
        
    },

    duration_text: {
        marginBottom: SIZES.padding,
        marginLeft: SIZES.padding * 2
    },

    menu_title: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: 'black',
        marginTop: 8
    },

    menu_type: {
        flexDirection: 'row'
    },
    menu_type__icon: {
        width: 16,
        height: 16,
        marginRight: 8
    },

    marginRight8: {
        marginRight: 8
    }
})