import React, { useState } from "react";

import InitialPage from "./InitialPage";
import ResultsPage from "./ResultsPage";
import GamePage from "./GamePage";

function PageLayout({ children }) {
  return <div className="text-center p-4 d-flex flex-column">{children}</div>;
}

const Page = {
  INITIAL: "initial",
  GAME: "game",
  RESULTS: "results"
}

export default function App({ getImages }) {
  const [finishedItems, setFinishedItems] = useState([]);
  const [stepsCount, setStepsCount] = useState(0);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(Page.INITIAL);

  const resetGame = () => {
    setFinishedItems([]);
    setStepsCount(0);
    setPage(Page.INITIAL);
  };

  const handleStart = (pairsCount) => {
    setImages(getImages(pairsCount));
    setPage(Page.GAME);
  };

  const showResults = () => {
    setPage(Page.RESULTS);
  };

  const gameProps = {
    finishedItems,
    setFinishedItems,
    images,
    stepsCount,
    setStepsCount,
    showResults
  };

  const getPage = (page) => {
    switch (page) {
      case Page.INITIAL:
        return <InitialPage onStart={handleStart} />;
      case Page.GAME:
        return <GamePage {...gameProps} />;
      case Page.RESULTS:
        return <ResultsPage stepsCount={stepsCount} onResetGame={resetGame} />;
      default:
        return null;
    }
  };

  return <PageLayout>{getPage(page)}</PageLayout>;
}
