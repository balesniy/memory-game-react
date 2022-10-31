import React from "react";
import Grid from "./Grid";
import Progress from "./Progress";

export default function GamePage({
  finishedItems,
  images,
  stepsCount,
  setStepsCount,
  setFinishedItems,
  showResults
}) {
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
      <Grid images={images} finishedItems={finishedItems} checkItems={checkItems} />
      {isWinner && (
        <p>
          You Win !<br />
          <button className="btn btn-warning mt-4" onClick={showResults}>
            show results
          </button>
        </p>
      )}
    </div>
  );
}
