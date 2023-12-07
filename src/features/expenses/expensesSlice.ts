import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '~/store/configureStore';

interface Expense {
  name: string;
  amount: number;
  date: string;
}

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [
    {name: 'Shopping', amount: 50, date: '2023-12-01'},
    {name: 'Dining', amount: 30, date: '2023-12-02'},
    {name: 'Groceries', amount: 20, date: '2023-12-01'},
    {name: 'Utilities', amount: 40, date: '2023-12-03'},
    {name: 'Entertainment', amount: 25, date: '2023-12-02'},
    {name: 'Shopping', amount: 55, date: '2023-12-04'},
    {name: 'Dining', amount: 35, date: '2023-12-05'},
    {name: 'Groceries', amount: 15, date: '2023-12-01'},
    {name: 'Utilities', amount: 42, date: '2023-12-03'},
    {name: 'Entertainment', amount: 28, date: '2023-12-05'},
    {name: 'Shopping', amount: 48, date: '2023-12-02'},
    {name: 'Dining', amount: 32, date: '2023-12-04'},
    {name: 'Groceries', amount: 18, date: '2023-12-01'},
    {name: 'Utilities', amount: 38, date: '2023-12-03'},
    {name: 'Entertainment', amount: 22, date: '2023-12-04'},
    {name: 'Shopping', amount: 60, date: '2023-12-05'},
    {name: 'Dining', amount: 36, date: '2023-12-02'},
    {name: 'Groceries', amount: 25, date: '2023-12-04'},
    {name: 'Utilities', amount: 45, date: '2023-12-03'},
    {name: 'Entertainment', amount: 30, date: '2023-12-05'},
  ],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    editExpense: (
      state,
      action: PayloadAction<{index: number; updatedExpense: Expense}>,
    ) => {
      const {index, updatedExpense} = action.payload;
      state.expenses[index] = updatedExpense;
    },
  },
});

export const {addExpense, editExpense} = expensesSlice.actions;
export const selectExpenses = (state: RootState) => state.expenses.expenses;
export default expensesSlice.reducer;
