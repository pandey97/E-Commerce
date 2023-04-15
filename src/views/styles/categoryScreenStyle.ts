import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  upperContainer: {
    marginHorizontal: 18,
    marginVertical:5,
    justifyContent:'space-between',
    flex:0.10
  },
  header: { 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: SIZES.radius,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.dark,
  },
  headerLeftItem:{
    flexDirection:'row',
    alignItems:'center'
  },
  headerRightItem: {
    flexDirection:'row',
    alignItems:'center'
  },
  rightHeaderLogo: {
    height: 20,
    width: 20,
    borderRadius: SIZES.radius,
    marginRight: 8,
    tintColor:COLORS.dark
  },
  categoryHeader: {
    flexDirection:'row',
    marginTop:30
  },
  categoryChoiceText: {
    fontSize:13,
    marginRight:20,
    fontWeight:'600'
  },
  headerBar:{
    height:4,
    width:25,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.secondary,
    marginTop:7

  },
  lowerContainer: {
    marginTop:52,
    marginVertical:10,
    marginHorizontal:18,
    flex:0.90
  },
  box: {
    height:screenHeight/5,
    width:"100%",
    borderRadius:SIZES.radius,
    marginVertical:6
  },
  genderText: {
    color:COLORS.primary,
    marginHorizontal:20,
    marginTop:20,
    fontWeight:'900',
    fontSize:17
  },
  noOfProductText: {
    color:COLORS.dark,
    marginHorizontal:20,
    fontSize:12,
    marginVertical:5
  },
  imageStyle: {
    flexDirection:'row',
    marginHorizontal:10
  },
  image: {
    height:18,
    width:18,
    padding:20,
    resizeMode:'contain',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.light,
    margin:10
  }
});

export default styles;
