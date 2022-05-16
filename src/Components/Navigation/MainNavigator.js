import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../Screens/Profile';
import SplashScreen from '../Screens/SplashScreen';
import SignUp from '../Screens/SignUp';
import PinCode from '../Screens/PinCode';
import SignIn from '../Screens/SignIn';
import Home from '../Screens/Home';
import Settings from '../Screens/Settings';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PinCode" component={PinCode} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
