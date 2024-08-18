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
const workflowName = 'Shipping Order Confirmation';

// Define the workflow
export const shippingOrderConfirmation = workflow(
  workflowName,
  async ({ step, payload }) => {
    // Define the step for the workflow
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
