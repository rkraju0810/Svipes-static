'use client';
import React from "react";
import { motion } from "framer-motion";
 
export const DownloadBtn = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-4 py-24 text-black">
      <FlipButton>Download Now</FlipButton>
    </section>
  );
};
 
const DURATION = 0.25;
const STAGGER = 0.025;
 
const FlipButton = ({ children }) => {
  return (
    <>
    <motion.button
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-base font-semibold uppercase border-purple-500 bg-black text-white py-2 px-4 rounded"
      style={{
        lineHeight: 1,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <div className="relative">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.button>
    <div class="relative inline-block">
    <div class="absolute top-0 left-0 h-full w-full rounded bg-purple-400 transform translate-x-1 translate-y-1 transition duration-100"></div>
    <div class="relative inline-block h-full w-full rounded border-2 border-purple-400 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-purple-400 hover:text-white">
        Elevated Button
    </div>
</div>

<button
  className="stroke-white rounded-lg text-left flex items-center px-4 py-1 border-2 border-purple-400 hover:bg-purple-400 dark:border-white uppercase bg-white text-black hover:text-white transition duration-200 text-sm transform hover:scale-105 transition-transform w-full sm:w-32 md:w-48 lg:w-60 max-w-xs"
  style={{
    boxShadow: "1px 1px rgba(168,85,247), 2px 2px rgba(168,85,247), 3px 3px rgba(168,85,247), 4px 4px rgba(168,85,247), 5px 5px rgba(168,85,247)",
    transition: "box-shadow 0.2s ease-in-out",
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "1px 1px white, 2px 2px white, 3px 3px white, 4px 4px white, 5px 5px white"}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = "1px 1px rgba(168,85,247), 2px 2px rgba(168,85,247), 3px 3px rgba(168,85,247), 4px 4px rgba(168,85,247), 5px 5px rgba(168,85,247)"}
>
  <div>
    <div className="text-xs sm:text-sm md:text-base lg:text-lg">Get it on</div>
    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl">Play Store</div>
  </div>
</button>


    </>
  );
};

export default DownloadBtn;
