import { ButtonSecondary } from './ui/button-secondary';
import { ButtonPrimary } from './ui/button-primary';

export default function MeIntro() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="font-sans text-2xl text-card-foreground">
          Hi <span className="inline-block animate-wave">👋🏻</span> I'm Leandro
          Norcio
        </h1>
        <h1 className="text-center font-serif text-3xl text-foreground sm:text-4xl">
          Full Stack Developer
        </h1>
        <div className="mt-3 flex items-center gap-2 sm:gap-3">
          <ButtonPrimary>Contact me</ButtonPrimary>
          <ButtonSecondary>Resume</ButtonSecondary>
          <ButtonSecondary>View Projects</ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
