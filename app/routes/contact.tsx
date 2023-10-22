import { PageContainer } from '~/components/page-container';
import { TextInput } from '~/components/ui/TextInput';
import { Textarea } from '~/components/ui/Textarea';
import { A } from '~/components/ui/a';
import { ButtonPrimary } from '~/components/ui/button-primary';
import { ButtonSecondary } from '~/components/ui/button-secondary';
import { CardContainer } from '~/components/ui/card-container';
import { Header } from '~/components/ui/header';

export default function Contact() {
  return (
    <PageContainer>
      <Header className="text-3xl">Email and Socials</Header>
      <p className="mt-2 text-lg">
        <span className="text-muted-foreground">Email:&nbsp;&nbsp;&nbsp;</span>
        <A href="mailto:leandro@norcio.dev" title="My email address">
          leandro@norcio.dev
        </A>
      </p>
      <p className="mt-2 text-lg">
        <span className="text-muted-foreground">
          Socials:&nbsp;&nbsp;&nbsp;
        </span>
        <span className="inline-flex gap-2">
          <A href="mailto:leandro@norcio.dev" title="My email address">
            Github
          </A>
          |
          <A href="mailto:leandro@norcio.dev" title="My email address">
            Twitter
          </A>
          |
          <A href="mailto:leandro@norcio.dev" title="My email address">
            LinkedIn
          </A>
          |
          <A href="mailto:leandro@norcio.dev" title="My email address">
            Telegram
          </A>
          |
          <A href="mailto:leandro@norcio.dev" title="My email address">
            Viber
          </A>
        </span>
      </p>
      <CardContainer className="mt-5">
        <Header className="text-2xl">Contact Form</Header>
        <p className="mt-2 text-lg text-muted-foreground">
          This form will send an email to my email address, you can expect a
          response from me within 12 hours.
        </p>
        <div className="mt-3 flex w-full flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1">
              <TextInput label="Name" />
            </div>
            <div className="flex-1">
              <TextInput label="Email Address" />
            </div>
          </div>
          <Textarea label="Message" />
          <div className="flex gap-3 self-end">
            <ButtonSecondary>Reset</ButtonSecondary>
            <ButtonPrimary>Submit</ButtonPrimary>
          </div>
        </div>
      </CardContainer>
    </PageContainer>
  );
}
