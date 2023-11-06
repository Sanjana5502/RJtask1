import React, { useState } from 'react';

const SumTwoNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    const sum = num1 + num2;
    setResult(sum);
  };

  return (
    <div>
      <h2>Enter Any Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default SumTwoNumbers;
