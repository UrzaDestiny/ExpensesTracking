import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './BottomTabBarStyles';

import Home from '~/screens/Home';
import Profile from '~/screens/Profile';
import RoundButton from '~/components/RoundButton';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
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
      <RoundButton onPress={() => {}} />
    </>
  );
};

export default BottomTabBar;
