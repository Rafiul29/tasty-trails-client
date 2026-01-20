import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-zinc-800 border-t-orange-500 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400 font-medium tracking-widest uppercase text-xs"
          >
            Loading Tasty Trails
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
