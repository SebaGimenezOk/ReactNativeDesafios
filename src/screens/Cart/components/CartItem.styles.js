import { StyleSheet } from "react-native";
import colors from '../../../constants/colors'

export default styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor:'red',
    },
    name: {
        fontSize: 19,

    },
    details:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
    },
} 
)