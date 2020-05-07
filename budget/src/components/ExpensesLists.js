import React from 'react'
import { ExpensesItems } from './ExpensesItems'
import { MdDelete } from "react-icons/md";

export const ExpensesLists = ({expenses, handleDelete, handleEdit, handleClearItems}) => {
    return (
        <>
            {expenses.map(expense => {
                return (
                <ExpensesItems 
                    key={expense.id} 
                    item={expense}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
                );
            })};
            {expenses.length > 0 && (
                    <button className="btn" onClick={handleClearItems}>
                    clear expenses
                    <MdDelete className="btn-icon" />
                    </button>
                )}
        </>  
    )
}
