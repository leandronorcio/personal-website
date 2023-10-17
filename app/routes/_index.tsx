import type { MetaFunction } from '@remix-run/node';
import myPicture from '../photos/me.png';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <div className="relative z-[-1] h-36 w-36">
        <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-primary to-warning "></div>
        <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card"></div>
        <img
          src={myPicture}
          className="absolute left-1/2 top-1/2 z-10 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>
      <h1 className="font-serif text-2xl font-bold text-card-foreground">
        Hi <span className="relative z-[-1] inline-block animate-wave">👋🏻</span>{' '}
        I'm Leandro Norcio
      </h1>
      <h1 className="font-sans text-4xl font-bold text-foreground sm:text-5xl">
        Full Stack Developer
      </h1>
    </div>
  );
}
