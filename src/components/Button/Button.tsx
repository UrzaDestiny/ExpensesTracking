import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './ButtonStyles';

type ButtonProps = {
  text: string;
  handlePress: () => void;
};

const Button: React.FC<ButtonProps> = ({text, handlePress}) => (
  <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
