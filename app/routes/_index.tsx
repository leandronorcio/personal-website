import type { MetaFunction } from '@remix-run/node';
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
    </PageContainer>
  );
}
