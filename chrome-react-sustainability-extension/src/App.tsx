import React from 'react';
import './App.css';
import Separator from './components/seperator';
import ScoreDial from './components/scoredial';

function App() {
  return (
    <div className="App">
      <div> 
        <h1> Sustainability Calculator</h1>
        <ScoreDial value={"100"} size={20} fillColor="black" strokeColor="black" textColor="white" circleSize={50} circleColor="black"/>
        <Separator />
        <p> Content </p>
      </div>
    </div>
  );
}

export default App;
