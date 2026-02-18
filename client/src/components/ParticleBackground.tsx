import { motion } from "framer-motion";

export function ParticleBackground() {
  // A simple CSS/SVG based particle effect since we don't want to import heavy libraries
  // This creates floating embers/particles
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),rgba(0,0,0,0))]" />
      
      {/* Animated Embers */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-orange-500/40 rounded-full blur-[1px]"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: "100%",
          }}
          animate={{
            y: [0, -1000],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
