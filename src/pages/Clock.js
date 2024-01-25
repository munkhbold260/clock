import WindowClock from "@/components/WindowClock";
import { Footer } from "@/components/Footer";
import { Render, Timer } from "@/components/Timer";
import { Stopwatch } from "@/components/StopWatch";

export const Clock = () => {
  return (
    <div className="bg-black flex flex-col justify-end w-[390px] h-[780px] rounded-3xl px-5 py-14 m-auto">
      {/* <WindowClock /> */}
      <Stopwatch />

      {/* <Footer /> */}
      {/* <Timer /> */}
    </div>
  );
};
