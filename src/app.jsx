import React from 'react';

import GamePage from './pages/game-page';
import PageLayout from './components/page-layout';

function App({ images = [] }) {
  return (
    <PageLayout>
      <GamePage images={images} />
    </PageLayout>
  );
}

export default App;
