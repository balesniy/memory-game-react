import React from 'react';
import getImages from '../data.js';

function Grid() {
  const [url1, url2, url3] =
    getImages(3); // fixme
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="grid-card card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url1}
            alt="description"
          />
        </div>
        <div className="grid-card grid-card-show card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url2}
            alt="description"
          />
        </div>
        <div className="grid-card grid-card-finished card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url3}
            alt="description"
          />
        </div>
      </div>
    </div>
  );
}

export default Grid;
