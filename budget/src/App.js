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
  let [alert, setAlert] = useState({
    show : false
  })

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false})
    }, 7000);
  }
  
  const handleChangeCharge = (e) => {
    setCharge(e.target.value)
    
  }
  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== '' && amount !== '') {
      let newItem = {id: new Date(), charge, amount};
      setExpenses([...expenses, newItem]);
      handleAlert({type: 'success', text : 'item added'});
      setCharge('');
      setAmount('')
    } else {
      handleAlert({type: 'danger', text: 'fill the cases' })
    }
  }

  return (
    <>
      {alert.show && <Alerts type={alert.type} text={alert.text}/>}
      <h1>Budget Calculator</h1>
      <main className='App'>
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
          return (acc += parseInt(curr.amount) )
        }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
