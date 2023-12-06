import React from 'react';
import {View} from 'react-native';
import {styles} from './ProfileStyles';
import ExpensesCount from '~/components/ExpensesCount';
import SignOut from '~/components/SignOut';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <ExpensesCount />
      <SignOut />
    </View>
  );
};

export default Profile;
