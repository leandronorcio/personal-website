import { Button } from './ui/button';
import { useNavigate } from '@remix-run/react';
import { motion } from 'framer-motion';

export default function MeIntro() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <div className="flex w-full flex-col items-center justify-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-sans text-2xl text-card-foreground"
        >
          Hi <span className="inline-block animate-wave">👋🏻</span> I'm Leandro
          Norcio
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-center font-serif text-3xl text-foreground sm:text-4xl"
        >
          Full Stack Developer
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-3 flex items-center gap-2 sm:gap-3"
        >
          <Button onClick={() => navigate('/contact')}>Contact me</Button>
          <Button mode="secondary">Resume</Button>
          <Button mode="secondary" onClick={() => navigate('/projects')}>
            View Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
