import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card';




 const Expenses=(props)=> {

  
  
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
