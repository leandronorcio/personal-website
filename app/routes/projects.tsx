import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { PageContainer } from '~/components/page-container';
import { MetaFunction } from '@remix-run/node';
import { Header } from '~/components/ui/header';
import { motion } from 'framer-motion';
import { cardVariant, cardsContainerVariant } from '~/lib/cardStaggerVariants';
import { A } from '~/components/ui/a';
import { openInNewTab } from '~/lib/openInNewTab';

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
        className="flex flex-col gap-4"
      >
        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-4xl font-bold">Codeliber</h2>
              <p className="text-muted-foreground">2019</p>
            </div>
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
              <Button
                onClick={() =>
                  openInNewTab(
                    'https://play.google.com/store/apps/dev?id=6017268745380888818&hl=en&gl=US',
                  )
                }
              >
                Play Store
              </Button>
              <Button
                onClick={() =>
                  openInNewTab(
                    'https://apps.apple.com/in/developer/leandro-norcio/id1654394211',
                  )
                }
              >
                App Store
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-4xl font-bold">Munia</h2>
              <p className="text-muted-foreground">2023</p>
            </div>
            <p className="mb-3 text-muted-foreground">
              A fully responsive, accessible, and feature-rich social media web
              app. Built with the latest trendy technologies when I started
              working on it, such as Next.js, Prisma and Tailwind CSS. I built
              my own components using Tailwind on top of React Aria's
              accessibility hooks.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>TypeScript</Badge>
              <Badge>Next.js 14</Badge>
              <Badge>React 18</Badge>
              <Badge>Prisma</Badge>
              <Badge>NextAuth.js 5</Badge>
              <Badge>React Query</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Framer Motion</Badge>
              <Badge>React Aria</Badge>
              <Badge>Zod</Badge>
              <Badge>AWS S3</Badge>
              <Badge>AWS SES</Badge>
            </div>
            <div className="mt-4 flex gap-4">
              <Button onClick={() => openInNewTab('https://munia.norcio.dev')}>
                Website
              </Button>
              <Button
                onClick={() =>
                  openInNewTab(
                    'https://norcio-dot-dev-public-files.s3.us-east-1.amazonaws.com/munia/showcase.mp4',
                  )
                }
              >
                Video Showcase
              </Button>
              <Button
                mode="secondary"
                onClick={() =>
                  openInNewTab('https://github.com/leandronorcio/munia')
                }
              >
                Github
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-4xl font-bold">Notes - OAuth 2.0</h2>
              <p className="text-muted-foreground">2023</p>
            </div>
            <p className="mb-3 text-muted-foreground">
              A simple Notes CRUD app where users can login using ther Github,
              Google and Facebook accounts. I've built this to apply the
              knowledge that I've learnt from{' '}
              <A href="https://www.udemy.com/certificate/UC-5e4f200e-7912-45f5-8ae9-6b18a3bf04c1/">
                this course
              </A>
              . This project is a monorepo of a client React application and a
              RESTful API built with Express.js and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>React Router</Badge>
              <Badge>Shadcn UI</Badge>
              <Badge>TailwindCSS</Badge>
              <Badge>Express.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>JSONWebToken</Badge>
              <Badge>OAuth 2.0</Badge>
              <Badge>OpenID Connect</Badge>
            </div>
            <div className="mt-4 flex gap-4">
              <Button onClick={() => openInNewTab('https://notes.norcio.dev')}>
                Website
              </Button>
              <Button
                mode="secondary"
                onClick={() =>
                  openInNewTab('https://github.com/leandronorcio/notes-oauth2')
                }
              >
                Github
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariant}>
          <Card numberOfBoxPerLine={5}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-4xl font-bold">MatApp</h2>
              <p className="text-muted-foreground">2018</p>
            </div>
            <p className="mb-3 text-muted-foreground">
              The first real-world project that I've built myself. This is a
              webview android app bundled using{' '}
              <A href="https://cordova.apache.org/">Cordova</A>. The app can
              solve basic income statements and balance sheets, I've built this
              as a requirement for our Accountancy, Business and Management
              research subject, it also won the 'Best Research Paper' award in
              our school.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>jQuery</Badge>
              <Badge>CSS</Badge>
              <Badge>HTML</Badge>
              <Badge>Apache Cordova</Badge>
              <Badge>Onsen UI</Badge>
            </div>
            <div className="mt-4 flex gap-4">
              <Button
                onClick={() =>
                  openInNewTab(
                    'https://docs.google.com/document/d/1UHb2KwA-6jTUn7ysv-AbPHomLavosQgX/edit?usp=sharing&ouid=105052215026653796296&rtpof=true&sd=true',
                  )
                }
              >
                Research Paper
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
