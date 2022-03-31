import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (event, field) => {
    setUserInput((prevState) => {
      return { ...prevState, [field]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData({
      ...userInput,
      date: new Date(`${userInput.date}T00:00:00`),
      amount: +userInput.amount
    });
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            type="text"
            onChange={(event) => onChangeHandler(event, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => onChangeHandler(event, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            type="date"
            min="2019-01-01"
            max={`${new Date().getFullYear()}-0${
              new Date().getMonth() + 1
            }-${new Date().getDate()}`}
            onChange={(event) => onChangeHandler(event, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onFormClose} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
