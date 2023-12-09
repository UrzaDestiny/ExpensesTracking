import { Expense } from "~/types/types";

export const getFilteredExpenses = (expenses: Expense[], filters: { title: string; date: string }): Expense[] => {
    return expenses.filter(expense => {
      return (
        (filters.title === '' || expense.name.includes(filters.title)) &&
        (filters.date === '' || expense.date === filters.date)
      );
    });
  };

export const groupExpensesByDate = (expenses: Expense[]): { date: string; data: Expense[] }[] => {
    return expenses.reduce((result, expense) => {
      const existingGroup = result.find(group => group.date === expense.date);
  
      if (existingGroup) {
        existingGroup.data.push(expense);
      } else {
        result.push({ date: expense.date, data: [expense] });
      }
  
      return result;
    }, [] as { date: string; data: Expense[] }[]);
  };