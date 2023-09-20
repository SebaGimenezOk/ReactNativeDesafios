import { View, FlatList } from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.styles'

const Home = ({setCategorySelected}) => {
    return (
        <View style={styles.container}>
            <Header title={'CATEGORIES'} />
            <FlatList
                data={dataCategories}
                keyExtractor={category => category}
                renderItem={
                    ({ item }) => (
                        <CategoryItem category={item} setCategorySelected={setCategorySelected} />
                    )
                } />
        </View>

    )
}

export default Home

