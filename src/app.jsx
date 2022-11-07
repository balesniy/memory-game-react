import React, { useState } from 'react';

import InitialPage from './pages/initial-page';
import ResultsPage from './pages/results-page';
import GamePage from './pages/game-page';
import PageLayout from './components/page-layout';

const AppRout = {
  Initial: 'initial',
  Game: 'game',
  Results: 'results',
};

function App({ getImages }) {
  const [stepsCount, setStepsCount] =
    useState(0);
  const [images, setImages] = useState(
    []
  );
  const [page, setPage] = useState(
    AppRout.Initial
  );
  const results = [1, 2, 3, 42];
  // const [results, setResults] =
  //   useState({
  //     12: [],
  //     16: [],
  //     20: [],
  //   });

  // const gameSize = images.length;

  const resetGame = () => {
    setStepsCount(0);
    setPage(AppRout.Initial);
  };

  // const handleReset = () => {
  //   setResults((prev) => ({
  //     ...prev,
  //     [gameSize]: [
  //       ...prev[gameSize],
  //       stepsCount,
  //     ],
  //   }));
  //   resetGame();
  // };

  const handleStart = (pairsCount) => {
    setImages(getImages(pairsCount));
    setPage(AppRout.Game);
  };

  const showResults = () => {
    setPage(AppRout.Results);
  };

  const gameProps = {
    images,
    stepsCount,
    setStepsCount,
    onShowResults: showResults,
  };

  const getPage = (route) => {
    switch (route) {
      case AppRout.Initial:
        return (
          <InitialPage
            onStart={handleStart}
          />
        );
      case AppRout.Game:
        return (
          <GamePage {...gameProps} />
        );
      case AppRout.Results:
        return (
          <ResultsPage
            stepsCount={stepsCount}
            onResetGame={resetGame}
            results={results}
          />
        );
      default:
        return null;
    }
  };

  return (
    <PageLayout>
      {getPage(page)}
    </PageLayout>
  );
}

export default App;
