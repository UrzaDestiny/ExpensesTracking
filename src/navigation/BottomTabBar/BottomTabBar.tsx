import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './BottomTabBarStyles';
import Home from '~/screens/Home';
import Profile from '~/screens/Profile';
import RoundButton from '~/components/RoundButton';
import {useEffect, useState} from 'react';
import AddEditModal from '~/components/AddEditModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function loadUserName() {
      const storedUserName = await AsyncStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }

    loadUserName();
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label,
        }}>
        <Tab.Screen
          options={{
            title: userName,
            tabBarLabel: 'Home',
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
      <RoundButton handlePress={() => setIsModalVisible(true)} />
      <AddEditModal
        type="create"
        isModalVisible={isModalVisible}
        handleCloseModal={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default BottomTabBar;
