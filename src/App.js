import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import StateProvider from "./UseReducer/Context/StateProvider";

const App = () => {
  return (
    <>
      <div>
        <StateProvider />
      </div>
    </>
  );
};

export default App;

////////////////////////////////////////////////////////////////////////////////////////
/* import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./CrudDemo/AddUser";
import EditUser from "./CrudDemo/EditUser";
import Home from "./CrudDemo/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from "./CrudDemo/Context/GlobalState";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
 */
