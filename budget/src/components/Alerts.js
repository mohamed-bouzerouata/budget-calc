import React from 'react'

export const Alerts = ({type, text}) => {
    return (
        <>
            <div className={`alert alert-${type}`}>{text}</div>
        </>
    )
}
