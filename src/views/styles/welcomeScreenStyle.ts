import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: windowHeight / 5,
    width: windowWidth / 2.5,
  },
  upperContainertext: {
    fontSize: 33,
    fontWeight: '800',
    color: 'black',
  },
  lowerContainer: {
    justifyContent: 'flex-end',
    flex: 0.3,
  },
  lowerContainerText: {
    color: COLORS.primary,
    alignSelf: 'center',
    padding: 14,
    fontSize: 17,
    fontWeight: '600',
  },
});

export default styles;
