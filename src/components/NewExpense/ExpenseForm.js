import { useState } from 'react';
import './ExpenseForm.css';


function ExpenseForm(props) {

  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const onSaveExpenseData = props.onSaveExpenseData;

  // alternate way to use useState for all 3 inputs
  // const [userInput, setUserInput] = useState({
  //   inputTitle: '',
  //   inputAmount: '',
  //   inputDate: '',
  // });

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    onSaveExpenseData(expenseData);

    // reset form input fields
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type='text'
            value={inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__action">
          <button onClick={props.showExpFormHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={submitHandler}>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;