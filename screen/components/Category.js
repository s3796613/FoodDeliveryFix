import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { COLORS, SIZES, STYLES } from '../../common/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, onSelectedCategory } from '../home/HomeSlice'



export default Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{`Main\nCategory`}</Text>
      <CategoryList />
    </View>
  )
}

export const CategoryList = () => {
    const categoriesData = useSelector((state) => state.home.categoryData)
    const currentCategory = useSelector((state) => state.home.currentCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    },[categoriesData])

    renderItem = ({item}) => (
        <TouchableOpacity 
        
            style={[styles.category_list, currentCategory == item.id ? styles.category_list__selected : ""]}
            onPress={() => dispatch(onSelectedCategory(item.id))}
        >
            <View style={[styles.category_list__circle, currentCategory == item.id ? styles.category_list__circle__selected : ""]}>
                <Image source={item.icon} style={styles.icon}/>
            </View>
            
            <Text style={[styles.category_list__text, currentCategory == item.id ? styles.category_list__text__selected : "" ]}>{item.name}</Text>
            
        </TouchableOpacity>
    )

    return(
        <FlatList
            data={categoriesData}
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
        backgroundColor: COLORS.white,
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
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.padding
    },
    category_list__circle__selected: {
        backgroundColor: COLORS.white
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