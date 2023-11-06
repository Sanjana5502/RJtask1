import React, { useState } from 'react';

function ComponentsComponent({ childComponentss, onAddChild }) {
  return (
    <div>
      <ul>
        {childComponentss.map((child, childIndex) => (
          <li key={childIndex}>Number of {child}</li>
        ))}
      </ul>
      <button onClick={onAddChild}>Add Child Components</button>
    </div>
  );
}

const DynamicComponents = () => {
  const [Componentss, setComponentss] = useState([]);
  const [newComponentsIndex, setNewComponentsIndex] = useState(1);

  const addComponents = () => {
    setComponentss([...Componentss, `Components ${newComponentsIndex}`]);
    setNewComponentsIndex(newComponentsIndex + 1);
  };

  const addChildComponents = (ComponentsIndex) => {
    const updatedComponentss = [...Componentss];
    const childCount = updatedComponentss[ComponentsIndex].split('Child').length - 1;
    updatedComponentss[ComponentsIndex] += ` Child ${childCount + 1}`;
    setComponentss(updatedComponentss);
  }

  return (
    <div>
      <div>
        <button onClick={addComponents}>Add Components</button>
      </div>
      <ul>
        {Componentss.map((Components, index) => (
          <li key={index}>
            {Components}
            <ComponentsComponent
              childComponentss={Componentss
                .slice(index, index + 1)
                .map((Components, i) => `Child ${Components.split('Child').length}`)
              }
              onAddChild={() => addChildComponents(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicComponents;
