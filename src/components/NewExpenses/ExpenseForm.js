import { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(){


// const [enteredTitle,setEnteredTitle]=useState("")
// const [enteredAmount,setEnteredAmount]=useState("")
// const [enteredDate,setEnteredDate]=useState("")
const [userInput,setUserInput]=useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
}
);




const titleHandler=(event)=>{
    
    setUserInput({...userInput,
        enteredTitle:event.target.value})
}

const amountHandler=(event)=>{
    setUserInput({...userInput,
        enteredAmount:event.target.value})
}

const dateHandler=(event)=>{
    setUserInput({...userInput,
        enteredDate:event.target.value})
}




const submitHandler=(event)=>{
  
    event.preventDefault();

    const expenseData = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
      };
  
      console.log(expenseData);



}

return(
    <form id="addForm" action="" onSubmit={submitHandler} >
          <div className="new-expense__controls">
             <div className="new-expense__control">

                <label htmlFor="">Title</label>
                <input type="text" onChange={titleHandler} />
             </div>

             <div className="new-expense__control">

                <label htmlFor="">Amount</label>
                <input type="number"min="0.01" step="0.01" onChange={amountHandler}/>
             </div>
            <div className="new-expense__control">

                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2023-05-31" onChange={dateHandler} />
             </div>

          </div>

          <div className="new-expense__actions">
            <button type="submit" >Add expense</button>
          </div>

    </form>
    
    
    
    
    
    );




}

export default ExpenseForm;