import React, { useEffect } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
//   console.log(props);

  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  useEffect(() => {
    return () => {
      console.log("year Changed");
    };
  }, []);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select default={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
