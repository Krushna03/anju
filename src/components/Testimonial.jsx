import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "./ui/infinite-moving-card"

export default function Testimonial() {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Quote and Heading */}
        <div className="flex items-start justify-between gap-4  py-20">
          <h1 className="w-[40%] text-3xl font-semibold text-gray-800">Testimonials</h1>

          <div className="w-[60%] flex items-start gap-4">
            {/* Orange quote icon */}
            <span className="text-5xl md:text-6xl text-orange-400 leading-none">”</span>

            {/* Main Heading */}
            <div className="text-gray-900 text-3xl md:text-4xl font-semibold leading-snug">
              Real moments,
              Real experiences, <br />
              Real feedback.
            </div>
          </div>
        </div>


        <div className="w-full mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

      </div>
    </>
  )
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/timeline-banner.jpg"
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image: "/timeline-banner.jpg"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/timeline-banner.jpg"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/timeline-banner.jpg"
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/timeline-banner.jpg"
  },
];