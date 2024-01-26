import { Button } from "@mui/material";
import React from "react";
import useCountDown from "react-countdown-hook";

const interval = 1000;

export const Timer = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(interval);

  const restart = React.useCallback(() => {
    const newTime =
      qwert1.value * 3600000 + qwert2.value * 60000 + qwert3.value * 1000;
    start(newTime);
  }, []);

  return (
    <div className="w-full h-full  text-white text-6xl text-center flex flex-col justify-center gap-5">
      <div className="flex gap-3">
        {" "}
        <input
          id="qwert1"
          type="number"
          placeholder="h"
          className="bg-red-500 w-1/3"
        />
        :
        <input
          id="qwert2"
          type="number"
          placeholder="m"
          className="bg-red-500 w-1/3 "
        />
        :
        <input
          id="qwert3"
          type="number"
          placeholder="s"
          className="bg-red-500 w-1/3 "
        />
      </div>

      <p>
        {Math.floor(timeLeft / 3600000)}:{Math.floor((timeLeft / 60000) % 60)}:
        {(timeLeft / 1000) % 60}
      </p>
      <div className="flex gap-3">
        <Button variant="contained" className="w-1/3" onClick={restart}>
          Start
        </Button>
        <Button variant="contained" className="w-1/3" onClick={pause}>
          pause
        </Button>
        <Button variant="contained" className="w-1/3" onClick={resume}>
          resume
        </Button>
        <Button variant="contained" className="w-1/3" onClick={reset}>
          reset
        </Button>
      </div>
    </div>
  );
};
