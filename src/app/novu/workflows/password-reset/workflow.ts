import { workflow } from "@novu/framework";
import { renderEmail } from "./email-templates/password-reset";
import { payloadSchema } from './payloadSchema';
import {
  emailControlSchema,
  pushControlSchema,
  inAppControlSchema,
  smsControlSchema,
  chatControlSchema,
  digestControlSchema,
  delayControlSchema,
} from './stepsControlSchema';

const workflowName = 'Password Reset';

export const passwordReset = workflow(
  workflowName,
  async ({ step, payload }) => {
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
      }
    );
  },
  {
    payloadSchema: payloadSchema
  }
);