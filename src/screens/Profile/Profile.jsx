import { View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './Profile.style'
import { useState } from 'react'

const Profile = () => {

    const [image, setImage] = useState(null)


    return (
        <View style={styles.container}>
            {image ? null : (
                <Image source={{ uri: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg' }}
                    style={styles.image}
                    resizeMode='cover' />
            )}
            <Pressable style={styles.cameraButton}>
                <Text>TOMAR FOTO PERFIL, PORFAVOR</Text>
            </Pressable>

        </View>
    )
}

export default Profile