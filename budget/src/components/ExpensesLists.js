import React from 'react'
import { ExpensesItems } from './ExpensesItems'
import { MdDelete } from "react-icons/md";

export const ExpensesLists = ({expenses}) => {
    return (
        <>
            {expenses.map(expense => {
                return (
                <ExpensesItems 
                    key={expense.id} 
                    item={expense}
                />
                );
            })};
            {expenses.length > 0 && (
                    <button className="btn">
                    clear expenses
                    <MdDelete className="btn-icon" />
                    </button>
                )}
        </>  
    )
}
