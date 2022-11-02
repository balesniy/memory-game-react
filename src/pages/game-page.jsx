import React from 'react';
import Grid from '../components/grid';
import Progress from '../components/progress';
import Modal from '../components/modal';

function GamePage({
  images = [],
  stepsCount = 0,
}) {
  const finishedItems = [0, 1];
  const isWinner = false;

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
          <button className="btn btn-warning mt-4">
            show results
          </button>
        </Modal>
      )}
    </div>
  );
}

export default GamePage;
