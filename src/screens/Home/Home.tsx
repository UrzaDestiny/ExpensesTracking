import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './HomeStyles';
import FilterButton from '~/components/FilterButton';
import ExpenseList from './ExpenseList';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Total Expenses: $1,294.50</Text>
      <View style={styles.buttonContainer}>
        <FilterButton />
      </View>
      <ExpenseList />
    </View>
  );
};

export default Home;
