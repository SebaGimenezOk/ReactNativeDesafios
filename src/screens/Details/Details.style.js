import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        margin:20,
        marginBottom:20,

    },
    imageContainer: {
        height: '50%',
        width: '100%',
    },
    image: {
        height: '50%',
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
    },
})