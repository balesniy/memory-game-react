import React from "react";

const ResultsTable = ({ current, results }) => {
  return (
    <table className="results">
      {[...results, current]
        .sort((a, b) => a - b)
        .slice(0, 5)
        .map((i, idx) => (
          <tr>
            <td>{idx + 1}</td>
            <td className={i === current ? "current" : ""}>{i}</td>
          </tr>
        ))}
    </table>
  );
};

export default ResultsTable;
