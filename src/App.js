import React, { useState } from "react";

import InitialPage from "./InitialPage";
import ResultsPage from "./ResultsPage";
import GamePage from "./GamePage";
import PageLayout from "./PageLayout";

const Page = {
  INITIAL: "initial",
  GAME: "game",
  RESULTS: "results",
};

export default function App({ getImages }) {
  const [finishedItems, setFinishedItems] = useState([]);
  const [stepsCount, setStepsCount] = useState(0);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(Page.INITIAL);
  const [results, setResults] = useState([]);

  const handleReset = () => {
    setResults([...results, stepsCount]);
    resetGame();
  };

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
    onShowResults: showResults,
  };

  const getPage = (page) => {
    switch (page) {
      case Page.INITIAL:
        return <InitialPage onStart={handleStart} />;
      case Page.GAME:
        return <GamePage {...gameProps} />;
      case Page.RESULTS:
        return (
          <ResultsPage
            stepsCount={stepsCount}
            onResetGame={handleReset}
            results={results}
          />
        );
      default:
        return null;
    }
  };

  return <PageLayout>{getPage(page)}</PageLayout>;
}
