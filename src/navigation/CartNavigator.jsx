
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Cart } from '../screens'


const Stack = createNativeStackNavigator()

function CartNavigator() {
    return (

        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={() => ({ headerShown: false, })}
        >
            <Stack.Screen name='Home' component={Cart} />
        </ Stack.Navigator>

    )
}
export default CartNavigator