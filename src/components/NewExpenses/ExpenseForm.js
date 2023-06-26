import { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props){


const [enteredTitle,setEnteredTitle]=useState("");
const [enteredAmount,setEnteredAmount]=useState("");
const [enteredDate,setEnteredDate]=useState("");
// const [userInput,setUserInput]=useState({
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""
// }
// );




function titleHandler(event){
    
    // setUserInput({...userInput,
    //     enteredTitle:event.target.value})
    setEnteredTitle(event.target.value);
}

const amountHandler=(event)=>{
    setEnteredAmount(event.target.value)
        // setUserInput({...userInput,
        //     enteredAmount:event.target.value})
}

const dateHandler=(event)=>{
    setEnteredDate(event.target.value)
        // setUserInput({...userInput,
        //     enteredDate:event.target.value})
}




function submitHandler(event) {
  
    event.preventDefault();

    // const expenseData = {
    //     title: userInput.enteredTitle,
    //     amount: userInput.enteredAmount,
    //     date: new Date(userInput.enteredDate)
    //   };
    const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
          };
  
    //   console.log(expenseData);//data
    props.onSaveExpenseData(expenseData);
      
           setEnteredTitle("");
           setEnteredAmount("");
           setEnteredDate("");
      


}

return(
    <form id="addForm" action="" onSubmit={submitHandler} >
          <div className="new-expense__controls">
             <div className="new-expense__control">

                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleHandler} />
             </div>

             <div className="new-expense__control">

                <label htmlFor="">Amount</label>
                <input type="number"min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler}/>
             </div>
            <div className="new-expense__control">

                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2023-05-31" value={enteredDate} onChange={dateHandler} />
             </div>

          </div>

          <div className="new-expense__actions">
            <button type="submit" >Add expense</button>
          </div>

    </form>
    
    
    
    
    
    );




}

export default ExpenseForm;