import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={3602} />
    </div>
  );
}

export default App;
