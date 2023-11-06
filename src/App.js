import React from 'react';
import './App.css';
import TaskCard from './TaskCard';
import DisplaySimpleJSX from './DisplaySimpleJSX';
import DisplayRecords from './DisplayRecords';
import ShowHideElement from './ShowHideElement';
import EnableDisableButton from './EnableDisableButton';
import TwoWayDataBinding from './TwoWayDataBinding';
import DynamicComponents from './DynamicComponents';
import SumTwoNumbers from './SumTwoNumbers';
import Counter from './Counter'; 
import SearchFilter from './SearchFilter';

function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TaskCard title="Display Simple JSX">
              <DisplaySimpleJSX />
            </TaskCard><br/>
            <TaskCard title="Display Records">
              <DisplayRecords />
            </TaskCard><br/>
            <TaskCard title="Show/Hide Element">
              <ShowHideElement />
            </TaskCard><br/>
            <TaskCard title="Enable/Disable Button">
              <EnableDisableButton />
            </TaskCard><br/>
          </div>
          <div className="col-md-6">
            <TaskCard title="Two-Way Data Binding">
              <TwoWayDataBinding />
            </TaskCard><br/>
            <TaskCard title="Dynamic Components">
              <DynamicComponents />
            </TaskCard><br/>
            <TaskCard title="Sum of Two Numbers">
              <SumTwoNumbers />
            </TaskCard>
          </div>
          <h1>Task 2</h1>
          <div className="col-md-6">
            <TaskCard title="Counter">
              <Counter />
            </TaskCard>
          </div>
          <h1>Task 3</h1>
          <div className='col-md-6'>
            <TaskCard title="Search Filter">
              <SearchFilter />
            </TaskCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
