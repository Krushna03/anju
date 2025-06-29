import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export default function Testimonial() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Quote and Heading */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 py-12 sm:py-20">
        {/* Left Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 sm:w-[40%] w-full">
          Testimonials
        </h1>

        {/* Right Quote Section */}
        <div className="flex gap-4 sm:w-[60%] w-full">
          {/* Quote Icon */}
          <span className="text-4xl sm:text-6xl text-orange-400 leading-none">”</span>

          {/* Main Heading Text */}
          <div className="text-gray-900 text-xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Real moments,
            <br className="hidden sm:block" />
            Real experiences,
            <br className="sm:hidden" />
            Real feedback.
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full mt-8 sm:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom. It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/timeline-banner.jpg",
    companyLogo: "/amazon.svg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind. To be, or not to be, that is the question: Whether 'tis nobler in the mind..",
    name: "William Shakespeare",
    title: "Hamlet",
    image: "/timeline-banner.jpg",
    companyLogo: "/meta.svg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream. All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/timeline-banner.jpg",
    companyLogo: "/google.webp",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession.It is a truth universally acknowledged, that a single man in possession ..",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/timeline-banner.jpg",
    companyLogo: "/atlassian.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely...",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/timeline-banner.jpg",
    companyLogo: "/microsoft.webp",
  },
];