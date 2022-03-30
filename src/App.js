import './App.css';
import Expenses from './components/Expenses/Expenses';
import expenses from './expenseData';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
