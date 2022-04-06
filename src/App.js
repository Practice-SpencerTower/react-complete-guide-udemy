import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import expenseData from './expenseData';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseHandler = (expense) => {
    // add new expense to dummy data
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    console.log(expenses);
  }

  const deleteExpenseHandler = (id) => {
    setExpenses(prevExpenses => {
      let updatedExpenses = prevExpenses.forEach(expense => {
        if (!expense.id !== id) {
          return expense;
        }
      })
      return updatedExpenses;
    })
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App