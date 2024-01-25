import { Button, Fab } from "@mui/material";

export const Footer = () => {
  return (
    <div className="flex justify-between">
      <Button variant="contained" className="w-1/3">
        clock
      </Button>
      <Button variant="contained" className="w-1/3">
        StopWatch
      </Button>
      <Button variant="contained" className="w-1/3">
        Timer
      </Button>
    </div>
  );
};
