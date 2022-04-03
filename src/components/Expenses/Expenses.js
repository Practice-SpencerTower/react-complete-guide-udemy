import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {

  const [selectedYear, setYear] = useState('All');
  const yearFilterHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log('In Expenses year: ', selectedYear);
  }

  let filteredExpenses;
  selectedYear === 'All' ?
    filteredExpenses = props.expenses :
    filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });


  return (
    <Card className="expenses">
      <ExpenseFilter
        yearFilterHandler={yearFilterHandler} />

      {/* chains filter and map methods: filter based on year, then map filtered items into ExpenseItem */}
      {filteredExpenses.length === 0 ?
        (<p>No expenses found.</p>) :
        (filteredExpenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        })
        )
      }
    </Card>
  )
}

export default Expenses;