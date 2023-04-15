import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/views/screens/welcomeScreen';
import SignUp from './src/views/screens/signUpScreen';
import SignIn from './src/views/screens/signInScreen';
import ForgotPassword from './src/views/screens/forgotPassword';
import Verification from './src/views/screens/verificationScreen';
import MyTab from './src/views/screens/tabRouter';
import Orientation from 'react-native-orientation-locker';
import SearchScreen from './src/views/screens/searchScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Home" component={MyTab} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
