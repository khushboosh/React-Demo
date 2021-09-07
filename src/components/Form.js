import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntryArray, setallEntryArray] = useState([]);

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    if(email && password){
        const newEntry = {
            id: new Date().getTime().toString(),
            email: email,
            password: password,
          };
          setallEntryArray([...allEntryArray, newEntry]);
          console.log(allEntryArray);
          setEmail("");
          setPassword("");
    }
    else
    {
        alert("please fill the details first");
    }
  };

  const clearFieldHandler = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form action="" onSubmit={submitFormHandler}>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            name="title"
            value={email}
            onChange={emailInputHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Enter your password </label>
          <input
            type="password"
            name="pass"
            value={password}
            onChange={passwordInputHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit">Login</button>

          <button type="reset" onClick={clearFieldHandler}>
            Clear
          </button>
        </div>
        <div>
          {allEntryArray.map((entry) => {
            return (
              <h1 key={entry.id}>
                email ={entry.email} password = {entry.password}
              </h1>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Form;
