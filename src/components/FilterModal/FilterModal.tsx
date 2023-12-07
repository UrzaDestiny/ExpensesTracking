import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './FilterModalStyles';
import XSvg from '~/assets/icons/X.svg';
import CustomInput from '~/components/CustomInput';
import Button from '~/components/Button';

interface FilterModalProps {
  isModalVisible: boolean;
  handleCloseModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isModalVisible,
  handleCloseModal,
}) => {
  const [title, setTitle] = useState('');
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
              onPress={handleCloseModal}>
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
              onChangeText={setTitle}
              value={title}
            />
            <CustomInput
              placeholder="Date"
              onChangeText={setTitle}
              value={title}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Filter" handlePress={handleCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
