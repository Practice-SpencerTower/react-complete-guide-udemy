import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function ExpenseList(props) {

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {
        props.filteredExpenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            onDeleteExpense={props.onDeleteExpense} />
        })
      }
    </ul>
  )
}

export default ExpenseList;