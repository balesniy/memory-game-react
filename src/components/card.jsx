import React from 'react';

function Card({
  onCardClick,
  item,
  visible,
  finished,
}) {
  const localClassName = `${
    visible ? 'grid-card-show' : ''
  } ${
    finished
      ? 'grid-card-show grid-card-finished'
      : ''
  }`;

  return (
    <div
      className={`grid-card col-4 card ${localClassName}`}
      onClick={onCardClick}
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
