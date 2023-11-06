import { PageContainer } from '~/components/page-container';
import { Header } from '~/components/ui/header';
import memojiMac from '~/photos/memoji-mac.png';

export default function About() {
  return (
    <PageContainer>
      <Header className="text-3xl">About me</Header>
      <div className="flex">
        <div className="mt-4 flex flex-col gap-5 text-lg">
          <p>Hi again, my name's Leandro Norcio, a full stack web developer.</p>
          <p>
            I'm a continuos learner who always looks for ways to improve my
            skills and knowledge.
          </p>
          <p>
            My journey started in 2018 when I was in senior high school where I
            became passionate about websites, so I started learning HTML, CSS
            and JavaScript and jQuery during my free time, and started building
            simple, small sites.
          </p>
          <p>
            Today, I mainly use TypeScript building full stack websites, I
            mostly build web apps using React, NextJS, Remix, Express.js and
            PostgreSQL.
          </p>
        </div>
        <img src={memojiMac} alt="Memoji with Mac" className="h-40 w-40" />
      </div>
    </PageContainer>
  );
}
