import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  // console.log(props.items);
  const [filteredYear, setFilteredYear] = useState("2022");
  console.log("Expenses out.js");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear((prev) => {
      return selectedYear;
    });
    console.log(selectedYear);
  };
  //filterChangeHandler에 의해 state가 변경되면
  //Expenses.js가 재실행되고
  //filteredExpenses에 필터링된 요소가 저장된다.
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
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

// {props.items.map((expense, idx, array) =>
//   expense.date.getFullYear()===parseInt(filteredYear) ? (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     ></ExpenseItem>
//   ) : (
//     <div key={idx}></div>
//   ))}

// {/* {filteredExpenses.length === 0 ? (
//           <p>No Expenses Found.</p>
//         ) : (
//           filteredExpenses.map((expense, idx, array) => (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             ></ExpenseItem>
//           ))
//         )} 조건부 연산자 ? : 를 사용한 경우*/}

// {/* &&를 사용한 경우 */}
// {filteredExpenses.length === 0 && <p>No expenses found.</p>}
// {filteredExpenses.length > 0 &&
//   filteredExpenses.map((expense, idx, array) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     ></ExpenseItem>
//   ))}
