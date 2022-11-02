import React from 'react';
import Grid from '../components/grid';
import Progress from '../components/progress';


function GamePage() {
  return (
    <div>
      <Progress />
      <p>за 47 шагов</p>
      <Grid />
    </div>
  );
}

export default GamePage;
