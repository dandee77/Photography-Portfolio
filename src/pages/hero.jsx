import { motion } from "framer-motion";
import GradientText from "../components/gradient_text";

export default function Hero({ bgColor, textOpacity }) {
  return (
    <motion.section
      id="home"
      style={{ minHeight: "100vh", backgroundColor: bgColor }}
    >
      <motion.h1
        className="text-white text-7xl font-extrabold leading-tight fade-text"
        style={{ opacity: textOpacity }}
      >
        Turning ideas into{" "}
        <GradientText
          className="fade-text"
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={10}
        >
          creative
        </GradientText>
      </motion.h1>

      <motion.h1
        className="text-white text-7xl font-extrabold mb-8 fade-text"
        style={{ opacity: textOpacity }}
      >
        solutions
      </motion.h1>

      <motion.p
        className="text-gray-400 text-xl fade-text"
        style={{ opacity: textOpacity }}
      >
        Innovative web developer crafting unique user experiences.
      </motion.p>
    </motion.section>
  );
}
