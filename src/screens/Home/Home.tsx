import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './HomeStyles';
import FilterButton from '~/components/FilterButton';
import ExpenseList from './ExpenseList';
import FilterModal from '~/components/FilterModal';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, selectModalVisibility } from '~/features/expenses/modalSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectModalVisibility);

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Total Expenses: $1,294.50</Text>
      <View style={styles.buttonContainer}>
        <FilterButton />
      </View>
      <ExpenseList />
      <FilterModal isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} />
    </View>
  );
};

export default Home;
