import React, { useState} from "react";
import ResultsTable from "./ResultsTable";

export default function ResultsPage({ stepsCount, resetGame }) {
  const [results, setResults] = useState([]);

  const handleReset = () => {
    setResults([...results, stepsCount])
    resetGame()
  }

  return (
    <div>
            Finished in {stepsCount} steps
            <br />
            <img alt="большая и радостная картинка" />
            <br />
            <button onClick={handleReset} className="btn btn-warning mb-4">
              New Game
            </button>
            <br />
            {results.length > 1 && stepsCount < Math.min(...results) ? (
              <p>новый рекорд!!!</p>
            ) : null}
            {results.length ? (
              <>
                <h3>Ваши достижения:</h3>
                <ResultsTable current={stepsCount} results={results} />
              </>
            ) : null}
          </div>
  )
}