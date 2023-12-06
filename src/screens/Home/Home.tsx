import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeStyles';
import FilterButton from '~/components/FilterButton';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Total Expenses: $1,294.50</Text>
      <View style={styles.buttonContainer}>
        <FilterButton/>
      </View>
    </View>
  );
};


export default Home;
