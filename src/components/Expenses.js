import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from "./NewExpenses/ExpenseFilter";
import React, { useState } from 'react';


 const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    props.onFilterYear(selectedYear);
  };
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
    {props.items.length===0&&<h2>no items found</h2>}
    {props.items.length===1&&<h2>Only single Expense here. Please add more...</h2>}
    {props.items.length>0&& 
    
     (props.items.map((itemss)=>(
      <ExpenseItem 
      key={itemss.id}
      title={itemss.title}
      // location={itemss.location}
      amount={itemss.amount}
      date={itemss.date}
      ></ExpenseItem>))) }
   



      {/* conditional content
      { props.items.length===0?(<p>no items found</p>):(
      props.items.map((itemss)=>(
      <ExpenseItem 
      key={itemss.id}
      title={itemss.title}
      // location={itemss.location}
      amount={itemss.amount}
      date={itemss.date}
      ></ExpenseItem>
    
)))
} */}
 

{/* <ExpenseItem 
      title={props.items.title}
      // location={itemss.location}
      amount={props.items.amount}
      date={props.items.date}
      ></ExpenseItem> */}





    </Card>


  


  );
}

export default Expenses;
