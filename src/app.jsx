import React from 'react';

import Grid from './components/grid';
import PageLayout from './components/page-layout';

function App({ images = [] }) {
  const finishedItems = [0, 1];
  return (
    <PageLayout>
      <Grid
        images={images}
        finishedItems={finishedItems}
      />
    </PageLayout>
  );
}

export default App;
