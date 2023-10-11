import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'



export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    loginContainer: {

        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    inputEmail: {
        backgroundColor: colors.secondary,
        width: '95%',
        height: 30,
        marginVertical: 15,
        borderRadius:8,
        
    },
    loginButton: {
        backgroundColor: colors.secondary,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        borderRadius:10,
        width:'70%',
        marginTop:12,
    }
})