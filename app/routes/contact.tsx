import { PageContainer } from '~/components/page-container';
import { TextInput } from '~/components/ui/text-input';
import { Textarea } from '~/components/ui/text-area';
import { A } from '~/components/ui/a';
import { ButtonPrimary } from '~/components/ui/button-primary';
import { ButtonSecondary } from '~/components/ui/button-secondary';
import { CardContainer } from '~/components/ui/card-container';
import { Header } from '~/components/ui/header';
import * as z from 'zod';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, Mail, User } from 'lucide-react';
import { ActionFunctionArgs } from '@remix-run/node';
import { useActionData, useSubmit, useNavigate } from '@remix-run/react';
import {
  isRouteErrorResponse,
  useNavigation,
  useRouteError,
} from 'react-router';
import { sendEmailToMyself } from '~/lib/sendEmailToMyself';

const nonEmptyString = z
  .string()
  .trim()
  .min(3, { message: 'Value must be at least three characters' });
const contactFormSchema = z.object({
  name: nonEmptyString,
  email: nonEmptyString.email(),
  message: nonEmptyString,
});
type ContactFormSchema = z.infer<typeof contactFormSchema>;
const defaultValues = {
  name: '',
  email: '',
  message: '',
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  const data = Object.fromEntries(body);
  if (!contactFormSchema.safeParse(data).success) {
    throw new Response(JSON.stringify({ error: 'Invalid form data' }), {
      status: 422,
    });
  }

  try {
    await sendEmailToMyself(
      'Personal Website Received a Message',
      `Sender: ${data.name} (${data.email})
Message: ${data.message}`,
    );
  } catch (error) {
    console.log(error);
    throw new Response(JSON.stringify({ error: 'Unable to send message' }), {
      status: 500,
    });
  }

  return true;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <PageContainer>
      {isRouteErrorResponse(error) ? (
        <>
          <Header className="text-2xl">
            {error.status} {error.statusText}
          </Header>
          <p className="text-lg text-muted-foreground">{error.data}</p>
        </>
      ) : error instanceof Error ? (
        <>
          <Header className="text-2xl">An Error Occurred</Header>
          <p className="text-lg text-muted-foreground">{error.message}</p>
        </>
      ) : (
        <Header className="text-2xl">Unknown Error</Header>
      )}
      <p className="text-lg text-muted-foreground">
        Whoops! We encountered an error while processing your request. You may{' '}
        <A onClick={() => navigate(-1)}>go back</A> and try again.
      </p>
    </PageContainer>
  );
}

export default function Contact() {
  const { control, handleSubmit, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });
  const isSuccessful = useActionData<typeof action>(); // `true` if the `action` is successful
  const submit = useSubmit();
  const { formAction, state } = useNavigation();
  const isSubmitting = formAction === `/contact` && state === 'submitting';

  const onValid: SubmitHandler<ContactFormSchema> = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof ContactFormSchema]);
    }
    submit(formData, {
      method: 'POST',
    });
  };
  const onInValid: SubmitErrorHandler<ContactFormSchema> = (data) => {};

  return (
    <PageContainer>
      <Header className="text-3xl">Get in touch</Header>
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
        </span>
      </p>
      {!isSuccessful ? (
        <CardContainer className="mt-5">
          <Header className="text-2xl">Contact Form</Header>
          <p className="mt-2 text-lg text-muted-foreground">
            You can directly send me an email me at{' '}
            <A href="mailto:leandro@norcio.dev" title="My email address">
              leandro@norcio.dev
            </A>{' '}
            , or use this form.
          </p>
          <form
            onSubmit={handleSubmit(onValid, onInValid)}
            className="mt-3 flex w-full flex-col gap-3"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <Controller
                  control={control}
                  name="name"
                  render={({
                    field: { onChange, ref, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="Name"
                      value={value}
                      onChange={(val) => onChange(val)}
                      errorMessage={error?.message}
                      ref={ref}
                      Icon={User}
                    />
                  )}
                />
              </div>
              <div className="flex-1">
                <Controller
                  control={control}
                  name="email"
                  render={({
                    field: { onChange, ref, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="Email address"
                      value={value}
                      onChange={(val) => onChange(val)}
                      errorMessage={error?.message}
                      ref={ref}
                      Icon={AtSign}
                    />
                  )}
                />
              </div>
            </div>
            <Controller
              control={control}
              name="message"
              render={({
                field: { onChange, ref, value },
                fieldState: { error },
              }) => (
                <Textarea
                  label="Message"
                  value={value}
                  onChange={(val) => onChange(val)}
                  errorMessage={error?.message}
                  ref={ref}
                  Icon={Mail}
                />
              )}
            />
            <div className="flex gap-3 self-end">
              <ButtonSecondary type="button" onClick={() => reset()}>
                Reset
              </ButtonSecondary>
              <ButtonPrimary type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Submit'}
              </ButtonPrimary>
            </div>
          </form>
        </CardContainer>
      ) : (
        <CardContainer className="mt-5">
          <Header className="text-2xl">Message Sent</Header>
          <p className="mt-2 text-lg text-muted-foreground">
            Your message has been successfully sent, expect a reply from me
            within the next 12 hours.
          </p>
        </CardContainer>
      )}
    </PageContainer>
  );
}
