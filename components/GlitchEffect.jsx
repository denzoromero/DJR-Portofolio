import { useEffect, useState } from "react";

import './GlitchEffect.css'

export default function HeroText() {
  const texts = [
    "Daby John Romero",
    "Full-Stack Developer"
  ];

  const [index, setIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {

      // trigger glitch
      setIsGlitching(true);

      // after glitch, change text
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsGlitching(false);
      }, 400); // glitch duration

    }, 3000); // time between changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3
        className={`text-yellow-300 text-6xl tracking-widest font-orbitron glitch-main  ${
          isGlitching ? "glitch-active" : ""
        }`}

           style={{
                            textShadow: `
                            0 0 3px #00f0ff,
                            0 0 6px #00f0ff,
                            0 0 12px #00f0ff
                            `
                        }}

      >
        {texts[index]}
        <span className="glitch-space">{texts[index]}</span>
      </h3>
    </div>
  );
}