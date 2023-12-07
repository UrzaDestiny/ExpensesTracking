import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './RoundButtonStyles';
import PlusSvg from '~/assets/icons/Plus.svg';

interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.roundButton}>
        <PlusSvg height={18.67} width={18.67}/>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;
