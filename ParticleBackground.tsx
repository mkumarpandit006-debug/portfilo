import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-deep-navy">
      {/* Soft gradient background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/20 blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-neon-pink/10 blur-[100px]" />
      
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 20}vh`, `${p.y}vh`],
            x: [`${p.x}vw`, `${p.x + (Math.random() > 0.5 ? 5 : -5)}vw`, `${p.x}vw`],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
