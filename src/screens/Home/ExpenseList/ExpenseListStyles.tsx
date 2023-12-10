import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionHeader: {
    height: 25,
    width: '100%',
    backgroundColor: '#F4EEEE',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  date: {
    marginLeft: 10,
  },
  itemContainer: {
    height: 62,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  deleteButton: {
    marginRight: 50,
  },
  itemName: {
    flex: 1,
    fontFamily: 'ABeeZee',
    fontSize: 16,
    fontWeight: '400',
  },
  itemAmount: {
    fontFamily: 'ABeeZee',
    fontSize: 18,
    fontWeight: '400',
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
});
