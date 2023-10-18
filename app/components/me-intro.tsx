import { Github, Linkedin, Twitter } from 'lucide-react';
import myPicture from '../photos/me.png';
import { ButtonOutline } from './ui/button-outline';
import { ButtonPrimary } from './ui/button-primary';

export default function MeIntro() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <div className="relative z-[-1] h-36 w-36 self-center">
        <div className="absolute h-full w-full animate-spin rounded-full bg-gradient-to-r from-primary to-warning"></div>
        <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card"></div>
        <img
          src={myPicture}
          className="absolute left-1/2 top-1/2 z-10 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start">
        <h1 className="font-sans text-2xl text-card-foreground">
          Hi{' '}
          <span className="relative z-[-1] inline-block animate-wave">👋🏻</span>{' '}
          I'm Leandro Norcio
        </h1>
        <h1 className="font-sans text-3xl text-foreground sm:text-5xl">
          Full Stack Developer
        </h1>
        <div className="mt-3 flex items-center gap-3">
          <ButtonPrimary>Contact me</ButtonPrimary>
          <ButtonOutline>Resume</ButtonOutline>
          <a
            aria-label="My Github"
            title="My Github"
            className="group block cursor-pointer"
          >
            <Github className="stroke-muted-foreground group-hover:stroke-foreground" />
          </a>
          <a
            aria-label="My LinkedIn"
            title="My LinkedIn"
            className="group block cursor-pointer"
          >
            <Linkedin className="stroke-muted-foreground group-hover:stroke-foreground" />
          </a>
          <a
            aria-label="My Twitter"
            title="My Twitter"
            className="group block cursor-pointer"
          >
            <Twitter className="stroke-muted-foreground group-hover:stroke-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
}
