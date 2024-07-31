import React from "react";
import "./Header.css";

function Header({ budget, remaining, spent }) {
  return (
    <div className="header">
      <h1>BUDGET PLANNER</h1>
      <div className="data">
        <p>Budget: {budget}</p>
        <p>Remaining: {remaining}</p>
        <p>Spent: {spent}</p>
      </div>
    </div>
  );
}

export default Header;