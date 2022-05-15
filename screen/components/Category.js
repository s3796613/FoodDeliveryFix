import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, STYLES } from '../../common/Theme'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { categoryData } from '../../common/Contant'



export default Category = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{`Main\nCategory`}</Text>
      <CategoryList onSelectCategory={props.onSelectCategory} />
    </View>
  )
}

export const CategoryList = (props) => {

    renderItem = ({item}) => (
        <TouchableOpacity 
        
            style={styles.category_list}
            onPress={() => props.onSelectCategory(item.id)}
        >
            <View style={styles.category_list__circle}>
                <Image source={item.icon} style={styles.icon}/>
            </View>
            
            <Text style={styles.category_list__text}>{item.name}</Text>
            
        </TouchableOpacity>
    )

    return(
        <FlatList
            data={categoryData}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding * 2
    },

    category_title: {
        fontFamily: 'Roboto-Black',
        fontSize: 30,
        lineHeight: 36,
        color: COLORS.black
    },

    icon: {
        width: 24,
        height: 24
    },

    category_list: {
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        margin: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.secondary,
        ...STYLES.shadow,
        elevation: 5
    },

    category_list__selected: {
        backgroundColor: COLORS.primary
    },

    category_list__circle: {
        width: 50,
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.padding
    },

    category_list__text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        lineHeight: 22
    },
    category_list__text__selected: {
        color: 'white'
    }

})