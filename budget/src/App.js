import React, {useState} from 'react';
import './App.css';
import { Alerts } from './components/Alerts';
import { ExpensesForm } from './components/ExpensesForm';
import { ExpensesLists } from './components/ExpensesLists';

const stateValues = [
  {id: 1, charge: 'rent', amount: 1200 },
  {id: 2, charge: 'grocery', amount: 400 },
  {id: 3  , charge: 'grocery', amount: 400 },
]

function App() {
  let [expenses, setExpenses] = useState(stateValues);
  let [charge, setCharge] = useState('');
  let [amount, setAmount] = useState('')
  
  const handleChangeCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== '' && amount !== '') {
      
    } else {
      //alert function begin 
    }
  }

  return (
    <>
      <h1>Budget Calculator</h1>
      <main className='App'>
        <Alerts />
        <ExpensesForm
            expenses={expenses} 
            handleChangeCharge={handleChangeCharge} 
            handleChangeAmount={handleChangeAmount}
            handleSubmit={handleSubmit}/>

        <ExpensesLists  expenses={expenses}/>
      </main>
      <h1>
        total spending : 
        <span className='total'>
        $
        {expenses.reduce((acc, curr) => {
          return (acc += curr.amount)
        }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
