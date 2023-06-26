import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'
const NewExpenses=(props)=>{

    const saveExpenseHandler=(enteredExpenseData)=>{
      
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };

    console.log(expenseData);
props.onAddExpense(expenseData)

    }

return (<div className="new-expense">
<ExpenseForm onSaveExpenseData={saveExpenseHandler}/>

</div>);


}

export default NewExpenses