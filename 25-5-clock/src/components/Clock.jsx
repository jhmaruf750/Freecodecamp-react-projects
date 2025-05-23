import React, { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 0) {
            const newMode = mode === "Session" ? "Break" : "Session";
            setMode(newMode);
            return (newMode === "Session" ? sessionLength : breakLength) * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode, breakLength, sessionLength]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const reset = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setMode("Session");
  };

  return (
    <div className="clock">
      <div className="timer-label">{mode}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="length-controls">
        <div>
          <p id="break-label">Break Length</p>
          <button onClick={() => setBreakLength(b => Math.max(1, b - 1))}>-</button>
          <span id="break-length">{breakLength}</span>
          <button onClick={() => setBreakLength(b => b + 1)}>+</button>
        </div>
        <div>
          <p id="session-label">Session Length</p>
          <button onClick={() => {
            setSessionLength(s => Math.max(1, s - 1));
            if (!isRunning && mode === "Session") setTimeLeft((sessionLength - 1) * 60);
          }}>-</button>
          <span id="session-length">{sessionLength}</span>
          <button onClick={() => {
            setSessionLength(s => s + 1);
            if (!isRunning && mode === "Session") setTimeLeft((sessionLength + 1) * 60);
          }}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
