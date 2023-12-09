import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './SignOutStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setInitialState } from '~/features/expenses/expensesSlice';

const SignOut: React.FC = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userLoggedIn');
    dispatch(setInitialState());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOut;
