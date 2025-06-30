import { Button } from "@/components/ui/button"
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react"
import { Timeline } from "@/components/ui/timeline";
import FloatingMenuButton from "../components/FloatingMenuButton";
import MovingSections from "../components/MovingSections";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";
import NumbersSection from "../components/Numbers";
import { motion } from "framer-motion";


const data = [
  {
    title: "Laughter Yoga",
    content: (
      <div>
        <p className="mb-8 text-xs font-medium text-neutral-800 md:text-base dark:text-neutral-200">
          Laugh. Breathe. Begin. Laughter Yoga helps relieve stress and
          boosts mood by combining unconditional laughter with yogic breathing.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="/t1-m1.webp" alt="Laughter yoga 1" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60 shadow-2xl" />
          {/* <img src="/t1-m2.webp" alt="Laughter yoga 2" className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 shadow-2xl" /> */}
          {/* <img src="/t1-m3.webp" alt="Laughter yoga 3" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          <img src="/t1-m4.webp" alt="Laughter yoga 4" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
        </div>
      </div>
    ),
  },
  {
    title: "Meditation",
    content: (
      <div>
        <p className="mb-8 text-xs text-neutral-800 md:text-base font-medium dark:text-neutral-200">
          Meditation is the practice of training awareness and achieving a
          mentally clear, emotionally calm, and stable state.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="/t2-m1.webp" alt="Meditation 1" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          {/* <img src="/t2-m2.webp" alt="Meditation 2" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
          {/* <img src="/t2-m3.webp" alt="Meditation 3" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          <img src="/t2-m4.webp" alt="Meditation 4" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
        </div>
      </div>
    ),
  },
  {
    title: "Yoga Nidra",
    content: (
      <div>
        <p className="mb-4 text-xs font-medium text-neutral-800 md:text-base dark:text-neutral-200">
          Yoga Nidra is a state of consciousness between waking and sleeping.
          A powerful technique to relax deeply and release tension.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="t3-m1.webp" alt="Yoga Nidra 1" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          {/* <img src="t3-m3.webp" alt="Yoga Nidra 2" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
          {/* <img src="t3-m3.webp" alt="Yoga Nidra 3" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          <img src="t3-m4.webp" alt="Yoga Nidra 4" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
        </div>
      </div>
    ),
  },
  {
    title: "Guided Meditation",
    content: (
      <div>
        <p className="mb-4 text-xs font-medium text-neutral-800 md:text-base dark:text-neutral-200">
          Become a certified laughter yoga leader. Learn techniques, build
          confidence, and spread joy in your community.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="t4-m1.webp" alt="Training 1" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          {/* <img src="t4-m2.webp" alt="Training 2" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
          {/* <img src="t4-m3.webp" alt="Training 3" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          <img src="t4-m4.webp" alt="Training 4" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" /> */}
        </div>
      </div>
    ),
  },
  // {
  //   title: "Laughter Yoga Training",
  //   content: (
  //     <div>
  //       <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //         Become a certified laughter yoga leader. Learn techniques, build
  //         confidence, and spread joy in your community.
  //       </p>
  //       <div className="grid grid-cols-2 gap-4">
  //         <img src="/images/training-1.jpg" alt="Training 1" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
  //         <img src="/images/training-2.jpg" alt="Training 2" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
  //         <img src="/images/training-3.jpg" alt="Training 3" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
  //         <img src="/images/training-4.jpg" alt="Training 4" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
  //       </div>
  //     </div>
  //   ),
  // },
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
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex items-center justify-between px-6 sm:py-6 md:px-12"
        >
          <div className="flex items-center space-x-2 pt-7 sm:pt-0">
            <img src="logo.png" alt="logo" className="hidden sm:block h-14" />
            <img src="logo-sm.png" alt="logo" className="sm:hidden h-10" />
          </div>

          <div className="flex items-center mr-28 gap-4">
            <span className="hidden lg:block text-gray-700 font-semibold">
              Your Body. Your Ritual.
            </span>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="hidden sm:block bg-orange-400 rounded-2xl hover:bg-orange-600">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-end min-h-[calc(100vh-120px)] px-4 sm:px-6 md:px-20 sm:pt-16 pb-10 sm:pb-0">

          {/* Desktop View Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="hidden md:block max-w-xl mb-8 sm:mb-28 text-center md:text-left"
          >
            <p className="text-gray-800 text-sm sm:text-base mb-2 sm:mb-4 font-bold">
              Yoga. Uncomplicated
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-8">
              Start Your Journey
              <br />
              to Inner Peace
            </h1>
            <div className="hidden sm:flex justify-center md:justify-start space-x-4 mt-4">
              <a href="" target="_blank">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
              </a>
            </div>
          </motion.div>

          {/* Mobile View Text + Button Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="block md:hidden w-full text-center my-auto pt-[550px] px-4 relative z-10"
          >
            <div className="bg-white/70 backdrop-blur-sm inline-block px-4 py-2 rounded-xl shadow-md">
              <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                “Laugh. Breathe. Begin.”
              </h1>
            </div>

            <div className="bg-white/70 rounded-lg flex justify-center items-center px-3 py-2 space-x-4 mt-4 w-fit mx-auto shadow-sm">
              <a href="" target="_blank">
                <Facebook className="w-5 h-5 text-gray-700 hover:text-gray-800 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Youtube className="w-5 h-5 text-gray-700 hover:text-gray-800 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Instagram className="w-5 h-5 text-gray-700 hover:text-gray-800 cursor-pointer" />
              </a>
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-800 cursor-pointer" />
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-medium mt-6 shadow-lg">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Right-side Buttons for Desktop */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="hidden md:flex flex-col sm:flex-row items-center justify-end gap-4 sm:mb-28"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full text-base font-medium">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-base font-medium bg-transparent"
              >
                Live Sessions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-[#e4e0d5] text-gray-900 font-sans relative overflow-hidden px-6 md:px-16 py-24">
        {/* Centered Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border border-gray-950 rounded-xl p-10 text-center max-w-3xl mx-auto relative z-10 mt-10 md:mt-16"
        >
          <div className="flex justify-center px-10 md:px-24">
            <span className="text-base md:text-base font-bold sm:mt-0 mt-12">About us</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mt-10 mb-6"
          >
            Move. Breathe. Transform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed text-gray-700 mb-10"
          >
            Yoga isn't just about poses—it's about unlocking your potential. At our Yoga Studio, we blend
            movement, breath, and mindfulness to help you build strength, relieve stress, and feel your best.
            Whether you're looking for an energizing flow or a grounding practice, your transformation starts here.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 border border-gray-600 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-100 transition mb-[105px] sm:mb-0"
            href="#"
          >
            meet our instructors
          </motion.a>
        </motion.main>

        {/* Decorative Images */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute z-10 top-10 left-10 md:top-12 md:left-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
        >
          <img src="/ab-5.jpg" alt="window shadow" className="w-full h-full object-cover rounded-xl" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute z-10 bottom-5 right-10 sm:bottom-10 sm:right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
        >
          <img src="/ab-4.jpg" alt="vase" className="w-full h-full object-cover rounded-xl" />
        </motion.div>
      </div>
      
      <div className="min-h-screen font-sans bg-[#f5f1eb]">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">
          
          {/* Left Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[50%] space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-800">Meet Your Instructor</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              With over a decade of experience in yoga and wellness, <strong>Anju Shahani</strong> brings a compassionate and empowering approach to each session. Her practice blends traditional wisdom with modern techniques to help students find balance, strength, and clarity.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-orange-400 pl-4 italic text-gray-600 text-base"
            >
              "Yoga is not about touching your toes, it's about what you learn on the way down."
            </motion.div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Aria is a certified Hatha and Vinyasa yoga teacher, known for her dynamic flows, alignment focus, and calming energy. Whether you're a beginner or experienced yogi, her classes are crafted to meet you exactly where you are.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[40%] flex justify-center"
          >
            <img src="ab-1.png" alt="Instructor" className="rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
      
      <div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>

      <div className="min-h-screen font-sans">
        <MovingSections />
      </div>

      <div className="pb-32 sm:pb-0 sm:min-h-screen font-sans bg-[#f5f1eb]">
        <Testimonial />

        {/* YouTube Videos Section */}
        <div className="px-6 md:px-20 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Watch Our Sessions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-[170px] sm:h-[250px]"
                src="https://www.youtube.com/embed/CoyjsfCPZsA?si=sUbPrWJFDZ9rFVzU"
                title="YouTube video player 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-[170px] sm:h-[250px]"
                src="https://www.youtube.com/embed/hdHoHJCD7f0?si=bclJrA6lgpL8UuWF"
                title="YouTube video player 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-[170px] sm:h-[250px]"
                src="https://www.youtube.com/embed/S2EM1IyuWUg?si=gQxtdfldW231p5j0"
                title="YouTube video player 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <NumbersSection />

      <div className="relative min-h-screen font-sans bg-[#f5f1eb]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="ctr.png" alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pb-10">
          
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/logo-sm.png"
            alt="Woman meditating"
            className="h-16 w-16 mb-3 object-fill"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight"
          >
            Ready to Begin <br /> Your Yoga <br /> Journey?
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Get Started
          </motion.button>

        </div>
      </div>  

      <Footer />
    </div>
  )
}
