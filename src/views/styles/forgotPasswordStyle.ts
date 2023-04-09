import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent:'space-between'
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  continuePhonenoText: {
    width: '60%',
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
  }
});

export default styles;
