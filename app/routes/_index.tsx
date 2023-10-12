import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div>
      <p className="font-serif text-5xl text-card-foreground">
        Hello, I'm Leandro Norcio, a fullstack developer.
      </p>
      <p className="text-5xl">
        Whereas disregard and contempt for human rights have resulted
      </p>
    </div>
  );
}
