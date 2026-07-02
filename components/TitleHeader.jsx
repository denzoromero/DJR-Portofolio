import { useEffect, useState, useRef } from "react";

export default function AboutGlitch({ title, onComplete, onReset}) {
  const originalText = title;
  const [text, setText] = useState(originalText);
  const elementRef = useRef(null);

  const binaryChars = ["0", "1"];

  useEffect(() => {
    let interval;

    function glitch() {
      let iterations = 0;

      clearInterval(interval); // ✅ prevent stacking intervals

      interval = setInterval(() => {
        const newText = originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            if (index < iterations) {
              return char;
            }

            return binaryChars[Math.floor(Math.random() * 2)];
          })
          .join("");

        setText(newText);

        if (iterations > originalText.length) {
          clearInterval(interval);
          onComplete?.();
        }

        iterations += 0.3;
      }, 40);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ✅ trigger every time visible
          setTimeout(() => glitch(), 100);
        } else {
          // ✅ reset when leaving screen
          setText(originalText);
          onReset?.();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      clearInterval(interval);
    };
  }, [originalText]);

  return (
    <div ref={elementRef} className="flex justify-center py-3">
      <p className="text-5xl text-red-600 tracking-widest font-galaxy cyber-outline font-bold">
        {text}
      </p>
    </div>
  );
}