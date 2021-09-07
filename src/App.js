/* import React, { useState } from "react";
import { createContext } from "react/cjs/react.development";
import Name from "./useContext/Name";
import Location from "./useContext/Location";
import Update from "./useContext/Update";

const UserContext = createContext();

const App = () => {
  const [name, setName] = useState("John");
  const [location, setLocation] = useState("London");
  return (
    <div>
      <UserContext.Provider value={{ name, location, setLocation, setName }}>
        <Name />
        <Location />
        <Update />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext }; */

///////////////////////////////////////////////////////////////////////////////////////////////////

/* import { createContext } from "react";
import "./App.css";
import UseContextCompA from "./ContextApi/UseContextCompA";

const FirstName = createContext();
const LastName = createContext();
const Phone = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"Khushboo"}>
        <LastName.Provider value={"Shrivastava"}>
          <Phone.Provider value={"7222922562"}>
            <div className="App">
              <h1>lets get started </h1>
              <UseContextCompA />
            </div>
          </Phone.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName, Phone };
 */

/////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./TodDoList/AddUser";
import EditUser from "./TodDoList/EditUser";
import Home from "./TodDoList/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
