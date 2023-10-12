import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { } from '../screens'


const ProfileStack = createNativeStackNavigator()

function ProfileStackNavigator() {
    return (

        <ProfileStack.Navigator
            initialRouteName='Profile'
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <ProfileStack.Screen name='Profile' component={Profile} />
        </ ProfileStack.Navigator>

    )
}
export default ProfileStackNavigator