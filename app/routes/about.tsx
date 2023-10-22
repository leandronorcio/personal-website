import { PageContainer } from '~/components/page-container';
import { Header } from '~/components/ui/header';

export default function About() {
  return (
    <PageContainer>
      <Header className="text-3xl">About me</Header>
      <p className="mt-4 text-lg">
        Hey, my name's Leandro Norcio, a full stack web developer. My journey
        started in 2018 when I was in senior high school where I became
        passionate about websites. I then started learning HTML, CSS and
        JavaScript (and jQuery) during my free time.
      </p>
    </PageContainer>
  );
}
