import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {

  return (
    <>
      {
        props.expenses.map(expense => {
          return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        })
      }
    </>

  )
}

export default Expenses;