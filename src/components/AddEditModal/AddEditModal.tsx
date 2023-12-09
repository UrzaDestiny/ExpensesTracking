import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './AddEditModalStyles';
import XSvg from '~/assets/icons/X.svg';
import CustomInput from '~/components/CustomInput';
import Button from '~/components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense, selectExpenses} from '~/features/expenses/expensesSlice';
import {generateRandomId} from '~/helpers/randomNumber';
import {Expense} from '~/types/types';

interface AddEditModalProps {
  isModalVisible: boolean;
  handleCloseModal: () => void;
  type: 'create' | 'edit';
}

const AddEditModal: React.FC<AddEditModalProps> = ({
  isModalVisible,
  handleCloseModal,
  type,
}) => {
  const [titleField, setTitleField] = useState('');
  const [amountField, setAmountField] = useState('');
  const [dateField, setDateField] = useState('');

  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);

  const setName = () => (type === 'create' ? 'Create' : 'Edit');

  const handleButtonPress = () => {
    if (type === 'create') {
      let newId: string;
      do {
        newId = generateRandomId(10);
      } while (expenses.some(expense => expense.id === newId));

      const newExpense: Expense = {
        id: newId,
        name: titleField,
        amount: +amountField,
        date: dateField,
      };

      dispatch(addExpense(newExpense));
      handleCloseModal();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleCloseModal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={handleCloseModal}>
              <XSvg height={24} width={24} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>{`${setName()} Expense`}</Text>
            </View>
          </View>
          <View style={styles.inputFields}>
            <CustomInput
              placeholder="Title"
              onChangeText={setTitleField}
              value={titleField}
              type="text"
            />
            <CustomInput
              placeholder="Amount"
              onChangeText={setAmountField}
              value={amountField}
              type="numbers"
            />
            <CustomInput
              placeholder="Date"
              onChangeText={setDateField}
              value={dateField}
              type="text"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button text={setName()} handlePress={handleButtonPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddEditModal;
