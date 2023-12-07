import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  placeholder: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '400',
    position: 'absolute',
    color: '#8C8C8C',
    left: 0,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '400',
  },
});
