import React from "react";

// let counter = 0;

const Card = (props) => {
  const { onCardClick, children, visible, finished } = props;
  const className = `${visible ? "grid-card-show" : ""} ${
    finished ? "grid-card-show grid-card-finished" : ""
  }`;

  return (
    <div
      className={`grid-card ${props.className} ${className}`}
      onClick={onCardClick}
    >
      {children}
    </div>
  );
};

export default Card;
