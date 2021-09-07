import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //use this approach when the state is not depend on th eprevous state
    /*  setUserInput({ ...userInput,
      enteredTitle: event.target.value
    }); */

    /* setUserInput(
    //in this approach one function calls the another function which takes prevState as the latest snapshot of the previos state
    (prevState) => {
    return {
      ...prevState, enteredTitle: event.target.value
    };
  }
 );*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //use this approach when the state is not depend on th eprevous state
    /* setUserInput({ ...userInput,
      enteredAmount: event.target.value
    }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //use this approach when the state is not depend on th eprevous state
    /*  setUserInput({ ...userInput,
    enteredDate: event.target.value
  }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            steps="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-02-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
