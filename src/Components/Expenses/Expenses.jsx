import React from "react";
import "./Expenses.css";

function Expenses({ expenses, setExpenses }) {
  function deleteItem(index) {
    let temp = [...expenses];
    let res = temp.filter((item, id) => {
      if (index == id) return false;
      return item;
    });
    setExpenses(res);
  }

  return (
    <>
      <div className="expenses">
        {(expenses.length==0 )? (
          <h1>No expenses added...</h1>
        ) : (
          <>
            <h1>Expenses</h1>
            {expenses.map((item, index) => {
              return (
                <>
                  <div className="card">
                    <h2>{item.name}</h2>
                    <h2>{item.cost}</h2>
                    <button onClick={() => deleteItem(index)}>X</button>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Expenses;