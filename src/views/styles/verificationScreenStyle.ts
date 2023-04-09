import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        justifyContent:'space-between',
        backgroundColor:COLORS.light
      },
      upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:20
      },
      leftArrow: {
        height: 25,
        width: 25,
        marginRight: 10,
      },
      headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.dark,
      },
      middleContainer: {
        marginTop: 20,
        marginHorizontal: 20
      },
      continuePhonenoText: {
        width: '55%',
        color: COLORS.dark,
        fontFamily: 'Poppins-Bold',
        fontSize: 23,
        lineHeight: 25,
        fontWeight: '900',
      },
      input: {
        height: 42,
        width: '100%',
        backgroundColor: COLORS.light,
        paddingHorizontal: 43,
        borderRadius: SIZES.radius,
        marginBottom:10
      },
      Icon: {
        height:25,
        width:25,
        position:'absolute',
        resizeMode:'contain',
        top:10,
      },
      left: {
        left: 10
      },
      textInputContainer: {
        marginTop: 50
      },
      otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      otpInput: {
        width: 50,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 18,
        textAlign: 'center',
        marginHorizontal: 10,
        fontSize: 24,
        backgroundColor: COLORS.light80
      },
      resendText: {
        color: COLORS.secondary,
        textAlign:'center',
        marginTop:15,
        fontWeight:'900'
      }
});

export default styles;