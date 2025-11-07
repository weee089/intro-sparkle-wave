import { motion } from 'framer-motion';

interface Orb {
  id: number;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  color: string;
}

const orbs: Orb[] = [
  { id: 1, size: 400, x: '10%', y: '20%', duration: 20, delay: 0, color: 'rgba(59, 130, 246, 0.15)' },
  { id: 2, size: 300, x: '80%', y: '30%', duration: 25, delay: 2, color: 'rgba(139, 92, 246, 0.15)' },
  { id: 3, size: 350, x: '50%', y: '60%', duration: 22, delay: 4, color: 'rgba(236, 72, 153, 0.15)' },
  { id: 4, size: 250, x: '20%', y: '70%', duration: 28, delay: 1, color: 'rgba(249, 115, 22, 0.15)' },
  { id: 5, size: 320, x: '70%', y: '80%', duration: 24, delay: 3, color: 'rgba(99, 102, 241, 0.15)' },
];

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
