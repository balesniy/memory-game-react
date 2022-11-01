import React from "react";

function Progress({ value, max }) {
  // <progress id="file" max="100" value="70"> 70% </progress>
  return (
    <>
      <p>
        Открыто: {value} / {max}
      </p>
      <div className="progress-wrapper">
        <div
          style={{ width: `${(100 * value) / max}%` }}
          className="progress"
        />
      </div>
    </>
  );
}

export default Progress;
