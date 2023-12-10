import React from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {styles} from './ExpenseListStyles';
import XSvg from '~/assets/icons/X.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectExpenses,
  selectFilters,
  removeExpense,
} from '~/features/expenses/expensesSlice';
import {Expense} from '~/types/types';
import { getFilteredExpenses, groupExpensesByDate } from '~/helpers/expensesHelpers';

type ExpenseListProps = {
  handleOpenEditModal: (item: Expense) => void;
};

const ExpenseList: React.FC<ExpenseListProps> = ({handleOpenEditModal}) => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  const filters = useSelector(selectFilters);

  const filteredExpenses = getFilteredExpenses(expenses, filters);
  const groupedExpenses = groupExpensesByDate(filteredExpenses);

  const handleRemoveExpense = (id: string) => {
    dispatch(removeExpense(id));
  };

  return (
    <SectionList
      sections={groupedExpenses}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({section}) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.date}>{section.date}</Text>
        </View>
      )}
      renderItem={({item, index, section}) => (
        <TouchableOpacity
          onLongPress={() => handleOpenEditModal(item)}
          style={[
            styles.itemContainer,
            index === section.data.length - 1 && styles.noBorderBottom,
          ]}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleRemoveExpense(item.id)}>
            <XSvg height={20} width={20} />
          </TouchableOpacity>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemAmount}>{`$${item.amount}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ExpenseList;
