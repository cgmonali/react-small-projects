// a component is just a special kind of function which return html code
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';
import ExpenseDetails from "./ExpenseDetails";

 const ExpenseItem=(props)=>{
    

    return (
    <Card className="expense-item ">
        <ExpenseDate date={props.date}   />
        <div className="expense-item__description">
        <ExpenseDetails 
        title={props.title}
        // location={props.location}
         amount={props.amount}></ExpenseDetails>
        
      </div>
    </Card>);
}



export default ExpenseItem;