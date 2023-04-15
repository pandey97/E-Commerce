import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
         flex:1
    },
    upperContainer: {
        flex:0.60
    },
    lowerContainer: {
        flex:0.40,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 6,
      },
      activeDot: {
        backgroundColor: COLORS.primary,
      },
      HeaderText: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'900',
        color: COLORS.dark
      },
      HeaderSubtitle: {
        paddingHorizontal:40,
        textAlign:'center',
        marginVertical:8,
        color:COLORS.grey
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal:18,
        marginVertical:10,
        marginTop:30
      },
      leftButton:{
        width: '50%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.grey20,
        marginRight: 20,
        padding: 15,
        borderRadius: 10,
      },
      rightButton:{
        width: '50%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
      }
})

export default styles;