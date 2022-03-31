import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const validYears = ([...Array(new Date().getFullYear() - 2018).keys()].map(
    (key) => key + 2019
  )).reverse();

  const filterChangeHandler = (event) => {
    props.onFilterSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={props.selected}>
          {validYears.map((year, key) => {
            return <option key={key} value={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
