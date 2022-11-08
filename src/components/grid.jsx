import React, { useState } from 'react';

import Card from './card';

const TIMEOUT = 600;

function Grid({
  images = [],
  finishedItems,
  checkItems,
}) {
  const [
    visibleItems,
    setVisibleItems,
  ] = useState([]);

  const handleCardClick = (index) => {
    if (
      finishedItems.includes(index) ||
      visibleItems.includes(index)
    ) {
      return;
    }

    switch (visibleItems.length) {
      case 0:
        // we need intermediate case without timer
        // case 2:
        setVisibleItems([index]);
        break;
      case 1:
        setVisibleItems((items) => [
          ...items,
          index,
        ]);
        checkItems(
          visibleItems[0],
          index
        );
        // You don’t need Effects to handle user events.
        setTimeout(() => {
          setVisibleItems([]);
        }, TIMEOUT);
        break;
      default:
        setVisibleItems([]);
    }
  };

  return (
    <div className="container">
      <div className="row no-gutters">
        {images.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            isVisible={visibleItems.includes(
              index
            )}
            isFinished={finishedItems.includes(
              index
            )}
            onCardClick={() =>
              handleCardClick(index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
