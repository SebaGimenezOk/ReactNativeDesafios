import { View, FlatList } from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.styles'
import Counter from '../../components/Counter'

const Home = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Counter />
            <Header title={'CATEGORIES'} />
            <FlatList
                data={dataCategories}
                keyExtractor={category => category.title}
                renderItem={
                    ({ item }) => (
                        <CategoryItem category={item.title} navigation={navigation} />
                    )
                } />
        </View>

    )
}

export default Home

