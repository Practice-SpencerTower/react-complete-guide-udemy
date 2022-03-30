import './App.css';
import Expenses from './components/Expenses/Expenses';
import expenses from './expenseData';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
