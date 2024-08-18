import { workflow } from "@novu/framework";
import { renderEmail } from "./email-templates/react-email-template";
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


// Define the name for your workflow 
const workflowName = 'Recent Login';

// Define the workflow
export const recentLogin = workflow(
  workflowName,
  async ({ step, payload }) => {
    // Define the step for the workflow
    // -----------------------------------email step-------------------------------------------------------------------------
    await step.email(
      "email",
      async (controls) => {
        const result: any = {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        }
        return result;
      },
      {
        controlSchema: emailControlSchema,
      },
    )
    // -----------------------------------push step-------------------------------------------------------------------------

    await step.push(
      'push',
      async (controls) => {
        const result: any = {
          subject: controls.pushSubject,
          body: controls.pushBody,
        };
        return result;
      },
      {
        controlSchema: pushControlSchema,
      },
    )
    // -----------------------------------payload schema-------------------------------------------------------------------------
  },
  {
    payloadSchema: payloadSchema
  },
  // -----------------------------------tags-------------------------------------------------------------------------
);
