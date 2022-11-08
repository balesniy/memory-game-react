import React, { useState } from 'react';

import ResultsPage from './pages/results-page';
import GamePage from './pages/game-page';
import PageLayout from './components/page-layout';

const AppRout = {
  Game: 'game',
  Results: 'results',
};

function App({ images }) {
  const [stepsCount, setStepsCount] =
    useState(0);

  const [page, setPage] = useState(
    AppRout.Game
  );
  const [results, setResults] =
    useState([]);

  const resetGame = () => {
    setStepsCount(0);
    setPage(AppRout.Game);
  };

  const handleReset = () => {
    setResults((prev) => [
      ...prev,
      stepsCount,
    ]);
    resetGame();
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
      case AppRout.Game:
        return (
          <GamePage {...gameProps} />
        );
      case AppRout.Results:
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

  return (
    <PageLayout>
      {getPage(page)}
    </PageLayout>
  );
}

export default App;
