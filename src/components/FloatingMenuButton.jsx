import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-8 right-4 md:right-12 z-30"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-gray-300 hover:bg-white transition"
        >
          <Plus className="w-5 h-5 text-gray-800" />
          <span className="text-sm font-semibold text-gray-800">Menu</span>
        </motion.button>
      </motion.div>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-80 bg-white text-black shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col items-center p-6">
              <ul className="space-y-4">
                {["Home", "About", "Services", "Videos", "Testimonial"].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      onClick={handleMenuItemClick}
                      className="w-full text-xl font-semibold py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenuButton;