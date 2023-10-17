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
  'Basic DNS Management',
];
const tools = ['Node', 'Git', 'Linux', 'VSCode'];

export function Skills() {
  return (
    <div className="flex flex-col items-start gap-2">
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
    <>
      <Header>{header}</Header>
      <div className="mb-2 mt-1 flex flex-wrap gap-1">
        {skills.map((item) => (
          <Badge>{item}</Badge>
        ))}
      </div>
    </>
  );
}
