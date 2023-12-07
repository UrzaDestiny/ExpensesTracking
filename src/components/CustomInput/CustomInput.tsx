import React, { useState, useEffect } from 'react';
import { TextInput, View, Animated } from 'react-native';
import { styles } from './CustomInputStyles';

interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onChangeText, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = new Animated.Value(value ? 1 : 0);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isFocused || value ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value, animatedValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const containerStyle = {
    borderBottomColor: isFocused ? '#000' : '#DCDCDC',
  };

  const placeholderStyle = {
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.Text style={[styles.placeholder, placeholderStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default CustomInput;