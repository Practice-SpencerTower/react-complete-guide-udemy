import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpensesChart from './ExpensesChart/ExpensesChart';

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
      <ExpenseFilter yearFilterHandler={yearFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses;