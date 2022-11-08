import React, { useState } from 'react';
import Grid from '../components/grid';
import Progress from '../components/progress';
import Modal from '../components/modal';

function GamePage({ images = [] }) {
  const [stepsCount, setStepsCount] =
    useState(0);

  const [
    finishedItems,
    setFinishedItems,
  ] = useState([]);

  const handleReset = () => {
    setFinishedItems([]);
    setStepsCount(0);
  };

  const checkItems = (
    firstIndex,
    secondIndex
  ) => {
    setStepsCount((i) => i + 1);
    if (
      images[firstIndex].url ===
      images[secondIndex].url
    ) {
      setFinishedItems((items) => [
        ...items,
        firstIndex,
        secondIndex,
      ]);
    }
  };

  const isWinner =
    finishedItems.length > 0 &&
    finishedItems.length ===
      images.length;

  return (
    <div>
      <Progress
        value={finishedItems.length}
        max={images.length}
      />
      <p>за {stepsCount} шагов</p>
      <Grid
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {isWinner && (
        <Modal>
          <h3>You Win !</h3>
          <p>за {stepsCount} шагов</p>
          <button
            className="btn btn-warning mt-4"
            onClick={handleReset}
          >
            reset game
          </button>
        </Modal>
      )}
    </div>
  );
}

export default GamePage;
