// a component is just a special kind of function which return html code
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props){
    

    return (
    <div className="expense-item ">
        <ExpenseDate date={props.date}   />
        <div className="expense-item__description">
        <ExpenseDetails 
        title={props.title}
        location={props.location}
         amount={props.amount}></ExpenseDetails>
        {/* <ExpenseDetails ></ExpenseDetails>
        <ExpenseDetails></ExpenseDetails> */}
      </div>
    </div>);
}



export default ExpenseItem;