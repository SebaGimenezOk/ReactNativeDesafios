import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from "./StackNavigator";
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import OrdersNavigator from "./OrdersNavigator";


const BottomTab = createBottomTabNavigator()


function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
            <BottomTab.Screen
                name='Shop'
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="shopping-bag"
                            size={24}
                            color={focused ? colors.primary : '#fff'} />
                    )
                }} />
            <BottomTab.Screen
                name='CartNav'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="shopping-cart"
                            size={24}
                            color={focused ? colors.primary : '#fff'} />
                    )
                }} />

<BottomTab.Screen
                name='OrdersNav'
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="file-text"
                            size={24}
                            color={focused ? colors.primary : '#fff'} />
                    )
                }} />
        </BottomTab.Navigator>
    )

}
export default BottomTabNavigator



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tabBar: {
        backgroundColor: colors.tertiary,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,


    }
})