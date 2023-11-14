import { cardVariant, cardsContainerVariant } from '~/lib/cardStaggerVariants';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Header } from './ui/header';
import { motion } from 'framer-motion';

const languages = ['TypeScript', 'JavaScript', 'CSS', 'HTML', 'Python'];
const frontEndSkills = [
  'React',
  'React Native',
  'React Router (and Remix)',
  'React Query',
  'Next.js',
  'TailwindCSS',
  'Framer Motion',
  'Zod',
  'React Hook Form',
];
const backEndSkills = [
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Prisma ORM',
  'OAuth 2.0',
  'OpenID Connect',
  'AWS EC2',
  'AWS S3',
  'AWS SES',
  'Cloudflare DNS Management',
];
const tools = ['Git', 'Linux', 'VSCode', 'Vite'];

export function Skills() {
  return (
    <motion.div
      variants={cardsContainerVariant}
      initial="hidden"
      animate="show"
      className="mt-5 flex flex-col gap-3 sm:gap-4"
    >
      <SkillsSection header="Languages" skills={languages} />
      <SkillsSection header="Frontend Skills" skills={frontEndSkills} />
      <SkillsSection header="Backend Skills" skills={backEndSkills} />
      <SkillsSection header="Tools" skills={tools} />
    </motion.div>
  );
}

function SkillsSection({
  header,
  skills,
}: {
  header: string;
  skills: string[];
}) {
  return (
    <motion.div variants={cardVariant}>
      <Card>
        <Header className="text-xl sm:text-2xl">{header}</Header>
        <div className="mt-3 flex flex-wrap gap-1">
          {skills.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
