import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ExpensesCountStyles';

const ExpensesCount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Expenses Items</Text>
      <Text style={styles.number}>3</Text>
    </View>
  );
};

export default ExpensesCount;
