import React from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {styles} from './ExpenseListStyles';
import XSvg from '~/assets/icons/X.svg';

interface Expense {
  name: string;
  amount: number;
  date: string;
}

const expenses: Expense[] = [
  {name: 'Shopping', amount: 50, date: '2023-12-01'},
  {name: 'Dining', amount: 30, date: '2023-12-02'},
  {name: 'Groceries', amount: 20, date: '2023-12-01'},
  {name: 'Utilities', amount: 40, date: '2023-12-03'},
  {name: 'Entertainment', amount: 25, date: '2023-12-02'},
  {name: 'Shopping', amount: 55, date: '2023-12-04'},
  {name: 'Dining', amount: 35, date: '2023-12-05'},
  {name: 'Groceries', amount: 15, date: '2023-12-01'},
  {name: 'Utilities', amount: 42, date: '2023-12-03'},
  {name: 'Entertainment', amount: 28, date: '2023-12-05'},
  {name: 'Shopping', amount: 48, date: '2023-12-02'},
  {name: 'Dining', amount: 32, date: '2023-12-04'},
  {name: 'Groceries', amount: 18, date: '2023-12-01'},
  {name: 'Utilities', amount: 38, date: '2023-12-03'},
  {name: 'Entertainment', amount: 22, date: '2023-12-04'},
  {name: 'Shopping', amount: 60, date: '2023-12-05'},
  {name: 'Dining', amount: 36, date: '2023-12-02'},
  {name: 'Groceries', amount: 25, date: '2023-12-04'},
  {name: 'Utilities', amount: 45, date: '2023-12-03'},
  {name: 'Entertainment', amount: 30, date: '2023-12-05'},
];

const ExpenseList: React.FC = () => {
  const groupedExpenses = expenses.reduce((result, expense) => {
    const existingGroup = result.find(group => group.date === expense.date);

    if (existingGroup) {
      existingGroup.data.push(expense);
    } else {
      result.push({date: expense.date, data: [expense]});
    }

    return result;
  }, [] as {date: string; data: Expense[]}[]);

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
          <TouchableOpacity style={styles.deleteButton}>
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
