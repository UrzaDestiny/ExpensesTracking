import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 94,
    height: 28,
    backgroundColor: '#D9D9D9',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
  },
});
