import React from 'react';

const DisplayRecords = () => {
  const records = ["Record 1", "Record 2", "Record 3"];

  return (
    <div>
      <h2>Display Array of Records</h2>
      <ol>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayRecords;
