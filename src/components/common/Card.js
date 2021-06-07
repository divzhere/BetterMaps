import React from 'react'

export const Card = (props) => {
    return (
        <div className={`card ${props.size==="large" ? "lg" : "md"}`}>
        {props.title && <span className="card_title">
         {props.title}
        </span>}
        <div className="card_body">
         {props.children}
        </div>
      </div>
    )
}
