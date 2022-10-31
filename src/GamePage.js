import React from "react";
import Grid from "./Grid";
import Progress from "./Progress";
import Modal from "./Modal";

const GamePage = ({
  finishedItems,
  images,
  stepsCount,
  setStepsCount,
  setFinishedItems,
  onShowResults,
}) => {
  // бизнес-логика, вычисляемое состояние
  const checkItems = (firstIndex, secondIndex) => {
    setStepsCount((i) => i + 1);
    if (images[firstIndex].url === images[secondIndex].url) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    }
  };

  const isWinner =
    finishedItems.length > 0 && finishedItems.length === images.length;

  return (
    <div>
      <Progress value={finishedItems.length} max={images.length} />
      <p>за {stepsCount} шагов</p>
      <Grid
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {isWinner && (
        <Modal>
          <h3>You Win !</h3>
          <button className="btn btn-warning mt-4" onClick={onShowResults}>
            show results
          </button>
        </Modal>
      )}
    </div>
  );
};

export default GamePage;
