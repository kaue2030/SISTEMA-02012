"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Skiper58 } from "./text-roll-navigation";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-black hover:bg-gray-100 rounded-md transition-colors z-40"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md"
          >
            {/* Header inside the menu (Close Button) */}
            <div className="w-full py-6 lg:py-8">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-black hover:bg-gray-200 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 flex items-center justify-center pb-24">
              <Skiper58 />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
