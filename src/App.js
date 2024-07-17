import React, { useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  const startStop = () => {
    if (isRunning) {
      clearInterval(timer);
      setIsRunning(false);
    } else {
      const newTimer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setTimer(newTimer);
      setIsRunning(true);
    }
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;