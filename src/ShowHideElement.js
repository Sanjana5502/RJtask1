import React, { useState } from 'react';

const ShowHideElement = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Show/Hide Element</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Element' : 'Show Element'}
      </button>
      {visible && <p>This element can be shown or hidden.</p>}
    </div>
  );
};

export default ShowHideElement;
