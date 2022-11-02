import React from 'react';

function Progress() {
  return (
    <div>
      <p>Открыто: 6 / 12</p>
      <div className="progress-wrapper">
        <div
          style={{
            width: '50%',
          }}
          className="progress"
        />
      </div>
    </div>
  );
}

export default Progress;
