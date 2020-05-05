import React from 'react'

export const ExpensesItems = ({ item }) => {
    const { id, charge, amount } = item;
    return (
        <li className='item'>
            <div className='info'>
                <span className='charge'>${charge}</span>
                <span className='amount'>${amount}</span>
            </div>
            
        </li>
    )
}
