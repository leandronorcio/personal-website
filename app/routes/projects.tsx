import { Badge } from '~/components/ui/badge';
import { ButtonOutline } from '~/components/ui/button-outline';
import { ButtonPrimary } from '~/components/ui/button-primary';
import { CardContainer } from '~/components/ui/card-container';
import { Header } from '~/components/ui/header';

export default function Projects() {
  return (
    <div className="my-4 flex flex-col items-center justify-center px-5">
      <div className="max-w-2xl">
        <Header className="text-3xl">Projects</Header>
        <CardContainer className="mt-6" numberOfBoxPerLine={5}>
          <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
          <p className="mb-3 text-muted-foreground">
            A set of tutorial apps for both Android and iOS with over 3,000,000+
            lifetime downloads. Built with React Native, it builds four apps for
            each app store—Play Store and App Store—from a single codebase. The
            versioning and build process is automated using Python.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>React Native Paper</Badge>
            <Badge>React Navigation</Badge>
          </div>
          <div className="mt-4 flex gap-4">
            <ButtonPrimary>Play Store</ButtonPrimary>
            <ButtonPrimary>App Store</ButtonPrimary>
            <ButtonOutline>Website</ButtonOutline>
          </div>
        </CardContainer>
        <CardContainer className="mt-6" numberOfBoxPerLine={5}>
          <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
          <p className="mb-3 text-muted-foreground">
            A set of tutorial apps for both Android and iOS with over 3,000,000+
            lifetime downloads. Built with React Native, it builds four apps for
            each app store—Play Store and App Store—from a single codebase. The
            versioning and build process is automated using Python.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>React Native Paper</Badge>
            <Badge>React Navigation</Badge>
          </div>
          <div className="mt-4 flex gap-4">
            <ButtonPrimary>Play Store</ButtonPrimary>
            <ButtonPrimary>App Store</ButtonPrimary>
            <ButtonOutline>Website</ButtonOutline>
          </div>
        </CardContainer>
        <CardContainer className="mt-6" numberOfBoxPerLine={5}>
          <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
          <p className="mb-3 text-muted-foreground">
            A set of tutorial apps for both Android and iOS with over 3,000,000+
            lifetime downloads. Built with React Native, it builds four apps for
            each app store—Play Store and App Store—from a single codebase. The
            versioning and build process is automated using Python.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>React Native Paper</Badge>
            <Badge>React Navigation</Badge>
          </div>
          <div className="mt-4 flex gap-4">
            <ButtonPrimary>Play Store</ButtonPrimary>
            <ButtonPrimary>App Store</ButtonPrimary>
            <ButtonOutline>Website</ButtonOutline>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
