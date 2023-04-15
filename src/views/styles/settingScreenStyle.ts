import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        // alignItems:'center',
        backgroundColor:COLORS.grey20
    },
    headerContainer: {
        alignSelf:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        marginHorizontal:18
    },
    logo: {
        height:25,
        width:25,
        marginRight:10
    },
    headerText: {
        fontSize:18,
        fontWeight:'900',
        color:COLORS.dark
    },
    imageContainer: {
        alignItems:'center'
    },
    settingImageContainer: {
        height:124,
        width:124,
        backgroundColor:COLORS.primary08,
        borderRadius:62,
        marginVertical:25,
        marginHorizontal:18,
        alignItems:'center',
        justifyContent:'center'
    },
    settingImage: {
        height:80,
        width:80,
        alignSelf:'center',
        justifyContent:'center',
        tintColor:COLORS.primary,
    },
    box: {
        marginHorizontal:18,
        backgroundColor:COLORS.light20,
        marginVertical:10,
        borderRadius:SIZES.radius,
        padding:15
    },
    boxContent: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
        alignItems:'center'
    },
    text: {
        fontWeight:'800',
        color:COLORS.dark80
    }
});

export default styles;