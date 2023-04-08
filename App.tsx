import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/views/screens/welcomeScreen';
import WalkThrough from './src/views/screens/walkthrough';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WalkthroughScreen" component={WalkThrough} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
