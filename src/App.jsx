import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollFloat from "./components/scroll_float";
import GradientText from "./components/gradient_text";
import Beams from "./components/beams";

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
        <section id="home" className="bg-[#111111]">
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={0}
            />
          </div>
          <h1 className="text-white text-7xl z-10 font-extrabold">
            Turning ideas into{""}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
              creative
            </GradientText>
          </h1>
          <h1 className="text-white text-7xl z-10 font-extrabold mb-8">
            solutions
          </h1>
          <p className="text-gray-400 text-1xl z-10 font-normal">
            Innovative web developer crafting
          </p>
          <p className="text-gray-400 text-1xl z-10 font-normal">
            unique user experiences.
          </p>
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
