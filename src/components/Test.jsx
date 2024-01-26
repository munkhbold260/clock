import React from "react";
import useCountDown from "react-countdown-hook";

const initialTime = 60 * 1000;
const interval = 1000;

export const Test = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    interval
  );

  React.useEffect(() => {
    start();
  }, []);

  const restart = React.useCallback(() => {
    const newTime = 42 * 1000;
    start(newTime);
  }, []);

  return (
    <div className="text-white">
      <p>Time left: {timeLeft}</p>

      <button onClick={restart}>Restart counter with 42 seconds</button>
    </div>
  );
};
