import { workflow } from "@novu/framework";
import { renderEmail } from './email-templates/slack-otp';
import { emailControlSchema, pushControlSchema, smsControlSchema } from './stepsControlSchema';
import { payloadSchema } from './payloadSchema';

// Define the name for your workflow 
const workflowName = 'One Time Password';

// Define the workflow
export const slackVerificationOTP = workflow(
  workflowName,
  async ({ step, payload }) => {
    // Define the step for the workflow
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.emailSubject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema
      });
    // -----------------------------------push step-------------------------------------------------------------------------
    await step.push(
      'send-push',
      async (controls) => {
      return {
        subject: controls.pushNotificationSubject,
        body: `Your verification code from Slack is ${payload.validationCode}`,
      };
    },
    {
      controlSchema: pushControlSchema
    });
    // -----------------------------------sms step-------------------------------------------------------------------------  
    await step.sms(
      'send-sms',
      async (controls) => {
      return {
        subject: controls.smsSubject,
        body: `Your verification code from Slack is ${payload.validationCode}`,
      };
    },
    {
      controlSchema: smsControlSchema
    });
  },
  
  
  // -----------------------------------payload schema-------------------------------------------------------------------------  
  // Define the payload schema for the workflow
  {
    payloadSchema: payloadSchema
  },
);

