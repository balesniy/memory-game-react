import React from 'react';

function Card({ item, isFinished }) {
  const localClassName = isFinished
    ? 'grid-card-finished'
    : '';
  return (
    <div
      className={`grid-card grid-card-show col-4 card ${localClassName}`}
    >
      <img
        className="img-thumbnail img-fluid grid-img"
        src={item.url}
        alt={item.description}
      />
    </div>
  );
}

export default Card;
