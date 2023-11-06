import React, { useState } from 'react';

const TaskCard = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`card ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="card-header" onClick={toggleCollapse}>
        {title}
      </div>
      <div className={`card-body ${isCollapsed ? 'collapsed' : ''}`}>{children}</div>
    </div>
  );
};

export default TaskCard;
