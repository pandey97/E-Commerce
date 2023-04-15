import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer:{
    flex:0.25,
    backgroundColor:COLORS.primary
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 18,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText:{
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.light,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: SIZES.radius,
    marginRight: 8,
  },
  rightHeader: {
    flexDirection: 'row',
  },
  rightHeaderLogo: {
    height: 20,
    width: 20,
    borderRadius: SIZES.radius,
    marginRight: 8,
    tintColor:COLORS.light
  },
  lowerContainer: {
    flex: 0.75,
    marginHorizontal: 18,
    // backgroundColor: COLORS.light08,
    marginTop: -120,

  },
  profileContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  leftProfile:{
    flexDirection:'row',
    alignItems:'center'
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userProfileText: {
    fontSize:12,
    fontWeight:'600',
    color:COLORS.light
  },
  followerText: {
    fontSize:12,
    fontWeight:'400',
    color:COLORS.light60
  },
  personalInfoText: {
    fontSize:12,
    fontWeight:'600',
    color:COLORS.secondary
  },
  sellerAccountButton: {
    padding:8,
    backgroundColor:COLORS.secondary,
    borderRadius: SIZES.radius
  },
  buttonText: {
    fontSize:13,
    fontWeight:'bold'
  },
  rewardContainer: {
    width:'100%',
    backgroundColor:COLORS.light,
    borderRadius:SIZES.radius,
    marginVertical:25,
    elevation:4,
    shadowColor:'grey',
    shadowOffset: { width: 0, height: 2 }, // offset
    shadowOpacity: 0.5, // opacity
    shadowRadius: 3,
  },
  rewardChildContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  LeftLogoContainer: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary08,
    padding:6,
    marginRight:10
  },
  rightLogoContainer: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.success08,
    padding:6,
    marginRight:10
  },
  noOfCoinText: {
    fontWeight:'900',
    color:COLORS.primary
  },
  coinText: {
    color: COLORS.grey
  },
  rewardLogo: {
    height: 25,
    width: 25,
    borderRadius: SIZES.radius,
    tintColor: COLORS.primary
  },
  goldLogo: {
    height: 25,
    width: 25,
    borderRadius: SIZES.radius,
    tintColor: COLORS.success
  },
  leftrewardContainer: {
    flexDirection:'row',
    paddingVertical:22,
    paddingHorizontal:35,
  },
  line: {
    width: 1,
    backgroundColor: COLORS.grey20,
    marginVertical: 10,
    justifyContent:'center',
    
  },
  rightrewardContainer: {
    flexDirection:'row',
    paddingVertical:22,
    paddingHorizontal:35,
  },
  box: {
    paddingHorizontal:10,
    paddingVertical:12,
    backgroundColor:COLORS.light80,
    borderRadius:SIZES.radius,
    marginBottom: 20
  },
  profileDetailContainer: {
    flexDirection:'row',
    marginVertical:10,
    alignItems:'center'
  },
  lowerProfileDetailContainer: {
    flexDirection:'row',
    marginVertical:10,
    alignItems:'center',
    justifyContent:'space-between'
  },
  boxLogo: {
    height: 20,
    width: 20,
    marginRight: 12,
    tintColor:COLORS.dark
  },
  boxText: {
    fontWeight:'600',
    fontSize:13,
    color:COLORS.dark
  }
});

export default styles;
