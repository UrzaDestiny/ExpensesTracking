import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './ButtonStyles';

type ButtonProps = {
  text: string;
  handlePress: () => void;
};

const Button = ({text, handlePress}: ButtonProps) => {
  return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  );
};

export default Button;
