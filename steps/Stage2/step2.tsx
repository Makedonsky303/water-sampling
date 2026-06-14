"use client";

import { useState, useEffect } from "react";

export default function Timer({ initialSeconds = 60 }: { initialSeconds?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const speedUpFactor = 2000 / initialSeconds;

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isActive && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, speedUpFactor);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }

    // Prevents memory leaks by clearing the interval when component unmounts
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, secondsLeft, speedUpFactor]);

  // Formats time into MM:SS format
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md text-center space-y-4">
      <div className="text-4xl font-mono font-bold text-gray-800">
        <input type="text" />
        {formatTime(secondsLeft)}
      </div>
      <div className="space-x-2">
        {/* <input type="text"  placeholder="set timer, example: (1:30)"/> */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 rounded text-white font-semibold transition ${
            isActive ? "bg-amber-500 hover:bg-amber-600" : "bg-emerald-500 hover:bg-emerald-600"
          }`}
          disabled={secondsLeft === 0}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsActive(false);
            setSecondsLeft(initialSeconds);
          }}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
