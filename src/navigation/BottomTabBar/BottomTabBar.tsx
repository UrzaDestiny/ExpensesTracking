import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './BottomTabBarStyles';

import Home from '~/screens/Home';
import Profile from '~/screens/Profile';
import RoundButton from '~/components/RoundButton';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense, selectExpenses} from '~/features/expenses/expensesSlice';
import {Expense} from '~/types/types';
import {generateRandomId} from '~/helpers/randomNumber';
import {useState} from 'react';
import AddEditModal from '~/components/AddEditModal';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    let newId: string;
    do {
      newId = generateRandomId(10);
    } while (expenses.some(expense => expense.id === newId));

    const newExpense: Expense = {
      id: newId,
      name: 'New Expense',
      amount: 999,
      date: '2023-12-01',
    };

    dispatch(addExpense(newExpense));
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: () => null,
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => null,
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
      <RoundButton onPress={() => setIsModalVisible(true)} />
      <AddEditModal
        type="create"
        isModalVisible={isModalVisible}
        handleCloseModal={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default BottomTabBar;
