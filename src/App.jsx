import { useEffect } from "react";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    const box = document.querySelector(".box");
    gsap.fromTo(
      box,
      { x: 0, opacity: 0 },
      {
        x: 100,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        onComplete: () => {
          console.log("Animation complete!");
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello, GSAP with Tailwind CSS!
        </h1>
        <div className="box bg-blue-500 w-32 h-32 mt-8 rounded-lg shadow-lg"></div>
      </header>
    </div>
  );
}

export default App;
