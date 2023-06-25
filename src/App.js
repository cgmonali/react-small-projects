import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";






 const App=()=> {

  const expenses=[{
    title:"book",
    location:"book store",
    amount:35,
    date:  new Date(2023,6,25)
  },
{
  title:"Car insurance",
    location:"KP nagar",
    amount:40,
    date:  new Date(2023,6,24)
},
{
  title:"shopping",
    location:"srinivas nagar",
    amount:65,
    date:  new Date(2023,6,23)
},
{
  title:"snacks",
    location:"BM nagar",
    amount:37,
    date:  new Date(2023,6,22)
}
]
  
  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
