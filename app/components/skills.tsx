import { Badge } from './ui/badge';
import { Header } from './ui/header';

const languages = ['TypeScript', 'JavaScript', 'CSS', 'HTML', 'Python'];
const frontEndSkills = [
  'React',
  'React Native',
  'React Router (and Remix)',
  'React Query',
  'NextJS',
  'TailwindCSS',
  'Framer Motion',
];
const backEndSkills = [
  'ExpressJS',
  'PostgreSQL',
  'Prisma',
  'OAuth 2.0',
  'OpenID Connect',
  'EC2',
  'S3',
  'DNS Management',
];
const tools = ['Node.js', 'Git', 'Linux', 'VSCode'];

export function Skills() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <SkillsSection header="Languages" skills={languages} />
      <SkillsSection header="Frontend Skills" skills={frontEndSkills} />
      <SkillsSection header="Backend Skills" skills={backEndSkills} />
      <SkillsSection header="Tools" skills={tools} />
    </div>
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
    <div>
      <Header className="text-xl sm:text-2xl">{header}</Header>
      <div className="mt-2 flex flex-wrap gap-1">
        {skills.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
