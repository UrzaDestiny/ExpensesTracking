import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '~/screens/Login';
import BottomTabBar from '~/navigation/BottomTabBar';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTabs" component={BottomTabBar} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
