import { Header } from "@/components/Header";
import { Test } from "@/components/Test";
import { WindowClock } from "@/components/WindowClock";
import { WindowStopWatch } from "@/components/WindowStopWatch";
import { WindowTimer } from "@/components/WindowTimer";

export const Clock = () => {
  return (
    <div className="bg-gray-500 flex flex-col gap-5 w-[300px] h-[400px] px-3 py-3">
      <Header />
      <WindowClock />
      <WindowStopWatch />
      <WindowTimer />
      <Test />
    </div>
  );
};
