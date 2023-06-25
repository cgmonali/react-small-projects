// a component is just a special kind of function which return html code

import "./ExpenseItem.css"

function ExpenseItems(){
    const expenseDate=new Date(2021, 2,28);
    const expenseTitle="car insurance";
    const expenseAmount=294.67;
    const LocationOfExpenditure="New Delhi";
    return <div className="expense-item ">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>
}



export default ExpenseItems;