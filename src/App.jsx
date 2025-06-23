import { useLayoutEffect, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

import Hero from "./pages/hero";
import About from "./pages/about";

export default function App() {
  const pageRef = useRef(null);
  const spacerRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { damping: 24, stiffness: 120 });

  useEffect(() => {
    const unsub = smoothY.on("change", () => ScrollTrigger.update());
    return () => unsub();
  }, [smoothY]);

  const fadeProg = useMotionValue(0);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top bottom",
      end: "top 50%",
      scrub: true,
      onUpdate: (self) => fadeProg.set(self.progress),
    });
    return () => st.kill();
  }, []);

  const bgColor = useTransform(fadeProg, [0, 1], ["#111111", "#ffffff"]);
  const heroText = useTransform(fadeProg, [0, 1], [1, 0]);

  useLayoutEffect(() => {
    const setHeight = () => {
      if (pageRef.current && spacerRef.current) {
        spacerRef.current.style.height = `${pageRef.current.scrollHeight}px`;
      }
    };
    requestAnimationFrame(setHeight);
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <>
      <div ref={spacerRef} />

      <motion.div
        ref={pageRef}
        style={{
          position: "fixed",
          inset: 0,
          y: useTransform(smoothY, (v) => -v),
        }}
      >
        <Hero bgColor={bgColor} textOpacity={heroText} />
        <About ref={aboutRef} bgColor={bgColor} />

        <section id="skills" className="bg-white text-black min-h-screen p-10">
          <h1 className="text-7xl font-bold">These Are My Strengths</h1>
        </section>
        <section
          id="projects"
          className="bg-white text-black min-h-screen p-10"
        >
          <h1 className="text-7xl font-bold">These Are My Results</h1>
        </section>
        <section id="contact" className="bg-white text-black min-h-screen p-10">
          <h1 className="text-7xl font-bold">Available Anytime</h1>
        </section>
      </motion.div>
    </>
  );
}
