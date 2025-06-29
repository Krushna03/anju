import { Button } from "@/components/ui/button"
import { Facebook, Youtube, Instagram, Linkedin, ChevronDown, Plus } from "lucide-react"
import { Timeline } from "@/components/ui/timeline";
import FloatingMenuButton from "../components/FloatingMenuButton";
import MovingSections from "../components/MovingSections";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";
import { MdMarkEmailUnread } from "react-icons/md";


const data = [
  {
    title: "Laughter Yoga",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Meditation",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Yoga Nidra",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Card grid component
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Startup template Aceternity
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Random file upload lol
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Laughter Yoga Training",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Card grid component
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Startup template Aceternity
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Random file upload lol
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export default function Base() {
  return (
    <div className="scrollbar-hide">
      <FloatingMenuButton />

      <div className="bg-[#e4e0d5] min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full">
        <img
          src="/banner-6.png"
          alt="Woman meditating"
          className="hidden sm:block h-full w-full object-fill"
        />
        <img
          src="/banner-sm-1.png"
          alt="Woman meditating"
          className="block sm:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="logo" className="hidden sm:block h-14" />
          <img src="logo-sm.png" alt="logo" className="sm:hidden h-10" />
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-700 font-semibold">
            Your Body. Your Ritual.
          </span>
          <Button className="hidden sm:block bg-orange-400 rounded-2xl hover:bg-orange-600">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-end min-h-[calc(100vh-120px)] px-4 sm:px-6 md:px-20 pt-10 sm:pt-16 pb-10 sm:pb-0">
        
      {/* Desktop View Text Section */}
      <div className="hidden sm:block max-w-xl mb-8 sm:mb-28 text-center md:text-left">
        <p className="text-gray-800 text-sm sm:text-base mb-2 sm:mb-4 font-bold">
          Yoga. Uncomplicated
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-8">
          Start Your Journey
          <br />
          to Inner Peace
        </h1>
        <div className="hidden sm:flex justify-center md:justify-start space-x-4 mt-4">
          <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>

      {/* Mobile View Text + Button Section */}
      <div className="block sm:hidden w-full text-center my-auto">
        <div className="mt-[730px]"> {/* Increased from mt-8 to mt-20 */}
          <h1 className="text-2xl font-semibold text-gray-900 leading-snug mt-10">
          "Laugh. Breathe. Begin.
          </h1>
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-medium mt-1">
            Get Started
          </Button>
        </div>
      </div>

        {/* Right-side Buttons for Desktop */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-end gap-4 sm:mb-28">
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full text-base font-medium">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-base font-medium bg-transparent"
          >
            View Classes
          </Button>
        </div>
      </div>
    </div>


      <div className="min-h-screen bg-[#e4e0d5] text-gray-900 font-sans relative overflow-hidden px-6 md:px-16 py-24">
        {/* Centered Main Content */}
        <main className="border border-gray-950 rounded-xl p-10 text-center max-w-3xl mx-auto relative z-10 mt-20">
          <div className="flex justify-between px-24">
            <span className="text-sm md:text-base font-medium">About us</span>
            {/* <span className="text-sm md:text-base font-medium">Yoga, Uncomplicated</span> */}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6">
            Move. Breathe. Transform
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-10">
            Yoga isn't just about poses—it's about unlocking your potential. At our Yoga Studio, we blend
            movement, breath, and mindfulness to help you build strength, relieve stress, and feel your best.
            Whether you're looking for an energizing flow or a grounding practice, your transformation starts here.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 border border-gray-600 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-100 transition mb-[105px] sm:mb-0"
          >
            meet our instructors
          </a>
        </main>

        {/* Decorative Images (optional) */}
        <div className="absolute z-50 top-16 left-20 w-48 h-48 md:w-96 md:h-w-96">
          <img src="/ab-5.jpg" alt="window shadow" className="w-full h-full object-fill rounded-xl" />
        </div>
        <div className="absolute z-50 bottom-5 sm:bottom-16 right-24 sm:right-20 w-48 h-48 md:w-96 md:h-w-96">
          <img src="/ab-4.jpg" alt="vase" className="w-full h-full object-cover rounded-xl" />
        </div>
        </div>

{/* 
      <div className="min-h-screen font-sans relative overflow-hidden px-6 md:px-16 py-24">
        <div className="absolute inset-0 z-0 h-[calc(100vh-0px)]">
          
          <div className="absolute top-[30%] left-[47%] space-x-2">
            <div className="flex justify-center">
              <div className="left-20 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black" />
              </div>
            </div>
            <div>
              <div className="text- font-bold text-gray-800">Yoga Studio</div>
            </div>
          </div>  
          <img
            src="/flow.jpg"
            alt="Woman meditating in peaceful pose"
            className="h-full w-full object-fill"
          />
          <div className="absolute top-[40%] inset-2 z-20 bg-green text-center">
            <h1 className="text-black font-semibold text-6xl">Find Your Flow</h1>
            <Button className="mt-5 text-black text-base border-black rounded-full bg-orange-400 px-6">
              Join us on the mat
            </Button>
          </div>
        </div>
      </div> */}
      
      <div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>

      <div className="min-h-screen font-sans">
        <MovingSections />
      </div>

      <div className="min-h-screen font-sans bg-[#f5f1eb]">
        <Testimonial />
      </div>

      <div className="min-h-screen font-sans bg-[#f5f1eb]">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">

          {/* Left Text Section */}
          <div className="w-full md:w-[50%] space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">Meet Your Instructor</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              With over a decade of experience in yoga and wellness, <strong>Anju Shahani</strong> brings a compassionate and empowering approach to each session. Her practice blends traditional wisdom with modern techniques to help students find balance, strength, and clarity.
            </p>

            <div className="border-l-4 border-orange-400 pl-4 italic text-gray-600 text-base">
              "Yoga is not about touching your toes, it's about what you learn on the way down."
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Aria is a certified Hatha and Vinyasa yoga teacher, known for her dynamic flows, alignment focus, and calming energy. Whether you're a beginner or experienced yogi, her classes are crafted to meet you exactly where you are.
            </p>

            <button className="mt-4 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-[40%] flex justify-center">
            <img src="ab-1.png" alt="Instructor" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="relative min-h-screen font-sans bg-[#f5f1eb]">
        <div className="absolute inset-0 z-0">
          <img src="ctr.png" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pb-10">
          <div className="mb-2">
            <div className="w-10 h-10 rounded-full border-4 border-orange-500 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-orange-500" />
            </div>
          </div>

          <div className="text-xl font-semibold text-gray-800 mb-4">
            Yoga Studio
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Ready to Begin <br /> Your Yoga <br /> Journey?
          </h1>

          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300">
            Get Started
          </button>

        </div>
      </div>  

      <Footer />
    </div>
  )
}
