import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './FilterButtonStyles';
import SlidersSvg from '~/assets/icons/Sliders.svg';

const FilterButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SlidersSvg height={20} width={20} />
        <Text style={styles.buttonText}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
