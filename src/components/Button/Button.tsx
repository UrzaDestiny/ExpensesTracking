import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './ButtonStyles';

type ButtonProps = {
  text: string;
  handlePress: () => void;
};

const Button = ({text, handlePress}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
