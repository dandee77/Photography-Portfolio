/* ─────────────────────────  App.jsx  (Framer Motion version) ───────────────────────── */
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import ScrollFloat from "./components/scroll_float";
import GradientText from "./components/gradient_text";

export default function App() {
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 120,
  });

  const bg = useTransform(smoothProgress, [0, 1], ["#111111", "#ffffff"]);
  const text = useTransform(smoothProgress, [0, 1], [1, 0]);

  return (
    <div>
      {/* ───────── HERO ───────── */}
      <motion.section
        id="home"
        style={{ minHeight: "100vh", backgroundColor: bg }}
      >
        <motion.h1
          className="text-white text-7xl font-extrabold leading-tight fade-text"
          style={{ opacity: text }}
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
          style={{ opacity: text }}
        >
          solutions
        </motion.h1>

        <motion.p
          className="text-gray-400 text-xl fade-text"
          style={{ opacity: text }}
        >
          Innovative web developer crafting unique user experiences.
        </motion.p>
      </motion.section>

      {/* ───────── ABOUT ───────── */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="flex items-center justify-center"
        style={{ minHeight: "100vh", backgroundColor: bg }} /* same bg bind */
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(3)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.05}
        >
          About&nbsp;me!
        </ScrollFloat>
      </motion.section>

      {/* ───────── REST ───────── */}
      <section id="skills" className="bg-white text-black min-h-screen p-10">
        <h1 className="text-4xl font-bold">These Are My Strengths</h1>
      </section>

      <section id="projects" className="bg-white text-black min-h-screen p-10">
        <h1 className="text-4xl font-bold">These Are My Results</h1>
      </section>

      <section id="contact" className="bg-white text-black min-h-screen p-10">
        <h1 className="text-4xl font-bold">Available Anytime</h1>
      </section>
    </div>
  );
}
