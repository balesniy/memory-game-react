import React, {
  useState,
} from 'react';

import InitialPage from './pages/InitialPage';
import ResultsPage from './pages/ResultsPage';
import GamePage from './pages/GamePage';
import PageLayout from './components/PageLayout';

const AppRout = {
  INITIAL: 'initial',
  GAME: 'game',
  RESULTS: 'results',
};

function App({ getImages }) {
  const [
    stepsCount,
    setStepsCount,
  ] = useState(0);
  const [images, setImages] =
    useState([]);
  const [page, setPage] = useState(
    AppRout.INITIAL
  );
  const [results, setResults] =
    useState([]);

  const resetGame = () => {
    setStepsCount(0);
    setPage(AppRout.INITIAL);
  };

  const handleReset = () => {
    setResults((items) => [
      ...items,
      stepsCount,
    ]);
    resetGame();
  };

  const handleStart = (
    pairsCount
  ) => {
    setImages(
      getImages(pairsCount)
    );
    setPage(AppRout.GAME);
  };

  const showResults = () => {
    setPage(AppRout.RESULTS);
  };

  const gameProps = {
    images,
    stepsCount,
    setStepsCount,
    onShowResults: showResults,
  };

  const getPage = (route) => {
    switch (route) {
      case AppRout.INITIAL:
        return (
          <InitialPage
            onStart={handleStart}
          />
        );
      case AppRout.GAME:
        return (
          <GamePage
            {...gameProps}
          />
        );
      case AppRout.RESULTS:
        return (
          <ResultsPage
            stepsCount={stepsCount}
            onResetGame={
              handleReset
            }
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
