import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/home" component={Homepage} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
