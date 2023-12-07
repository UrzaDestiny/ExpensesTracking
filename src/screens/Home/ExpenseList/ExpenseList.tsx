import React from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {styles} from './ExpenseListStyles';
import XSvg from '~/assets/icons/X.svg';
import {useDispatch, useSelector} from 'react-redux';
import {selectExpenses, removeExpense} from '~/features/expenses/expensesSlice';
import {Expense} from '~/types/types';

const ExpenseList: React.FC = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);

  const groupedExpenses = expenses.reduce((result, expense) => {
    const existingGroup = result.find(group => group.date === expense.date);

    if (existingGroup) {
      existingGroup.data.push(expense);
    } else {
      result.push({date: expense.date, data: [expense]});
    }

    return result;
  }, [] as {date: string; data: Expense[]}[]);

  const handleRemoveExpense = (id: string) => {
    dispatch(removeExpense(id));
  };

  return (
    <SectionList
      sections={groupedExpenses}
      keyExtractor={(item, index) => item.date + index.toString()}
      renderSectionHeader={({section}) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.date}>{section.date}</Text>
        </View>
      )}
      renderItem={({item, index, section}) => (
        <View
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
        </View>
      )}
    />
  );
};

export default ExpenseList;
