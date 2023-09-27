import { Pressable, Text } from 'react-native'
import { Card } from '../../../../components'
import styles from './CategoryItem.styles'

import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shop/shopSlice'

const CategoryItem = ({ category, navigation }) => {
    const dispatch = useDispatch()

    return (
        <Pressable
            onPress={() => {
                dispatch(setCategorySelected(category))
                navigation.navigate('Products', { category })
            }} style={styles.container}
        >
            <View style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </View>
        </Pressable >
    )
}

export default CategoryItem

