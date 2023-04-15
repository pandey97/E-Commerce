import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/views/screens/welcomeScreen';
import SignUp from './src/views/screens/signUpScreen';
import SignIn from './src/views/screens/signInScreen';
import ForgotPassword from './src/views/screens/forgotPassword';
import Verification from './src/views/screens/verificationScreen';
import MyTab from './src/views/screens/tabRouter';
import SearchScreen from './src/views/screens/searchScreen';
import WalkThrough from './src/views/screens/walkthrough';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="HomeScreen" component={MyTab} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="WalkthroughScreen" component={WalkThrough} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
