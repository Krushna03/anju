import { useEffect, useState } from "react";

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

export default function NumbersSection() {
  const livesChanged = useCountUp(100);
  const satisfactionRate = useCountUp(99);
  const clientRetention = useCountUp(97);
  const emailVolume = useCountUp(70);

  return (
    <section className="pb-20 sm:pb-32 px-4 bg-[#f5f1eb]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-medium text-gray-800 uppercase tracking-wider mb-4">TALKING ABOUT NUMBERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">We Believe in Numbers</h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Client Retention */}
          <div className="text-center">
            <div className="relative inline-block mb-10">
              <div className="bg-orange-400 rounded-full w-32 h-32 flex items-center justify-center transform -rotate-12 shadow-lg">
                <span className="text-white text-3xl font-bold transform rotate-12">{clientRetention}%</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Client Retention</h3>
            <p className="text-gray-600 text-sm">Verify your business so your information is eligible maps</p>
          </div>

          {/* Email Volume */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-[#635657] rounded-3xl w-32 h-24 flex items-center justify-center transform rotate-6 shadow-lg">
                <span className="text-white text-2xl font-bold transform -rotate-6">{emailVolume}+</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfied Companies</h3>
            <p className="text-gray-600 text-sm">Many big companies satistfied with our Yoga sessions.</p>
          </div>

          {/* Lives Changed */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-[#819867] rounded-full w-32 h-32 flex items-center justify-center transform -rotate-6 shadow-lg">
                <span className="text-white text-3xl font-bold transform rotate-6">{livesChanged}K</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">More Than 100,000 Lives</h3>
            <p className="text-gray-600 text-sm">Have Been Changed After Practicing With us.</p>
          </div>

          {/* Satisfaction Rate */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="bg-[#ff2370] rounded-full w-32 h-32 flex items-center justify-center transform rotate-6 shadow-lg">
                <span className="text-white text-3xl font-bold transform -rotate-6">{satisfactionRate}.9%</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600 text-sm">Individuals and Groups are Satisfied When Working With us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
