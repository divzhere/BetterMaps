import React from 'react'

export const Card = (props) => {
    return (
      <div
        className={`card ${
          props.size === "large"
            ? "lg"
            : `${
                props.size === "medium"
                  ? "md"
                  : `${props.size === "account" ? "account" : ""}`
              }`
        }`}
      >
        {props.title && <span className="card_title">{props.title}</span>}
        <div className="card_body">{props.children}</div>
      </div>
    );
}
