import React, { useState, useMemo } from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserContext from "./UserContext";
import DisplayToggle from "./DisplayToggle";

export default function App() {
  const [user, setUser] = useState();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/toggle">Toggle</Link>
        </li>
      </ul>
      <UserContext.Provider value={value}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/toggle" component={DisplayToggle} />
      </UserContext.Provider>
    </Router>
  );
}
