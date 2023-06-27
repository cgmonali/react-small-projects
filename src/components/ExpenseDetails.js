import { useState } from 'react';
import './ExpenseItem.css';

const ExpenseDetails=(props)=>{
    

    const [amount,useAmount]=useState(props.amount);

// const HandleListener=()=>{
//     useAmount('100');
//     console.log('deleted!!');
// }

   return( 
<div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={HandleListener}>add button</button> */}

</div>);
}

export default ExpenseDetails;