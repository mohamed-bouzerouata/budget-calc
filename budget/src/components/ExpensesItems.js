import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpensesItems = ({ item , handleDelete, handleEdit}) => {
    const { id, charge, amount } = item;
    return (
        <li className='item'>
            <div className='info'>
                <span className='charge'>${charge}</span>
                <span className='amount'>${amount}</span>
            </div>
            <div>
        <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
        >
            <MdEdit />
        </button>
        <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
        >
            <MdDelete />
        </button>
        </div>
            
        </li>
    )
}
