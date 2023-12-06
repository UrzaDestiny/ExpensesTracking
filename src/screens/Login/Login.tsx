import React from 'react';
import {Alert, View} from 'react-native';
import {styles} from './LoginStyles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~/types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
}

import NameInput from '~/components/NameInput';
import Button from '~/components/Button';

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <NameInput placeholder='Enter Name' />
      <Button text="Login" handlePress={handlePress} />
    </View>
  );
};

export default Login;
