import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import expenses from "../../expenseData";

function Expenses(props) {

  const [selectedYear, setYear] = useState('');
  const yearFilterHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log('In Expenses year: ', selectedYear);
  }


  return (
    <Card className="expenses">
      <ExpenseFilter
        yearFilterHandler={yearFilterHandler} />

      {/* chains filter and map methods: filter based on year, then map filtered items into ExpenseItem */}
      {
        props.expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === selectedYear;
        }).map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        })
      }
    </Card>
  )
}

export default Expenses;