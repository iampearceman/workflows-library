import { workflow } from "@novu/framework";
import { renderEmail } from "./email-templates/user-onboarding";
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

const workflowName = 'User Onboarding';

export const userOnboarding = workflow(
  workflowName,
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      },
    );
  },
  {
    payloadSchema,
  },
);
