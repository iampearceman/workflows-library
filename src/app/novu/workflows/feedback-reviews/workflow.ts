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
const workflowName = 'Feedback Reviews';

// Define the workflow
export const feedbackReviews = workflow(
  workflowName,
  async ({ step, payload }) => {
    // Define the step for the workflow
        // -----------------------------------delay step----------------------------------------------------------------
    await step.delay(
      "delay",
      async (controls) => {
        const result: any = {
          type: controls.type,
          unit: controls.unit,
          amount: controls.amount
        };
        return result;
      },
      {
        controlSchema: delayControlSchema,
      },
    )

    // -----------------------------------email step-------------------------------------------------------------------------
    await step.email(
      "email",
      async (controls) => {
        const result: any = {
          subject: controls.emailSubject,
          body: renderEmail(controls, payload),
        }
        return result;
      },
      {
        controlSchema: emailControlSchema,
      },
    )
    // -----------------------------------payload schema-------------------------------------------------------------------------
  },
  {
    payloadSchema: payloadSchema
  },
  // -----------------------------------tags-------------------------------------------------------------------------
);
