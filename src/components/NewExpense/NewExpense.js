import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

  const saveExpenseHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense;