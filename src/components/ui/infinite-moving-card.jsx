
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast", 
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
      }}
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
      
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-black px-6 py-6 shadow-md dark:border-zinc-700 dark:bg-zinc-800"
            key={`${item.name}-${idx}`}
          >
            <h1 className="font-semibold mb-3 text-gray-900 dark:text-white">
              {item.title}
            </h1>
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-gray-700 dark:text-gray-200">
                {item.quote}
              </span>
              <div className="relative z-20 mt-4 flex flex-row items-center">
                <span className="flex items-center gap-2">
                  <div className="rounded-full h-14 w-14 flex items-center justify-center text-white text-sm font-semibold border bg-gray-200">
                    <img src={item.companyLogo} alt={item.companyLogo} className="p-2" />
                  </div>
                  <span className="text-sm leading-[1.6] font-medium text-gray-600 dark:text-gray-400">
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

