"use client"

import { motion } from "framer-motion";
import { PiGearSixFill } from "react-icons/pi";

export default function UnderConstruction() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Perfectly looped gear animations
  const gear1Animation = {
    rotate: [0, 360],
    transition: {
      times: [0, 1],
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0,
    },
  };

  const gear2Animation = {
    rotate: [0, -360],
    transition: {
      times: [0, 1],
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0,
    },
  };

  return (
    <div className="h-screen flex items-center justify-center bg-construction-bg overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="max-w-xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo placeholder */}
          <motion.div
            className="mx-auto w-20 h-20 bg-construction-accent-transparent rounded-full mb-4 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-construction-text text-3xl font-bold">D</div>
          </motion.div>

          {/* Company name */}
          <motion.div className="mb-5" variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tight text-construction-text">
              Desmare
            </h1>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-construction-text"
            variants={itemVariants}
          >
            Sito in costruzione
          </motion.h2>

          {/* Subheading */}
          <motion.h3
            className="text-xl md:text-2xl text-construction-text-secondary mb-10"
            variants={itemVariants}
          >
            Desmare sarà presto online!
          </motion.h3>

          {/* Animated construction graphic */}
          <motion.div
            className="relative h-44 w-44 mx-auto mb-10"
            variants={itemVariants}
          >
            {/* Gear animations */}
            <motion.div
              className="absolute top-4 left-4 text-construction-accent"
              animate={gear1Animation}
              style={{ originX: "center", originY: "center" }}
            >
              <PiGearSixFill size={72} />
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 text-construction-accent"
              animate={gear2Animation}
              style={{ originX: "center", originY: "center" }}
            >
              <PiGearSixFill size={72} />
            </motion.div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants}>
            <div className="border-construction-border border-2 rounded-lg py-4 px-6 inline-block shadow-sm">
              <h3 className="text-lg md:text-xl font-medium text-construction-text">
                Per maggiori informazioni:{" "}
                <a
                  href="mailto:info@desmare.it"
                  className="text-construction-accent hover:underline"
                >
                  info@desmare.it
                </a>
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
