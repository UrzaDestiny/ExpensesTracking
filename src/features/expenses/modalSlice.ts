import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/configureStore';

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const selectModalVisibility = (state: RootState) => state.modal.isVisible;
export default modalSlice.reducer;
