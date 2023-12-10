import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '~/store/configureStore';
import {Expense} from '~/types/types';

interface ExpensesState {
  expenses: Expense[];
  filters: {
    title: string;
    date: string;
  };
}

const initialState: ExpensesState = {
  expenses: [],
  filters: {
    title: '',
    date: '',
  },
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      const id = (state.expenses.length + 1).toString();
      const newExpense = {...action.payload, id};
      state.expenses.push(newExpense);
    },
    editExpense: (
      state,
      action: PayloadAction<{id: string; updatedExpense: Expense}>,
    ) => {
      const {id, updatedExpense} = action.payload;
      const index = state.expenses.findIndex(expense => expense.id === id);

      if (index !== -1) {
        state.expenses[index] = updatedExpense;
      }
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        expense => expense.id !== action.payload,
      );
    },
    setTitleFilter: (state, action) => {
      state.filters.title = action.payload;
    },
    setDateFilter: (state, action) => {
      state.filters.date = action.payload;
    },
    setInitialState: state => {
      return initialState;
    },
  },
});

export const {
  addExpense,
  editExpense,
  removeExpense,
  setTitleFilter,
  setDateFilter,
  setInitialState,
} = expensesSlice.actions;
export const selectExpenses = (state: RootState) => state.expenses.expenses;
export const selectFilters = (state: RootState) => state.expenses.filters;
export default expensesSlice.reducer;
