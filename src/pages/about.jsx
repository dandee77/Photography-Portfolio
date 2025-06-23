import { forwardRef } from "react";
import { motion } from "framer-motion";

const About = forwardRef(({ bgColor }, ref) => (
  <motion.section
    id="about"
    ref={ref}
    className="flex flex-col items-center justify-center gap-10"
    style={{ minHeight: "100vh", backgroundColor: bgColor }}
  >
    <h2 className="text-7xl font-extrabold text-black dark:text-white">
      About&nbsp;me!
    </h2>

    <div className="w-[80%] h-[70%] bg-amber-400 rounded-xl shadow-xl" />
  </motion.section>
));

export default About;
