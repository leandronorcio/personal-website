import { SendEmailCommand } from '@aws-sdk/client-ses';
import { sesClient } from './sesClient';

const createSendEmailCommand = (
  toAddress: string,
  fromAddress: string,
  subject: string,
  body: string,
) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        // Html: {
        //   Charset: "UTF-8",
        //   Data: "HTML_FORMAT_BODY",
        // },
        Text: {
          Charset: 'UTF-8',
          Data: body,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

export async function sendEmailToMyself(subject: string, body: string) {
  const sendEmailCommand = createSendEmailCommand(
    'leandro@norcio.dev',
    'noreply@norcio.dev',
    subject,
    body,
  );

  await sesClient.send(sendEmailCommand);
}
