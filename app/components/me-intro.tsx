import myPicture from '../photos/me.png';

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
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-sans text-2xl font-bold text-card-foreground">
          Hi{' '}
          <span className="relative z-[-1] inline-block animate-wave">👋🏻</span>{' '}
          I'm Leandro Norcio
        </h1>
        <h1 className="font-sans text-3xl font-bold text-foreground sm:text-5xl">
          Full Stack Developer
        </h1>
      </div>
    </div>
  );
}
