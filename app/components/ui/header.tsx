import { cn } from '~/lib/cn';
import { motion } from 'framer-motion';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export function Header({ children, ...rest }: HeaderProps) {
  return (
    <div className="flex justify-start">
      <div>
        <h1 className={cn('font-bold', rest.className)}>{children}</h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="h-2 origin-left rounded-xl bg-primary"
          style={{
            clipPath: 'polygon(100% 20%, 0% 80%, 100% 100%)',
          }}
        ></motion.div>
      </div>
    </div>
  );
}
