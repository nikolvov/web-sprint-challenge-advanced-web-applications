import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import {PrivateRoute} from'./components/PrivateRoute'
import BubblePage from './components/BubblePage'
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function App() {
  const Logout = () => {
    axiosWithAuth().post("http://localhost:5000/api/logout")
    .then(localStorage.clear());
    window.location.href="/"
  }
  
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={Logout} >
            logout
          </a>
        </header> 
        <PrivateRoute path="/colors" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.