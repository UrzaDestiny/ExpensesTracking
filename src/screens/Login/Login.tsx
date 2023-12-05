import React from 'react';
import {Alert, View} from 'react-native';
import {styles} from './LoginStyles';

import Button from '~/components/Button';

const Login: React.FC = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the custom button!');
  };

  return (
    <View style={styles.container}>
      <Button text="Login" handlePress={handlePress} />
    </View>
  );
};

export default Login;
