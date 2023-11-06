import React, { useState } from 'react';

const TwoWayDataBinding = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Enter your text</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text entered: {text}</p>
    </div>
  );
};

export default TwoWayDataBinding;
