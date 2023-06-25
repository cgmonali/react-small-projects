// a component is just a special kind of function which return html code

import "./ExpenseItem.css"

function ExpenseItem(props){
    

    return (<div className="expense-item ">
        
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>);
}



export default ExpenseItem;