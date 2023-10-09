import { FlatList, SafeAreaView, StatusBar, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import styles from './Home.styles'
import { useGetCategoriesQuery } from '../../services/shopApi'

const Home = ({ navigation }) => {
    const { data, isLoading } = useGetCategoriesQuery()
    return (

        <SafeAreaView style={styles.container}>
            <Header title={'CATEGORIAS'} />
            <View style={styles.listContainer}>
                {!isLoading && (
                    <FlatList
                        data={data}
                        keyExtractor={category => category.title}
                        renderItem={({ item }) => (
                            <CategoryItem category={item.title} navigation={navigation} />
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home
