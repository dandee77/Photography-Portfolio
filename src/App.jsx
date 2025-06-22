import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollFloat from "./components/scroll_float";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      normalizeScroll: true,
      effects: true,
    });
    ScrollTrigger.refresh();
    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} style={{ height: "100vh" }}>
      <div id="smooth-content" ref={contentRef}>
        <section id="home">
          <h1>Dandee Design</h1>
        </section>

        <section id="about">
          <ScrollFloat
            scrollContainerRef={wrapperRef}
            animationDuration={1}
            ease="back.inOut(3)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
          >
            About me!
          </ScrollFloat>
        </section>

        <section id="skills">
          <h1>These Are My Strengths</h1>
        </section>

        <section id="projects">
          <h1>These Are My Results</h1>
        </section>

        <section id="contact">
          <h1>Available Anytime</h1>
        </section>
      </div>
    </div>
  );
}
