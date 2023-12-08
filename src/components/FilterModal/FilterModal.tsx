import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './FilterModalStyles';
import XSvg from '~/assets/icons/X.svg';
import CustomInput from '~/components/CustomInput';
import Button from '~/components/Button';
import {useDispatch} from 'react-redux';
import {setDateFilter, setTitleFilter} from '~/features/expenses/expensesSlice';

interface FilterModalProps {
  isModalVisible: boolean;
  handleCloseModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isModalVisible,
  handleCloseModal,
}) => {
  const [titleField, setTitleField] = useState('');
  const [dateField, setDateField] = useState('');

  const dispatch = useDispatch();

  const handleFilterButton = () => {
    dispatch(setTitleFilter(titleField));
    dispatch(setDateFilter(dateField));
    handleCloseModal();
  };

  const handleCleanButton = () => {
    setTitleField('');
    setDateField('');
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
              style={styles.clearButtonContainer}
              onPress={handleCleanButton}>
              <Text style={styles.clearButton}>clean</Text>
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Filters</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={handleCloseModal}>
              <XSvg height={24} width={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputFields}>
            <CustomInput
              placeholder="Title"
              onChangeText={setTitleField}
              value={titleField}
            />
            <CustomInput
              placeholder="Date"
              onChangeText={setDateField}
              value={dateField}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Filter" handlePress={handleFilterButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
