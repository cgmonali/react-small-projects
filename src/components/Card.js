import './Card.css';

const Card=(props)=>{
const classes='card '+props.className;//remember space 
return <div className={classes}>{props.children}</div>;


}

export default Card;