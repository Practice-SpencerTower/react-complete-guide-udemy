import './App.css';
import Expenses from './components/Expenses/Expenses';
import expenses from './expenseData';

function App() {
  return (
    <>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
