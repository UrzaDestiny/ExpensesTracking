import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './NameInputStyles';

type NameInputProps = {
  placeholder: string;
};

const NameInput = ({placeholder}: NameInputProps) => {
  const [name, setName] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
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
