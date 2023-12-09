import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {styles} from './HomeStyles';
import FilterButton from '~/components/FilterButton';
import ExpenseList from './ExpenseList';
import FilterModal from '~/components/FilterModal';
import AddEditModal from '~/components/AddEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, selectModalVisibility } from '~/features/expenses/modalSlice';
import { selectExpenses } from '~/features/expenses/expensesSlice';
import { Expense } from '~/types/types';

const Home: React.FC = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const isFilterModalVisible = useSelector(selectModalVisibility);
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  const handleCloseFilterModal = () => {
    dispatch(hideModal());
  };

  const handleCloseAddEditModal = () => {
    setIsEditModalVisible(false);
    setEditingExpense(null);
  }

  const handleOpenEditModal = (expense: Expense) => {
    setEditingExpense(expense);
    setIsEditModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`Total Expenses: $${totalExpenses}`}</Text>
      <View style={styles.buttonContainer}>
        <FilterButton />
      </View>
      <ExpenseList handleOpenEditModal={handleOpenEditModal} />
      <FilterModal isModalVisible={isFilterModalVisible} handleCloseModal={handleCloseFilterModal} />
      <AddEditModal
        type="edit"
        editingExpense={editingExpense}
        isModalVisible={isEditModalVisible}
        handleCloseModal={handleCloseAddEditModal}
      />
    </View>
  );
};

export default Home;
