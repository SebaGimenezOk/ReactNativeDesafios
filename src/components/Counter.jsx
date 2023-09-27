import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'



const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [inputToAdd, setInputToAdd] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable style={styles.counterButtons} onPress={() => dispatch(decrement())} >
                    <Text style={styles.signs}>-</Text>
                </Pressable>
                <Text style={styles.signs}>{counter}</Text>
                <Pressable style={styles.counterButtons} onPress={() => dispatch(decrement())} >
                    <Text style={styles.signs}>+</Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholder="cantidad a sumar"
                    value={inputToAdd}
                    onChangeText={value => setInputToAdd(Number(value))}
                />
                <Pressable onPress={() => dispatch(incrementByAmount(inputToAdd))}>
                    <Text>add</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Counter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    counterContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-between',
        height: 50,
    },
    counterButtons: {
        backgroundColor: 'blue',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signs: {
        fontSize: 35,
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
    },
})