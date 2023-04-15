import React from 'react';
import './App.css';
import Separator from './components/seperator';
import ScoreDial from './components/scoredial';
import Table from './components/table';

const data = [
  {
    original_item: "plastic bag",
    alt_one: "cardboard bag",
    alt_two: "paper bag",
    alt_three: "cotton bag"
  }
];

function App() {
  return (
    <div className="App">
      <div> 
        <h1> Sustainability Calculator</h1>
        <ScoreDial value={"50"} size={100} strokeColor="black" textColor="white" circleSize={50} /> 
        <Separator />
        <Table data={data} />
      </div>     
    </div>
  );
}

export default App;
