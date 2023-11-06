import type { MetaFunction } from '@remix-run/node';
import { PrefetchPageLinks } from '@remix-run/react';
import MeIntro from '~/components/me-intro';
import { PageContainer } from '~/components/page-container';
import { Skills } from '~/components/skills';

export const meta: MetaFunction = () => {
  return [
    { title: 'Leandro Norcio' },
    {
      name: 'description',
      content:
        'Hi! Welcome to my portfolio website, this is built using Remix.',
    },
  ];
};

export default function Index() {
  return (
    <PageContainer>
      <MeIntro />
      <Skills />
      <PrefetchPageLinks page="/projects" />
      <PrefetchPageLinks page="/about" />
      <PrefetchPageLinks page="/contact" />
    </PageContainer>
  );
}
