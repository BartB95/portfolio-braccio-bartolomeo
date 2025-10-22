"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// ===== VARIANTS =====
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

// ===== PROPS =====
interface AnimatedProps {
  index?: number; // per delay progressivo
  children: ReactNode;
  amount?: number; // quanto deve essere visibile prima di attivarsi (default 0.2)
  once?: boolean; // se animare solo una volta
}

// ===== COMPONENTE =====
const Animated: React.FC<AnimatedProps> = ({
  index = 0,
  amount = 0.2,
  once = false,
  children,
}) => {
  return (
    <motion.div
      custom={index}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
