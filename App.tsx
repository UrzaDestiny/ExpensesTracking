import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from '~/navigation/AppNavigator';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
