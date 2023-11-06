import React, { useState } from 'react';

const EnableDisableButton = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  return (
    <div>
      <button onClick={() => setIsButtonEnabled(!isButtonEnabled)}>
       Click on this button to: {isButtonEnabled ? ' Disable ' : ' Enable '}
      </button>
      <p disabled={!isButtonEnabled}>
        The button is {isButtonEnabled ? 'enabled' : 'disabled'} now.
      </p>
    </div>
  );
};

export default EnableDisableButton;
