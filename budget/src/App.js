import React, {useState} from 'react';
import './App.css';
import { Alerts } from './components/Alerts';
import { ExpensesForm } from './components/ExpensesForm';
import { ExpensesLists } from './components/ExpensesLists';
import { v4 as uuidv4 } from 'uuid'

const stateValues = [
  {id: uuidv4(), charge: 'rent', amount: 1200 },
  {id: uuidv4(), charge: 'grocery', amount: 400 },
  {id: uuidv4(), charge: 'grocery', amount: 400 },
]

function App() {
  let [expenses, setExpenses] = useState(stateValues);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('')
  let [alert, setAlert] = useState({
    show : false
  })
  let [edit, setEdit] = useState(false)
  let [id, setId] = useState(0)

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
    if (charge !== '' && amount > 0 ) {
      if(edit) {
        const currItem = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        setExpenses(currItem)
        handleAlert({type: 'success', text: 'Item edited' })
        setEdit(false);
      } else {
        const newItem = { id: uuidv4(), charge, amount};
        setExpenses([...expenses, newItem]);
        handleAlert({type: 'success', text : 'item added'});
      }

      setCharge("");
      setAmount("");

    } else {
      handleAlert({type: 'danger', text: 'fill the cases' })
    }
  }
  const handleDelete = (id) => {
    const deleteItem = expenses.filter((el) => el.id !== id)
    setExpenses(deleteItem);
  }
  const handleClearItems = () => {
    setExpenses([])
  }
  const handleEdit = (id) => {
    const editItem = expenses.find(i => i.id === id)
    let { charge , amount} = editItem

    setCharge(charge)
    setAmount(amount)
    setEdit(true)

    setId(id)
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
            handleSubmit={handleSubmit}
            charge={charge}
            amount={amount}
            edit={edit}
            />

        <ExpensesLists  
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClearItems={handleClearItems}
            handleEdit={handleEdit}/>
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
