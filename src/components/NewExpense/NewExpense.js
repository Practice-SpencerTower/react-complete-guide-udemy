import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {

  const saveExpenseHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense;