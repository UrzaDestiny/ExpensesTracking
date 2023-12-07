import { combineReducers } from '@reduxjs/toolkit';
import expensesReducer from '~/features/expenses/expensesSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
});

export default rootReducer;
