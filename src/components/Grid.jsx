import React, { useState } from "react";
import Card from "./Card";

const TIMEOUT = 600;

function Grid({ images = [], finishedItems, checkItems }) {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleCardClick = (index) => {
    if (finishedItems.includes(index) || visibleItems.includes(index)) {
      return;
    }

    switch (visibleItems.length) {
      case 0:
        // we need intermediate case without timer
        // case 2:
        setVisibleItems([index]);
        break;
      case 1:
        setVisibleItems((items) => [...items, index]);
        checkItems(visibleItems[0], index);
        // You don’t need Effects to handle user events.
        setTimeout(() => {
          setVisibleItems([]);
        }, TIMEOUT);
        break;
      default:
        setVisibleItems([]);
    }
  };

  // fixme after markup changes
  const columnsCount = images.length === 12 ? 3 : 4;

  return (
    <div className="container">
      <div className="row no-gutters">
        {images.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            visible={visibleItems.includes(index)}
            finished={finishedItems.includes(index)}
            className={`${columnsCount === 3 ? "col-4" : "col-3"}`}
            onCardClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
