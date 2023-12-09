import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './FilterButtonStyles';
import SlidersSvg from '~/assets/icons/Sliders.svg';

type FilterButtonProps = {
  onFilterButtonPress: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({onFilterButtonPress}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onFilterButtonPress}>
      <SlidersSvg height={20} width={20} />
      <Text style={styles.buttonText}>Filters</Text>
    </TouchableOpacity>
  </View>
);

export default FilterButton;
