import React, { useState } from "react";

import Card from "./Card";

const Grid = (props) => {
  const { list = [], finishedItems, checkItems } = props;

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
        setVisibleItems(visibleItems.concat(index));
        checkItems(visibleItems[0], index);
        // You don’t need Effects to handle user events.
        setTimeout(() => {
          setVisibleItems([]);
        }, 600);
        break;
      default:
        setVisibleItems([]);
    }
  };

  const columnsCount = list.length === 12 ? 3 : 4;

  return (
    <div className="container">
      <div className="row no-gutters">
        {list.map((item, index) => (
          <Card
            key={item.id}
            visible={visibleItems.includes(index)}
            finished={finishedItems.includes(index)}
            className={`${columnsCount === 3 ? "col-4" : "col-3"} card`}
            onCardClick={() => handleCardClick(index)}
          >
            <img
              className={`img-thumbnail img-fluid grid-img`}
              src={item.url}
              alt={item.description}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Grid;
