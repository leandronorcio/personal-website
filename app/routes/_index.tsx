import type { MetaFunction } from '@remix-run/node';
import { Menu } from '~/compnents/menu';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="text-5xl font-extrabold">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {'Hello World'.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
}
