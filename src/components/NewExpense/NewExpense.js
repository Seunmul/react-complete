import React from "react";
import "./NewExpense.css";
import ExpensForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpensForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;