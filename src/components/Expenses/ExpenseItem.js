import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 3, 23);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 300;
  return (

    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;