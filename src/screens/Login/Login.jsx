import styles from './Login.style'
import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>
                    Login to start
                </Text>
                <TextInput style={styles.inputEmail} />
                <TextInput style={styles.inputEmail} />
                <Pressable style={styles.loginButton}> 
                    <Text>Log in</Text>
                </Pressable>
                <Text>No tienes cuenta? </Text>
                <Pressable style={styles.loginButton}>
                    <Text>
                        Sign up
                    </Text>
                </Pressable>
            </View>
        </View>
    )
} 

export default Login