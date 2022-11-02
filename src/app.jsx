import React from 'react';

import InitialPage from './pages/initial-page';
import ResultsPage from './pages/results-page';
import GamePage from './pages/game-page';

function App({ images=[] }) {
  const stepsCount = 1;
  const results = {
    12: [1,2,3],
    16: [],
    20: [],
  };
  const gameSize = images.length;

  const gameProps = {
    images,
    stepsCount,
  };

  return (
    <div className="text-center p-4 d-flex flex-column">
      <InitialPage />
      <GamePage {...gameProps} />
      <ResultsPage
        stepsCount={stepsCount}
        results={results[gameSize]}
      />
    </div>
  );
}

export default App;
