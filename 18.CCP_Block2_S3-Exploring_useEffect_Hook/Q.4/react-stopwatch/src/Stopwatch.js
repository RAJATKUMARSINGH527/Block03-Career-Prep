import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);
  const soundPlayedRef = useRef(false);
  const audioRef = useRef(null);

  // Load the sound once on mount
  useEffect(() => {
    audioRef.current = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
  }, []);

  // Handle the timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  // Play sound at target time
  useEffect(() => {
    if (seconds === targetTime && isRunning && !soundPlayedRef.current) {
      if (audioRef.current) {
        audioRef.current.play();
      } else {
        console.log('Target reached:', targetTime);
      }
      soundPlayedRef.current = true;
    }
    if (seconds !== targetTime) {
      soundPlayedRef.current = false;
    }
  }, [seconds, targetTime, isRunning]);

  const handleStart = () => {
    if (seconds >= targetTime) setSeconds(0);
    setIsRunning(true);
  };
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  const handleTargetChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) setTargetTime(val);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '3rem auto',
      padding: '2rem',
      textAlign: 'center',
      background: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <h2>React Stopwatch</h2>
      <p style={{ fontSize: '3rem', margin: '1rem 0' }}>{seconds} s</p>
      <div>
        <button onClick={handleStart} disabled={isRunning} style={buttonStyle}>Start</button>
        <button onClick={handleStop} disabled={!isRunning} style={buttonStyle}>Stop</button>
        <button onClick={handleReset} style={buttonStyle}>Reset</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <label htmlFor="targetTime" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>
          Set Target Time (seconds):
        </label>
        <input
          id="targetTime"
          type="number"
          min="1"
          value={targetTime}
          onChange={handleTargetChange}
          disabled={isRunning}
          style={{ width: '80px', padding: '0.3rem', fontSize: '1rem' }}
        />
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  margin: '0 0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  cursor: 'pointer',
  background: '#fff',
  transition: 'background 0.3s',
};

export default Stopwatch;
