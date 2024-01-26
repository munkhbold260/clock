import { Button } from "@mui/material";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const ms = setInterval;
function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    isRunning,

    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <div className="w-full h-full text-white text-6xl text-center flex flex-col justify-center gap-5">
      <div>
        {hours}:{minutes}:{seconds}:{ms}
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <div className="flex gap-3">
        <Button variant="contained" className="w-1/3" onClick={reset}>
          reset
        </Button>
        <Button variant="contained" className="w-1/3" onClick={start}>
          Start
        </Button>
        <Button variant="contained" className="w-1/3" onClick={pause}>
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
