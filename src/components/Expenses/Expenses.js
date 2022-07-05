import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  // console.log(props.items);
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear((prev)=>{return selectedYear});
    console.log(selectedYear);
  };

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense, idx, array) =>
          expense.date.getFullYear()===parseInt(filteredYear) ? (
            <ExpenseItem
              key={idx}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ) : (
            <div key={idx}></div>
          )
        )}
      </Card>
    </div>
  );
};

export default Expenses;

// {/* <ExpenseItem
//     title={expenses[0].title}
//     amount={expenses[0].amount}
//     date={expenses[0].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[1].title}
//     amount={expenses[1].amount}
//     date={expenses[1].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[2].title}
//     amount={expenses[2].amount}
//     date={expenses[2].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[3].title}
//     amount={expenses[3].amount}
//     date={expenses[3].date}
//   ></ExpenseItem> */}
