import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './FilterButtonStyles';
import SlidersSvg from '~/assets/icons/Sliders.svg';
import { useDispatch } from 'react-redux';
import { showModal } from '~/features/expenses/modalSlice';

const FilterButton = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(showModal());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <SlidersSvg height={20} width={20} />
        <Text style={styles.buttonText}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
