import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(
      "we are getting this value of expenseData  from child component formData to parent component new Expense "
    );
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingFormHandler = () => {
    setEditing(true);
  };

  const stopEditingFormHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingFormHandler}>Add new Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseFormData={saveExpenseDataHandler}
          onCancelForm={stopEditingFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;