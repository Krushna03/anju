import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <footer className="bg-[#e8ddd4] px-8 py-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:pb-10"
        >
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="/logo.png"
              alt="Woman meditating"
              className="sm:h-20 sm:w-80 object-fill mb-5"
            />
            <div className="space-y-2">
              <p className="text-gray-900 font-medium text-lg">+971 50 9052882 (Dubai)</p>
              <p className="text-gray-900 font-medium text-lg">+91 9769207468 (India)</p>
              <p className="text-gray-900 font-medium text-lg">Anju.d.shahani@gmail.com</p>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 lg:max-w-xs"
          >
            {/* Location */}
            <div className="mb-6">
              <h3 className="text-gray-600 text-sm mb-2">location</h3>
              <p className="text-gray-800 font-medium">UAE.</p>
              <p className="text-gray-800 font-medium">DUBAI.</p>
            </div>

            {/* Working Hours */}
            <div className="mb-6">
              <h3 className="text-gray-600 text-sm mb-2">working hours</h3>
              <div className="space-y-1">
                <p className="text-gray-800 font-medium">Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p className="text-gray-800 font-medium">Saturday & Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-gray-600 text-sm mb-3">connect with us</h3>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-400 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600"
        >
          <p>©Anju Shashani 2025</p>
          <p>Build with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
}
