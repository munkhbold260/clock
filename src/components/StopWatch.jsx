import { Button } from "@mui/material";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const interval = 1000;

function MyStopwatch() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,

    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });
  const mill = seconds / 10;
  return (
    <div className="w-full h-full text-white text-6xl text-center flex flex-col justify-center gap-5">
      <div>
        {hours}:{minutes}:{seconds}:{}
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <div className="flex gap-3">
        <Button variant="contained" className="w-1/3" onClick={start}>
          reset
        </Button>
        <Button variant="contained" className="w-1/3" onClick={pause}>
          Start
        </Button>
        <Button variant="contained" className="w-1/3" onClick={reset}>
          pause
        </Button>
      </div>
    </div>
  );
}

export const Stopwatch = () => {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
};
