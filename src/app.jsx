import React from 'react';

import InitialPage from './pages/initial-page';
import ResultsPage from './pages/results-page';
import GamePage from './pages/game-page';


function App() {
  return (
    <div className="text-center p-4 d-flex flex-column">
      <InitialPage/>
      <GamePage/>
      <ResultsPage/>
    </div>
  );
}

export default App;
