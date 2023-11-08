import { MetaFunction } from '@remix-run/node';
import { PageContainer } from '~/components/page-container';
import memojiMac from '~/photos/memoji-mac.png';

export const meta: MetaFunction = () => {
  return [
    { title: 'About Me | Leandro Norcio' },
    {
      name: 'description',
      content:
        'Hi! Welcome to my portfolio website, this is built using Remix.',
    },
  ];
};

export default function About() {
  return (
    <PageContainer>
      <div className="flex items-center justify-center">
        <img src={memojiMac} alt="Memoji with Mac" className=" h-40 w-40" />
      </div>
      <div className="mt-4 flex flex-col gap-5 text-lg">
        <p>Hi again, my name's Leandro Norcio, a full stack web developer.</p>
        <p>
          I'm a continuos learner who always looks for ways to improve my skills
          and knowledge.
        </p>
        <p>
          My journey started in 2018 when I was in senior high school where I
          became passionate about websites, so I started learning HTML, CSS and
          JavaScript and jQuery during my free time, and started building
          simple, small sites.
        </p>
        <p>
          Today, I mainly use TypeScript building full stack websites, I mostly
          build web apps using React, NextJS, Remix, Express.js and PostgreSQL.
        </p>
      </div>
    </PageContainer>
  );
}
