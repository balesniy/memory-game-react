import React from 'react';

const url =
  'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MjU4MHwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2NjczOTM1NDM&ixlib=rb-4.0.3&q=80&w=400';
function Grid() {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="grid-card card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url}
            alt="description"
          />
        </div>
        <div className="grid-card grid-card-show card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url}
            alt="description"
          />
        </div>
        <div className="grid-card grid-card-show grid-card-finished card col-4">
          <img
            className="img-thumbnail img-fluid grid-img"
            src={url}
            alt="description"
          />
        </div>
      </div>
    </div>
  );
}

export default Grid;
