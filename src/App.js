import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import expenseData from './expenseData';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const [expenses, setExpenses] = useState(expenseData);
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseHandler = (expense) => {
    // add new expense to dummy data
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    console.log(expenses);
  }

  const showExpFormHandler = () => {
    !showExpenseForm ? setShowExpenseForm(() => true) : setShowExpenseForm(() => false);
  }

  return (
    <>
      {!showExpenseForm ?
        <button onClick={showExpFormHandler}>Add New Expense</button>
        :
        <NewExpense onAddExpense={addExpenseHandler} newExpenseHandler={showExpFormHandler} />}
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
