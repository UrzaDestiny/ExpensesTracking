import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './SignOutStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '~/types';

const SignOut: React.FC = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  
  const handleSignOut = () => {
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
