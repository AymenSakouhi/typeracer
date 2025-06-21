"use client";

import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

type TypeWriterProps = {
  text: string;
  speed?: number;
};

export default function Typewriter({ text, speed = 100 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const interval = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    const startTypeWriter = async () => {
      const delay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      };
      if (index < text.length) {
        interval.current = setInterval(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        }, speed);
      }
      if (index === text.length) {
        // calling a delay
        await delay();
        setIndex(0);
        setDisplayedText("");
      }
    };

    startTypeWriter();
    return () => clearTimeout(interval.current);
  }, [text, speed, index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-xl"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
}
