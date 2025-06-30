import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Count-up hook
const useCountUp = (target, duration = 2000, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = parseInt(target);
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return count;
};

export default function NumbersSection() {
  const { ref, inView } = useInView({ triggerOnce: false });

  const clientRetention = useCountUp(97, 2000, inView);
  const emailVolume = useCountUp(70, 2000, inView);
  const livesChanged = useCountUp(100, 2000, inView);
  const satisfactionRate = useCountUp(99, 2000, inView);

  return (
    <section ref={ref} className="sm:pt-20 pb-20 sm:pb-32 px-4 bg-[#f5f1eb]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-medium text-gray-800 uppercase tracking-wider mb-4">TALKING ABOUT NUMBERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">We Believe in Numbers</h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">

          {/* Card Variants */}
          {[
            {
              count: `${clientRetention}%`,
              title: "Client Retention",
              desc: "Verify your business so your information is eligible maps",
              bg: "bg-orange-400",
              rotate: "-rotate-12",
              textRotate: "rotate-12",
              size: "w-32 h-32",
            },
            {
              count: `${emailVolume}+`,
              title: "Satisfied Companies",
              desc: "Many big companies satisfied with our Yoga sessions.",
              bg: "bg-[#635657]",
              rotate: "rotate-6",
              textRotate: "-rotate-6",
              size: "w-32 h-24 rounded-3xl",
            },
            {
              count: `${livesChanged}+`,
              title: "Live Sessions Conducted",
              desc: "Over 100 live sessions successfully held with participants worldwide.",
              bg: "bg-[#819867]",
              rotate: "rotate-6",
              textRotate: "rotate-6",
              size: "w-32 h-32",
            },            
            {
              count: `${satisfactionRate}.9%`,
              title: "Customer Satisfaction",
              desc: "Individuals and Groups are Satisfied When Working With us.",
              bg: "bg-[#ff2370]",
              rotate: "rotate-6",
              textRotate: "-rotate-6",
              size: "w-32 h-32",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div
                  className={`${item.bg} ${item.size} rounded-full flex items-center justify-center transform ${item.rotate} shadow-lg`}
                >
                  <span className={`text-white text-2xl md:text-3xl font-bold transform ${item.textRotate}`}>
                    {item.count}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
