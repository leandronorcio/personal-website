import type { MetaFunction } from '@remix-run/node';
import MeIntro from '~/components/me-intro';
import { Skills } from '~/components/skills';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="my-5 flex flex-col items-center justify-center gap-4 px-5">
      <div className="flex flex-col gap-6 sm:gap-10">
        <MeIntro />
        <Skills />
      </div>
    </div>
  );
}
