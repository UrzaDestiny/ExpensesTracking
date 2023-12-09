import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './LoginStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '~/types';
import NameInput from '~/components/NameInput';
import Button from '~/components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
    if (userLoggedIn === 'true') {
      navigation.navigate('HomeTabs');
    }
  };

  const handlePress = async () => {
    await AsyncStorage.setItem('userName', userName);
    await AsyncStorage.setItem('userLoggedIn', 'true');
    navigation.navigate('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <NameInput placeholder="Enter Name" onChangeText={setUserName} />
      <View style={styles.buttonContainer}>
        <Button text="Login" handlePress={handlePress} />
      </View>
    </View>
  );
};

export default Login;
