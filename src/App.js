import React , {useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
const dummyexpenses=[
  {
    id:'e1',
    title:'Car Insurance',
    amount: 400,
    date: new Date(2022, 1,2)
  },
  {
    id:'e2',
    title:'Bike',
    amount: 20,
    date: new Date(2020, 1,2)
  }  
]

function App() {
  const [expenses, setExpenses]=useState(dummyexpenses)
  

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      const newlist = [expense,...prevExpenses];
      console.log(expense);
      console.log(newlist);
      return [expense,...prevExpenses];
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
