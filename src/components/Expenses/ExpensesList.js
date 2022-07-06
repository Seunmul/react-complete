import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  //저장된 요소를 JSX엘리먼트 형태로 리턴한다.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, idx, array) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;

// const expensesContent =
//     props.items.length === 0 ? (
//       <p>No expenses found.</p>
//     ) : (
//       props.items.map((expense, idx, array) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         ></ExpenseItem>
//       ))
//     );
