import { Login, SignUp } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="SignUp">
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator