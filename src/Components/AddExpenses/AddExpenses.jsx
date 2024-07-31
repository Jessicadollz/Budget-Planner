import React, { useRef } from "react";
import "./AddExpenses.css";

function AddExpenses({expenses,setExpenses}) {
  let nameref = useRef(null);
  let costref = useRef(null);
  function add(){
    let name = nameref.current.value;
    let cost = costref.current.value;
    if(!name || !cost){
      alert("Enter name and cost");
      return;
    }
    // console.log(name, cost);
    let a=[...expenses];
    a.push({name,cost});
    setExpenses(a);
    nameref.current.value="";
    costref.current.value="";
  }

  return (
    <>
      <div className="addExpenses">Add Expenses
      <div className="Input">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" ref={nameref}/>
        <label htmlFor="cost">Cost:</label>
        <input id="cost" type="number" ref={costref}/>
        <button className="btn" onClick={add}>Add</button>
      </div>
      </div>
    </>
  );
}

export default AddExpenses;