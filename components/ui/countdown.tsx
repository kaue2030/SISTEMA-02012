"use client";

import { useState, useEffect } from "react";
import { Puzzle } from "lucide-react";

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target to 14 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
      setMounted(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  if (!mounted) {
    return <div className="h-[180px] opacity-0 w-full"></div>;
  }

  return (
    <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-3xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 shadow-sm mb-8 bg-white">
        <Puzzle className="w-5 h-5 text-[#84cc16] fill-[#84cc16]/20" />
        <span className="text-gray-700 font-medium text-sm">CountDown component</span>
      </div>

      <div className="flex items-center gap-1 sm:gap-3 text-black">
        <div className="flex flex-col items-center w-14 sm:w-24">
          <span className="text-4xl sm:text-[4.5rem] leading-none font-medium tracking-tight">{pad(timeLeft.days)}</span>
          <span className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-4">Days</span>
        </div>
        <span className="text-3xl sm:text-[3.5rem] leading-none pb-6 sm:pb-10 text-gray-800">:</span>
        <div className="flex flex-col items-center w-14 sm:w-24">
          <span className="text-4xl sm:text-[4.5rem] leading-none font-medium tracking-tight">{pad(timeLeft.hours)}</span>
          <span className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-4">Hours</span>
        </div>
        <span className="text-3xl sm:text-[3.5rem] leading-none pb-6 sm:pb-10 text-gray-800">:</span>
        <div className="flex flex-col items-center w-14 sm:w-24">
          <span className="text-4xl sm:text-[4.5rem] leading-none font-medium tracking-tight">{pad(timeLeft.minutes)}</span>
          <span className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-4">Minutes</span>
        </div>
        <span className="text-3xl sm:text-[3.5rem] leading-none pb-6 sm:pb-10 text-gray-800">:</span>
        <div className="flex flex-col items-center w-14 sm:w-24">
          <span className="text-4xl sm:text-[4.5rem] leading-none font-medium tracking-tight">{pad(timeLeft.seconds)}</span>
          <span className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-4">Seconds</span>
        </div>
      </div>
    </div>
  );
}
