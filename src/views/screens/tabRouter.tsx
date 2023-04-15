import {View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './homeScreen';
import Category from './categoryScreen';
import Promo from './settingScreen';
import Profile from './profileScreen';
import { COLORS, SIZES, constants, icons, images } from '../../constants';
import Setting from './settingScreen';

const MyTab: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle:{height:55,borderTopStartRadius:SIZES.radius,borderTopEndRadius:SIZES.radius},
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({ focused, color }) => {
            let labelStyle: { color: string, fontSize: number, fontWeight: string };
            if(focused)
                labelStyle = { color: COLORS.primary, fontSize: 12, fontWeight: '700' } 
            else
                labelStyle = { color: COLORS.grey, fontSize: 12, fontWeight: 'normal' };
            return <Text style={labelStyle}> {route.name} </Text>;
          },
        tabBarIcon: ({focused}) => {
          let iconName: any;
          let iconColor: String;

          if (route.name === constants.bottom_tabs[0].label) {
            iconName = icons.cube
          } else if (route.name === constants.bottom_tabs[1].label) {
            iconName = icons.globe
          } else if (route.name === constants.bottom_tabs[2].label) {
            iconName = icons.setting
          } else if (route.name === constants.bottom_tabs[3].label) {
            iconName = icons.person
          }

          if (focused) {
            iconColor = COLORS.primary;
          } else {
            iconColor = COLORS.grey;
          }

          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={iconName} style={{width: 26, height: 26, tintColor: iconColor}} />
            </View>
          );
        }, 
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MyTab;
