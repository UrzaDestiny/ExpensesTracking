import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './BottomTabBarStyles';

import Home from '~/screens/Home';
import Profile from '~/screens/Profile';
import RoundButton from '~/components/RoundButton';
import {useState} from 'react';
import AddEditModal from '~/components/AddEditModal';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
