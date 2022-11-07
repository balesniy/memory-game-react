import React from 'react';

const MAX_ROWS = 5;

function ResultsTable({
  current,
  results,
}) {
  return (
    <table className="results">
      {[...results, current]
        .sort((a, b) => a - b)
        .slice(0, MAX_ROWS)
        .map((result, i) => (
          <tr>
            <td>{i + 1}</td>
            <td
              className={
                result === current
                  ? 'current'
                  : ''
              }
            >
              {result}
            </td>
          </tr>
        ))}
    </table>
  );
}

export default ResultsTable;
