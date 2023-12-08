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
  expenses: [
    {id: '1', name: 'Shopping', amount: 50, date: '2023-12-01'},
    {id: '2', name: 'Dining', amount: 30, date: '2023-12-02'},
    {id: '3', name: 'Groceries', amount: 20, date: '2023-12-01'},
    {id: '4', name: 'Utilities', amount: 40, date: '2023-12-03'},
    {id: '5', name: 'Entertainment', amount: 25, date: '2023-12-02'},
    {id: '6', name: 'Shopping', amount: 55, date: '2023-12-04'},
    {id: '7', name: 'Dining', amount: 35, date: '2023-12-05'},
    {id: '8', name: 'Groceries', amount: 15, date: '2023-12-01'},
    {id: '9', name: 'Utilities', amount: 42, date: '2023-12-03'},
    {id: '10', name: 'Entertainment', amount: 28, date: '2023-12-05'},
    {id: '11', name: 'Shopping', amount: 48, date: '2023-12-02'},
    {id: '12', name: 'Dining', amount: 32, date: '2023-12-04'},
    {id: '13', name: 'Groceries', amount: 18, date: '2023-12-01'},
    {id: '14', name: 'Utilities', amount: 38, date: '2023-12-03'},
    {id: '15', name: 'Entertainment', amount: 22, date: '2023-12-04'},
    {id: '16', name: 'Shopping', amount: 60, date: '2023-12-05'},
    {id: '17', name: 'Dining', amount: 36, date: '2023-12-02'},
    {id: '18', name: 'Groceries', amount: 25, date: '2023-12-04'},
    {id: '19', name: 'Utilities', amount: 45, date: '2023-12-03'},
    {id: '20', name: 'Entertainment', amount: 30, date: '2023-12-05'},
  ],
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
      action: PayloadAction<{index: number; updatedExpense: Expense}>,
    ) => {
      const {index, updatedExpense} = action.payload;
      state.expenses[index] = updatedExpense;
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
  },
});

export const {addExpense, editExpense, removeExpense, setTitleFilter, setDateFilter} = expensesSlice.actions;
export const selectExpenses = (state: RootState) => state.expenses.expenses;
export const selectFilters = (state: RootState) => state.expenses.filters;
export default expensesSlice.reducer;
