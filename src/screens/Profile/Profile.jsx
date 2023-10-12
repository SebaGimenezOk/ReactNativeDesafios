import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.style'


const Profile = () => {
    const image = useSelector(state => state.auth.imageCamera)

    const dispatch = useDispatch()

 
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.4,
            })
            if (!result.canceled) {
                console.log(result.assets)
                dispatch(
                    setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
                )
            }
        }
    }

    const confirmImage = () => {
        triggerSaveProfileImage({ image, localId })
        console.log(result)
    }

    return (
        <View style={styles.container}>
            {image ? (
                <Image
                    source={{
                        uri: image,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={{
                        uri: 'ttps://i.dummyjson.com/data/products/52/1.png',
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <Pressable style={styles.cameraButton} onPress={pickImage}>
                <Text>TOMAR FOTO</Text>
            </Pressable>
            <Pressable style={styles.cameraButton} onPress={confirmImage}>
                <Text>CONFIRMAR </Text>
            </Pressable>
        </View>
    )
}

export default Profile