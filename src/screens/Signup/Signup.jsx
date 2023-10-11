
import styles from './Signup.style'
import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
    
        triggerSignup({
            email,
            password,
        })
        console.log(result)
        if (result.isSucces){
            dispatch(setUser(result))
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>
                    Login to start
                </Text>
                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputEmail}
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                />

                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text>Sign Up</Text>
                </Pressable>

                <Text>No tienes cuenta? </Text>

                <Pressable style={styles.loginButton}>
                    <Text>
                        Log in
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp