import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'


const Card = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        shadowColor:'black',
        shadowOffset:{height:5, widht:3},
        elevation:10,
        shadowOpacity:1,
        shadowRadius:1,
    }
})