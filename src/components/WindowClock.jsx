import React from "react";
import { useTime } from "react-timer-hook";

export const WindowClock = () => {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div className="w-full h-full text-white text-center text-5xl flex flex-col justify-center">
      <div className="text-8xl">
        <p>
          {hours}:{minutes}:{seconds}
        </p>
        <p>{ampm}</p>
      </div>
    </div>
  );
};
