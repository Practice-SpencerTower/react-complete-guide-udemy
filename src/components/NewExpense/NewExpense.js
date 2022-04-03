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
    setShowExpenseForm(false);
  }

  // can also do two separate hanlders to show/hide form
  const showExpFormHandler = () => {
    setShowExpenseForm(true);
    // !showExpenseForm ? setShowExpenseForm(true) : setShowExpenseForm(false);
  }

  const hideExpFormHandler = () => {
    setShowExpenseForm(false)
  }

  return (
    <div className="new-expense">
      {!showExpenseForm ?
        <button className="new" onClick={showExpFormHandler}>Add New Expense</button>
        :
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} hideExpFormHandler={hideExpFormHandler} />}
    </div>
  )
}

export default NewExpense;