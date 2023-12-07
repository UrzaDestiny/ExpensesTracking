import { combineReducers } from '@reduxjs/toolkit';
import expensesReducer from '~/features/expenses/expensesSlice';
import modalReducer from '~/features/expenses/modalSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  expenses: expensesReducer,
});

export default rootReducer;
