import React from 'react';

import Card from './card';

function Grid({
  images = [],
  finishedItems = [],
}) {
  return (
    <div className="container">
      <div className="row no-gutters">
        {images.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            isFinished={finishedItems.includes(
              index
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
