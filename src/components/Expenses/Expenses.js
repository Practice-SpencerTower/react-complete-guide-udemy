import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {

  const [year, setYear] = useState('');
  const yearFilterHandler = (year) => {
    setYear(year);
    console.log('In Expenses year: ', year);
  }


  return (
    <Card className="expenses">
      <ExpenseFilter
        yearFilterHandler={yearFilterHandler} />
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