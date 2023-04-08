import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    height: SIZES.height / 16,
    width: SIZES.width / 8,
    marginTop:10
  },
  box: {
    width: SIZES.width - 40,
    height: 475,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 8, // set the elevation here
    margin: 20,
    marginBottom:10,
    padding:20
  },
  boxHeaderText:{
    width: '60%',
    color: COLORS.dark,
    fontFamily: 'Poppins-Bold', fontSize:23, lineHeight: 25,
    fontWeight:'900'
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: COLORS.grey08,
    paddingHorizontal: 43,
    borderRadius: SIZES.radius,
    marginBottom:10,
  },
  boxTextInput: {
    marginVertical:20
  },
  Icon: {
    height:25,
    width:25,
    position:'absolute',
    resizeMode:'contain',
    top:10,
  },
  right: {
    right:10
  },
  left: {
    left: 10
  },
  forgotButton: {
    alignSelf:'center'
  },
  termAndConditionText: {
    color: COLORS.dark80,
    width:'60%',
    fontSize:12,
  },
  bottomText: {
    flexDirection:'row',
    backgroundColor:COLORS.light20,
    width:'89%',
    padding:10,
    borderRadius:SIZES.radius,
    justifyContent:'center'
  },
  dontHaveAccountText:{
    fontWeight:'400',
    fontSize:13,
    color:COLORS.grey,
    marginRight:8
  },
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  newAccountText: {
    fontWeight:'900',
    fontSize:13,
    color:COLORS.secondary
  },
  eye: {
    position:'absolute',
    right:0,
  },
  checkboxLine: {
    flexDirection:'row'
  },
  bottomBar: {
    marginTop:50,
    alignItems:'center'
  },
  socialNetworkImage: {
    flexDirection:'row',
    marginTop:5
  },
  socialNetworkIcon: {
    height:28,
    width:28,
    tintColor:COLORS.dark
  },
  backgroundDesign: {
    margin:6,
    padding:11,
    backgroundColor: COLORS.grey20,
    borderRadius:SIZES.radius
  }
});

export default styles;
