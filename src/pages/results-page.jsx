import React from 'react';
import ResultsTable from '../components/results-table';

function ResultsPage() {
  return (
    <div>
      <p>Finished in 47 steps</p>
      <p>новый рекорд!!!</p>
      <h3>Ваши достижения:</h3>
      <ResultsTable />
      <button className="btn btn-warning mb-4">
        New Game
      </button>
    </div>
  );
}

export default ResultsPage;
