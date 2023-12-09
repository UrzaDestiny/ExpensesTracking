import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './RoundButtonStyles';
import PlusSvg from '~/assets/icons/Plus.svg';

interface RoundButtonProps {
  handlePress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({handlePress}) => (
  <TouchableOpacity onPress={handlePress} style={styles.container}>
    <View style={styles.roundButton}>
      <PlusSvg height={18.67} width={18.67} />
    </View>
  </TouchableOpacity>
);

export default RoundButton;
