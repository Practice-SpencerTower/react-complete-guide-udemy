import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {

  return (
    <Card className="expenses">
      {
        props.expenses.map(expense => {
          return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        })
      }
    </Card>
  )
}

export default Expenses;