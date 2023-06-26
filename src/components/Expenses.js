import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from "./NewExpenses/ExpenseFilter";
import React, { useState } from 'react';


 const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <Card className="expenses">
      {/* {
      props.items.map((itemss)=>(
      <ExpenseItem 
      title={itemss.title}
      // location={itemss.location}
      amount={itemss.amount}
      date={itemss.date}
      ></ExpenseItem>
    
))} */}
 <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

<ExpenseItem 
      title={props.items.title}
      // location={itemss.location}
      amount={props.items.amount}
      date={props.items.date}
      ></ExpenseItem>





    </Card>


  


  );
}

export default Expenses;
