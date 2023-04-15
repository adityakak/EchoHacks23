import React from 'react';
import './App.css';
import Separator from './components/seperator';
import ScoreDial from './components/scoredial';

function App() {
  return (
    <div className="App">
      <div> 
        <h1> Sustainability Calculator</h1>
        <ScoreDial value={"50"} size={100} strokeColor="black" textColor="white" circleSize={50} /> 
        <Separator />
        <p> Content </p>
      </div>     
    </div>
  );
}

export default App;
