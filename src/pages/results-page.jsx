import React from 'react';
import ResultsTable from '../components/results-table';

function ResultsPage({
  stepsCount = 0,
  results = [],
}) {
  const isRecord = true;
  return (
    <div>
      <p>
        Finished in {stepsCount} steps
      </p>

      {isRecord && (
        <p>новый рекорд!!!</p>
      )}
      {results.length ? (
        <>
          <h3>Ваши достижения:</h3>
          <ResultsTable
            current={stepsCount}
            results={results}
          />
        </>
      ) : (
        <h3>Это ваша первая победа!</h3>
      )}
      <button className="btn btn-warning mb-4">
        New Game
      </button>
    </div>
  );
}

export default ResultsPage;
