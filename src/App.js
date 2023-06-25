import ExpenseItem from "./components/ExpenseItem";






function App() {

  const LocationOfExpenditure=[{
    title:"book",
    location:"book store",
    amount:35
  },
{
  title:"Car insurance",
    location:"KP nagar",
    amount:40
},
{
  title:"shopping",
    location:"srinivas nagar",
    amount:65
},
{
  title:"snacks",
    location:"BM nagar",
    amount:37
}
]
  
  return (
    <div>{
      LocationOfExpenditure.map((LocationOfExpenditure)=>(
      <ExpenseItem 
      title={LocationOfExpenditure.title}
      location={LocationOfExpenditure.location}
      amount={LocationOfExpenditure.amount}
      
      ></ExpenseItem>
    
))}
    </div>
  );
}

export default App;
