import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  content: {
    height: windowHeight * 0.5,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.0015,
    textAlign: 'left',
  },
  clearButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearButton: {
    color: '#455EFF',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.0015,
    textAlign: 'right',
  },
  closeButtonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFields: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePickerContainer: {
    height: 44,
    alignItems: 'center',
  },
});
