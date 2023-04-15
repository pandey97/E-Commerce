import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    // flex: 0.52,
    backgroundColor: COLORS.primary,
  },
  upperChildContainer:{
    marginHorizontal:18
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftHeader: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
  },
  leftInputIcon: {
    height:20,
    width:20,
    position:'absolute',
    tintColor:COLORS.dark,
    top:24,
    left:10
  },
  rightInputIcon: {
    height:20,
    width:20,
    tintColor:COLORS.dark
  },
  cameraTouchable: {
    position:'absolute',
    top:24,
    right:10
  },
  input: {
    backgroundColor:COLORS.light,
    borderRadius:SIZES.radius,
    marginTop:12,
    height:45,
    paddingHorizontal:35
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: SIZES.radius,
    marginRight: 8,
  },
  rightHeaderLogo: {
    height: 20,
    width: 20,
    borderRadius: SIZES.radius,
    marginRight: 8,
  },
  homeText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.light,
  },
  barSelector: {
    flexDirection:'row',
  },
  text: {
    color:COLORS.light,
    marginRight:15,
    marginTop:15,
    fontSize:12,
    fontWeight:'600'
  },
  headerBar:{
    height:4,
    width:25,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.secondary,
    marginTop:7

  },
  banner: {
    width:screenWidth - 36,
    height:screenHeight/4.7,
    borderRadius:SIZES.radius
  },
  bannerTopText: {
    position:'absolute',
    color:COLORS.light,
    top:10,
    fontSize:20,
    fontWeight:'bold',
    left:20
  },
  bannerBottomText: {
    position:'absolute',
    color:COLORS.light,
    top:35,
    fontSize:15,
    fontWeight:'400',
    left:20
  },
  dateContainer:{
    height:45,
    width:50,
    borderRadius:SIZES.radius,
    position:'absolute',
    backgroundColor:COLORS.light,
    top:15,
    right:20,
    alignItems:'center',
    justifyContent:'center'
  },
  month: {
    color:COLORS.dark,
    fontWeight:'600'
  },
  middleContainer: {
    flex: 0.68,
    marginHorizontal:18,
    marginTop:-60,
  },
  middleChildContainer: {
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between',
    marginHorizontal:10
  },
  imageLogo:{
    height:45,
    width:45,
    backgroundColor:COLORS.grey20,
    borderRadius:SIZES.radius,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  logoText:{
    alignSelf:'center',
    fontWeight:'600',
    color:COLORS.dark60
  },
  icon: {
    height:25,
    width:25,
  },
  lowerParentContainer:{
    marginBottom:10
  },
  productHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  saleTimeProductText: {
    fontWeight: '900',
    color:COLORS.dark80,
    fontSize:15
  },
  seeMoreText: {
    color:COLORS.grey,
    fontSize:14
  },
  Product: {
    flexDirection:'row'
  },
  flashDealContainer: {
    height:155,
    width:110,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
    marginTop:15,
    padding:10,
    justifyContent:'center'
  },
  flashDealContainer2: {
    height:150,
    width:110,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.light60,
    marginVertical:15,
    marginLeft:10,
    padding:10,
    justifyContent:'center'
  },
  promotionItemContainer:{
    height:155,
    width:110,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary80,
    marginTop:15,
    padding:10,
    justifyContent:'center'
  },
  promotionItemContainer2: {
    height:150,
    width:110,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.light60,
    marginVertical:15,
    marginLeft:10,
    padding:10,
    justifyContent:'center'
  },
  flashDealText: {
    fontWeight:'bold',
    paddingHorizontal:5,
    color:COLORS.light,
    fontSize:16,
    marginBottom:18
  },
  saleTimeText: {
    color:COLORS.light80,
    fontSize:12
  },
  image: {
    height:60,
    width:60,
    alignSelf:'center',
    resizeMode:'contain'
  },
  progressBar:{
    marginTop:5,
    height:15,
    borderRadius:SIZES.radius,
    width:'100%',
    backgroundColor:COLORS.error
  },
  quantityText: {
    fontWeight:'400',
    alignSelf:'center',
    color:COLORS.dark,
    fontSize:12,
    marginTop:5
  },
  priceTextConatiner: {
    flexDirection:'row',
    justifyContent:'center'
  },
  productSoldText:{
    fontWeight:'400',
    alignSelf:'center',
    color:COLORS.dark,
    fontSize:13,
    marginTop:5
  },
  priceText: {
    fontWeight:'bold',
    color:COLORS.error,
    fontSize:18,
    marginTop:5,
    marginRight:10
  },
  productDiscount: {
    fontWeight:'400',
    alignSelf:'center',
    color:COLORS.grey,
    fontSize:13,
    marginTop:5
  },
  likeContainer: {
    height:screenHeight/7,
    width:screenWidth/2 - 22,
    marginVertical:5,
    backgroundColor:COLORS.light,
    borderRadius:SIZES.radius
  },
  smallImageContainer: {
    flex:0.55,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10
  },
  iconStyle: {
    height:40,
    width:40,
    marginVertical:10,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.grey08,
    alignItems:'center',
    justifyContent:'center'
  },
  smallImage: {
    height:30,
    width:30,
    resizeMode:'contain'
  },
  lowerContainer: {
    flex:0.45,
    backgroundColor:COLORS.primary20,
    borderBottomEndRadius:SIZES.radius,
    borderBottomStartRadius:SIZES.radius,
    justifyContent:'center',
    alignItems:'center'
  },
  productDetail: {
    color:COLORS.primary,
    fontWeight:'600'
  },
  productquantity: {
    fontSize:11,
    color:COLORS.dark80
  },
  bottomContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  serviceContainer: {
    flex: 0.72,
    marginHorizontal:20,
  },
  serviceBox: {
    height:screenHeight /6,
    width:'100%',
    backgroundColor:COLORS.light,
    marginTop:10,
    borderRadius:SIZES.radius
  },
  serviceBoxItem: {
    flexDirection:'row',
    justifyContent:'center',
    margin:15,
    flex:1
  },
  headerText: {
    color:COLORS.dark,
    fontSize:16,
    fontWeight:'bold'
  },
  contentItemText: {
    color:COLORS.grey60,
    fontSize:12,
    width:'80%'
  },
  onlyPrice: {
    fontWeight:'600',
    color:COLORS.primary,
    fontSize:13,
  },
  serviceContainerImage:{
    alignSelf:'center'
  },
  contentText: {
    justifyContent:'space-around',
    flex:1
  }
});

export default styles;
