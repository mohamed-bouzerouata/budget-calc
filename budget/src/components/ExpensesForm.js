import React from 'react'
import { MdSend } from "react-icons/md";

export const ExpensesForm = ({expenses, handleChangeCharge, handleChangeAmount, handleSubmit}) => {
    const {charge, amount } = expenses
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="expense">charge</label>
                        <input
                            type="text"
                            className="form-control"
                            id="charge"
                            name="charge"
                            placeholder="e.g. rent"
                            value={charge}
                            onChange={handleChangeCharge}
                        />
                    </div>
                    <div className="form-group">
                            <label htmlFor="amount">amount</label>
                            <input
                                type="number"
                                className="form-control"
                                id="amount"
                                name="amount"
                                placeholder="e.g. 100"
                                value={amount}
                                onChange={handleChangeAmount}
                            />
                            </div>
                    </div>
                    <button type="submit" className="btn">
                            submit
                        <MdSend className="btn-icon" />
                    </button>
            </form>
        </>
    )
}
