import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { PageContainer } from '~/components/page-container';
import { MetaFunction } from '@remix-run/node';
import { Header } from '~/components/ui/header';
import { motion } from 'framer-motion';
import { cardVariant, cardsContainerVariant } from '~/lib/cardStaggerVariants';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Projects | Leandro Norcio' },
    {
      name: 'description',
      content:
        'Hi! Welcome to my portfolio website, this is built using Remix.',
    },
  ];
};

export default function Projects() {
  return (
    <PageContainer>
      <div className="mb-4">
        <Header className="text-3xl">Some Projects I've Built</Header>
      </div>
      <motion.div
        variants={cardsContainerVariant}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
            <p className="mb-3 text-muted-foreground">
              A set of tutorial apps for both Android and iOS with over
              3,000,000+ lifetime downloads. Built with React Native, it builds
              four apps for each app store—Play Store and App Store—from a
              single codebase. The versioning and build process is automated
              using Python.
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
              <Button>Play Store</Button>
              <Button>App Store</Button>
              <Button mode="secondary">Website</Button>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
            <p className="mb-3 text-muted-foreground">
              A set of tutorial apps for both Android and iOS with over
              3,000,000+ lifetime downloads. Built with React Native, it builds
              four apps for each app store—Play Store and App Store—from a
              single codebase. The versioning and build process is automated
              using Python.
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
              <Button>Play Store</Button>
              <Button>App Store</Button>
              <Button mode="secondary">Website</Button>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <h2 className="mb-2 text-4xl font-bold">Codeliber</h2>
            <p className="mb-3 text-muted-foreground">
              A set of tutorial apps for both Android and iOS with over
              3,000,000+ lifetime downloads. Built with React Native, it builds
              four apps for each app store—Play Store and App Store—from a
              single codebase. The versioning and build process is automated
              using Python.
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
              <Button>Play Store</Button>
              <Button>App Store</Button>
              <Button mode="secondary">Website</Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
