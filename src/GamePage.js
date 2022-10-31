import React from "react";
import Grid from "./Grid";
import Progress from "./Progress";

export default function GamePage({
  finishedItems,
  list,
  stepsCount,
  setStepsCount,
  setFinishedItems,
  showResults
}) {
  // бизнес-логика, вычисляемое состояние
  const checkItems = (firstIndex, secondIndex) => {
    setStepsCount((i) => i + 1);
    if (list[firstIndex].url === list[secondIndex].url) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    }
  };

  const winner =
    finishedItems.length > 0 && finishedItems.length === list.length;

  return (
    <div>
      <Progress value={finishedItems.length} max={list.length} />
      <p>за {stepsCount} шагов</p>
      <Grid list={list} finishedItems={finishedItems} checkItems={checkItems} />
      {winner && (
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
