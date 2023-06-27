import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'
const NewExpenses=(props)=>{
    const [addExpenseBtn,setAddExpenseBtn]=useState('0');

 
 const deletet=(e)=>{
    setAddExpenseBtn('0');
 }
  const enableEdit=()=>{
    setAddExpenseBtn('1');
  }


    
    const saveExpenseHandler=(enteredExpenseData)=>{
      
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };

    console.log(expenseData);
props.onAddExpense(expenseData)

    }
let addExpenseButton=<button onClick={enableEdit}>Add expense</button>;

if(addExpenseBtn==1){
    addExpenseButton=<ExpenseForm onSaveExpenseData={saveExpenseHandler} onDelete={deletet}/>}
return (<div className="new-expense">

  {addExpenseButton} 
{/* <ExpenseForm onSaveExpenseData={saveExpenseHandler}/> */}

</div>);


}

export default NewExpenses