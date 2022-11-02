import React from 'react';
import Card from './card';

function Grid({
  images = [],
  finishedItems = [],
}) {
  const visibleItems = [0, 1, 2];
  // fixme after markup changes
  const columnsCount =
    images.length === 12 ? 3 : 4;

  return (
    <div className="container">
      <div className="row no-gutters">
        {images.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            visible={visibleItems.includes(
              index
            )}
            finished={finishedItems.includes(
              index
            )}
            className={`${
              columnsCount === 3
                ? 'col-4'
                : 'col-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
