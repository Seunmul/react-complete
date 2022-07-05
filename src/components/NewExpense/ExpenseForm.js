import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmout: "",
  //   enteredDate: "",
  // });
  //한번에 상탯값을 관리할 것인가, 상태값을 모두 독립시킬것인가..
  //생각해보길

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log("titleChanged");
    console.log(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    //스프레드 연산자를 활용해서 이전 배열값을 저장하고 변경값을 덮어 씌운다
    //이렇게 해야 이전 저장값까지 모두 저장 가능
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    //위 직접 배열을 작성해서 적는 것 보다 이렇게 이전 리턴값을 토대로
    //custom hook을 사용하면, 항상 최신의 value가 업데이트 되므로
    //이전 State에 의존하는 State업데이트 시
    //상태정보가 꼬일 일이 줄어든다. 기억하자.
  }; //이벤트 핸들러에서의 리턴값을 받는다.

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log("AmountChanged");
    console.log(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  }; //이벤트 핸들러에서의 리턴값을 받는다.

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log("DateChanged");
    console.log(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  }; //이벤트 핸들러에서의 리턴값을 받는다.

  const submitHandler = (event) => {
    event.preventDefault();
    //기본 이벤트 방지
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    //expenseData를 부모 컴포넌트로 전달

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    //form 전송 후 사용자 제출 form 클리어
    //two way binding
  };

  useEffect(() => {
    // console.log({
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // });
    // console.log("Re-rendered")
    return {};
  }, [enteredTitle, enteredAmount, enteredDate]);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount} //two way binding
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
