import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ExpensesCountStyles';
import {useSelector} from 'react-redux';
import {selectExpenses} from '~/features/expenses/expensesSlice';

const ExpensesCount: React.FC = () => {
  const expenses = useSelector(selectExpenses);
  const expensesCount = expenses.length;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Expenses Items</Text>
      <Text style={styles.number}>{expensesCount}</Text>
    </View>
  );
};

export default ExpensesCount;
