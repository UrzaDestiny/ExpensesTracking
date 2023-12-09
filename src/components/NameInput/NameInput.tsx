import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './NameInputStyles';

type NameInputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
};

const NameInput = ({placeholder, onChangeText}: NameInputProps) => {
  const [name, setName] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
    onChangeText(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholderColor.color}
      value={name}
      onChangeText={handleNameChange}
    />
  );
};

export default NameInput;
