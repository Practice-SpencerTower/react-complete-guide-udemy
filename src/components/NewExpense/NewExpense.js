import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }

  const showExpFormHandler = () => {
    !showExpenseForm ? setShowExpenseForm(() => true) : setShowExpenseForm(() => false);
  }

  return (
    <div className="new-expense">
      {!showExpenseForm ?
        <button className="new" onClick={showExpFormHandler}>Add New Expense</button>
        :
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />}
    </div>
  )
}

export default NewExpense;