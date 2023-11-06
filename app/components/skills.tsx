import { Badge } from './ui/badge';
import { CardContainer } from './ui/card-container';
import { Header } from './ui/header';

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
    <div className="mt-5 flex flex-col gap-3 sm:gap-4">
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
    <CardContainer>
      <Header className="text-xl sm:text-2xl">{header}</Header>
      <div className="mt-3 flex flex-wrap gap-1">
        {skills.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </CardContainer>
  );
}
