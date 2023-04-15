import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
  },
  logo: {
    height: 25,
    width: 25,
    marginRight: 10,
    tintColor: COLORS.dark,
  },
  textinputContainer: {
    marginHorizontal: 18,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.dark,
  },
  input: {
    backgroundColor: COLORS.light40,
    borderRadius: SIZES.radius,
    marginTop: 12,
    height: 45,
    paddingHorizontal: 35,
  },
  leftInputIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    tintColor: COLORS.grey,
    top: 24,
    left: 10,
  },
  rightInputIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.grey,
  },
  cameraTouchable: {
    position: 'absolute',
    top: 24,
    right: 10,
  },
  lowertContainer: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  poster: {
    height: 220,
    width: '100%',
    borderRadius: SIZES.radius,
    resizeMode: 'stretch',
  },
  featuredText: {
    fontSize: 11,
    fontWeight: '400',
    position: 'absolute',
    color: COLORS.light,
    top: 15,
    left: 20,
  },
  uptoText: {
    width: 150,
    fontSize: 18,
    fontWeight: '900',
    position: 'absolute',
    color: COLORS.light,
    top: 35,
    left: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    marginTop: 33,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topKeyText: {
    fontWeight: '900',
    color: COLORS.dark,
  },
  suggestedText: {
    fontWeight: '900',
    color: COLORS.dark,
    marginTop: 20,
    marginBottom: 15,
  },
  seeMoreText: {
    color: COLORS.grey,
    fontSize: 14,
  },
  topKeyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    backgroundColor: COLORS.light40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noOfProductText: {
    fontSize: 12,
    color: COLORS.grey,
  },
  image: {
    height: 33,
    width: 33,
    borderRadius: 7,
    marginRight: 10,
  },
  dummyDataText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: COLORS.dark,
  },
  rightUp: {
    height: 15,
    width: 15,
    marginLeft: 8,
  },
  suggestedContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  suggestedItemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:5
  },
  text: {
    padding: 8,
    paddingHorizontal: 13,
    backgroundColor: COLORS.light40,
    borderRadius: 5,
    color: COLORS.dark,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default style;
