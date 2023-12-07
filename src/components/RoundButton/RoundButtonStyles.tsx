import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    left: '50%',
    marginLeft: -28,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 6,
        },
        android: {
          elevation: 6,
        },
      }),
  },
  roundButton: {
    width: 56,
    height: 56,
    backgroundColor: '#455EFF',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
