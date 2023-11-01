import type { MetaFunction } from '@remix-run/node';
import MeIntro from '~/components/me-intro';
import { PageContainer } from '~/components/page-container';
import { Skills } from '~/components/skills';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
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
