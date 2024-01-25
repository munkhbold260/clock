export const WindowStopWatch = () => {
  return (
    <div className="bg-white ">
      <p>00:00:00:00</p>
      <div className="flex gap-5">
        <button className="bg-green-200">start</button>
        <button className="bg-green-200">stop</button>
        <button className="bg-green-200">reset</button>
      </div>
    </div>
  );
};
