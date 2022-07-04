import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
const ExpenseItem = (props) => {
  // console.log(props);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    // 사용자 지정 컴포넌트로 Wrapper 역할을 하는 컴포넌트를 생성할 수는 없다. 
    // 또한 사용자 지정 컴포넌트에 className을 통한 css 속성값을 전달하더라도
    // 기존에 사용자 지정 컴포넌트에 기입된 속성값만 적용된다.
  );
};

export default ExpenseItem;
