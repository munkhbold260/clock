import Image from "next/image";
import { Inter } from "next/font/google";
import { Clock } from "./Clock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Clock />
    </div>
  );
}
