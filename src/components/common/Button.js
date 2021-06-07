import React from 'react'

export const Button = (props) => {
    return (
        <div>
            <button 
            className={props.type === "primary" ? "primary_button":"secondary_button"}
            {...props}>{props.children}</button>
        </div>
    )
}
