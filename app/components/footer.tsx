import { A } from './ui/a';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="mt-auto flex justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl px-2 py-4 text-center text-muted-foreground sm:px-0 sm:text-left"
      >
        🎉&nbsp;&nbsp; Built with <A href="https://remix.run/">Remix</A>,{' '}
        <A href="https://tailwindcss.com/">Tailwind CSS</A> and{' '}
        <A href="https://www.framer.com/motion/">Framer Motion</A>. The source
        code is available on{' '}
        <A href="https://github.com/leandronorcio/personal-website">Github</A>.
      </motion.p>
    </footer>
  );
}
