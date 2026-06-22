import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MoonLanding() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const starCount = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Stars background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-black" />

      {/* Moon */}
      /moon.png

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-widest"
        >
          Welcome
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-gray-300 text-lg"
        >
          Enter my world
        </motion.p>
      </div>

      {/* Optional silhouette */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-16 h-24 bg-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
}
