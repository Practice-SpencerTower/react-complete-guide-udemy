import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card';

function ExpenseItem(props) {

  const deleteExpense = (e) => {
    let id = e.target.value;
    // pass deletd expense id up to deleteExpenseHandler in App.js
    props.onDeleteExpense(id);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button value={props.id} onClick={deleteExpense}>Delete</button>
    </Card>
  )
}

export default ExpenseItem;