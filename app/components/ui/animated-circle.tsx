import { motion } from 'framer-motion';

// Its parent must be `relative` positioned
export function AnimatedCircle() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 z-10 -rotate-90"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        className="stroke-muted"
        strokeWidth="2"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        className="stroke-foreground"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileHover={{ pathLength: 1 }}
      />
    </motion.svg>
  );
}
