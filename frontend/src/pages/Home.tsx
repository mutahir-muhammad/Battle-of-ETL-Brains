import { motion } from "motion/react";
import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";

const parent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 12,
    },
  },
};

const Home = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setButtonEnabled(true)}
    >
      <motion.div className="flex justify-center mt-10" variants={fadeInUp}>
        <Heading
          fontFamily="font-mono"
          textSize="text-5xl"
          textColor="text-emerald-500"
          fontWeight="font-semibold"
        >
          Battle of Brains
        </Heading>
      </motion.div>

      <motion.div className="flex justify-center mt-20" variants={fadeInUp}>
        <Button
          disabled={!buttonEnabled}
          size="lg"
          className="border-2 border-emerald-500 text-emerald-500 hover:text-white hover:bg-emerald-500"
        >
          Start Quiz
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
