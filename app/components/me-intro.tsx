import { Github, Linkedin, Twitter } from 'lucide-react';
import { ButtonSecondary } from './ui/button-secondary';
import { ButtonPrimary } from './ui/button-primary';

export default function MeIntro() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      {/* <div className="relative h-36 w-36 self-center">
        <div className="absolute h-full w-full animate-spin rounded-full bg-gradient-to-r from-primary to-warning"></div>
        <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card"></div>
        <img
          src={myPicture}
          className="absolute left-1/2 top-1/2 z-10 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div> */}
      <div className="flex flex-col  items-start justify-center">
        <h1 className="font-sans text-2xl text-card-foreground">
          Hi <span className="inline-block animate-wave">👋🏻</span> I'm Leandro
          Norcio
        </h1>
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
          Full Stack Developer
        </h1>
        <div className="mt-3 flex items-center gap-2 sm:gap-3">
          <ButtonPrimary>Contact me</ButtonPrimary>
          <ButtonSecondary>Resume</ButtonSecondary>
          <ButtonSecondary>
            <Github className="stroke-foreground group-hover:stroke-foreground" />
          </ButtonSecondary>
          <ButtonSecondary>
            <Twitter className="stroke-foreground group-hover:stroke-foreground" />
          </ButtonSecondary>
          <ButtonSecondary>
            <Linkedin className="stroke-foreground group-hover:stroke-foreground" />
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
