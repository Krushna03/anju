import { useEffect, useState, useRef } from "react";

const sections = [
  {
    id: 1,
    number: "01",
    title: "Strength &\nFlexibility",
    description:
      "Yoga builds full-body strength and improves flexibility, helping you move with ease and confidence in your daily life.",
    image: "ab-3.jpg",
    alt: "Woman doing yoga pose for strength and flexibility",
  },
  {
    id: 2,
    number: "02",
    title: "Stress Relief\n& Mental Clarity",
    description:
      "Through mindful breathing and movement, yoga calms the nervous system, reduces stress, and enhances mental focus.",
    image: "flow.jpg",
    alt: "Person in child's pose for stress relief",
  },
  {
    id: 3,
    number: "03",
    title: "Better Posture\n& Pain Relief",
    description:
      "By strengthening muscles and improving alignment, yoga helps alleviate back pain, tension, and discomfort caused by poor posture.",
    image: "pexel1.jpg",
    alt: "Woman in meditation pose for better posture",
  },
];

export default function MovingSections() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollStart = -rect.top;
      const scrollRange = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${(sections.length + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((section, index) => {
          const sectionStart = index / sections.length;
          const sectionEnd = (index + 1) / sections.length;
          const sectionProgress = (scrollProgress - sectionStart) / (sectionEnd - sectionStart);

          let opacity = 0;
          let translateY = 50;
          let scale = 0.95;

          if (index === sections.length - 1) {
            // For last section, make it fully visible and static
            if (scrollProgress >= sectionStart) {
              opacity = 1;
              translateY = 0;
              scale = 1;
            } else {
              opacity = 0;
            }
          } else {
            if (scrollProgress >= sectionStart && scrollProgress < sectionEnd) {
              opacity = 1;
              translateY = 0;
              scale = 1;
            } else if (scrollProgress < sectionStart) {
              opacity = Math.max(0, 1 - (sectionStart - scrollProgress) * 10);
              translateY = 50;
              scale = 0.95;
            } else {
              opacity = Math.max(0, 1 - (scrollProgress - sectionEnd) * 10);
              translateY = -30;
              scale = 0.9;
            }
          }

          const zIndex = sections.length - index;

          return (
            <div
              key={section.id}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                zIndex,
                opacity,
                transform: `translateY(${translateY}%) scale(${scale})`,
                pointerEvents: opacity > 0.5 ? "auto" : "none",
              }}
            >
              <div className="w-full h-full relative">
                <img
                  src={section.image}
                  alt={section.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-20 flex items-center h-full px-6 md:px-12">
                  <div className="max-w-2xl space-y-6">
                    <div className="text-sm font-medium text-white/80 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                      {section.number}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line drop-shadow-lg">
                      {section.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
