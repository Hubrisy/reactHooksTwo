import React from 'react';
import './App.css';
import Timer from './components/Timer';
import TimerTwo from './components/Timer2';

function App() {
  return (
    <div>
    <h2>First Timer</h2>
    <Timer 
    time = {10}
    onTick={(time) => console.log("Залишилось часу: " + time)}/>
    <h2>Second Timer</h2>
    <div>
      <TimerTwo 
      time = {20}
      Tick={(time) => console.log("Залишилось часу: " + time)}/>
    </div>
    </div>
  )
 }
export default App;