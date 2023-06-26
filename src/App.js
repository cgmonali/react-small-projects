import NewExpense from "./components/NewExpenses/NewExpenses";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import { useState } from "react";

import React from "react";

 const dummyexpenses=[{
   id:"id1",
    title:"book",
   
    amount:35,
    date:  new Date(2023,6,25)
  },
{
  id:"id2",
  title:"Car insurance",
   
    amount:40,
    date:  new Date(2023,6,24)
},
{ 
  id:"id3",
  title:"shopping",
   
    amount:65,
    date:  new Date(2023,6,23)
},
{
  id:"id4",
  title:"snacks",
   
    amount:37,
    date:  new Date(2023,6,22)
}
]


 const App=()=> {

 

const [expenses,setExpenses]=useState(dummyexpenses);

const addExpenseHandler= newexpense=>{
  console.log('App.js');
  setExpenses((prevExpenses=>{
    return [newexpense,...prevExpenses];
  }));
  // console.log(exp);
  // <Expenses items={newexpense}></Expenses>
  
}




  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}> </NewExpense>
      {/* <Expenses items={expenses}></Expenses> */}
      <Expenses items={expenses}></Expenses> 
      {/* before entering the input the holder is being displayed */}
    </div>
  );
}

export default App;
