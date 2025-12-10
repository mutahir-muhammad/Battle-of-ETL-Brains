import clsx from "clsx";
import { motion } from "motion/react";
import { useMemo } from "react";
import type { TextSize } from "../types/TextSize";
import type { TextColor } from "../types/TextColor";
import type { FontWeight } from "../types/FontWeight";
import type { FontFamily } from "../types/FontFamily";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
    rotate: -10,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 200,
    },
  },
};

interface HeadingProps {
  children: string;
  textSize?: TextSize;
  textColor?: TextColor;
  fontWeight?: FontWeight;
  fontFamily?: FontFamily;
}

const Heading = ({
  children,
  textSize = "text-2xl",
  textColor = "text-white",
  fontWeight = "font-light",
  fontFamily = "font-sans",
}: HeadingProps) => {
  const letters = useMemo(() => children.split(""), [children]);

  const headings = clsx(
    textSize,
    textColor,
    fontWeight,
    fontFamily,
    "inline-block"
  );

  return (
    <motion.h1
      className={headings}
      variants={container}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Heading;
