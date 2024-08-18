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
const workflowName = 'Main Template';

// Define the workflow
export const mainTemplate = workflow(
  workflowName,
  async ({ step, payload }) => {
    // Define the step for the workflow
    // -----------------------------------in-app step-------------------------------------------------------------------------
    await step.inApp(
      'In App Step',
      async (controls) => {
        const result: any = {
          subject: controls.inAppSubject,
          body: controls.inAppBody,
        };

        if (controls.showInAppAvatar) {
          result.avatar = controls.inAppAvatar
        }

        if (controls.enablePrimaryAction) {
          result.primaryAction = {
            label: controls.inAppPrimaryActionLabel,
            url: controls.inAppPrimaryActionUrl,
          };
        }

        if (controls.enableSecondaryAction) {
          result.secondaryAction = {
            label: controls.inAppSecondaryActionLabel,
            url: controls.inAppSecondaryActionUrl,
          };
        }
        return result;
      },
      {
        controlSchema: inAppControlSchema
      }
    )
    // -----------------------------------digest step-------------------------------------------------------------------------
    await step.digest(
      'digest',
      async (controls) => {
        const result: any = {};
        if (controls.strategy === "Scheduled") {
          result.cron = controls.cron;
        } else {
          result.unit = controls.unit;
          result.amount = controls.amount;
        }
        return result;
      },
      {
        controlSchema: digestControlSchema
      }
    )
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

    // -----------------------------------delay step----------------------------------------------------------------
    await step.delay(
      "delay",
      async (controls) => {
        const result: any = {
          unit: controls.unit,
          amount: controls.amount
        };
        return result;
      },
      {
        controlSchema: delayControlSchema,
      },
    )

    // -----------------------------------sms step-------------------------------------------------------------------------

    await step.sms(
      'chat',
      async (controls) => {
        const result: any = {
          body: controls.smsBody,
        };
        return result;
      },
      {
        controlSchema: smsControlSchema,
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

    // -----------------------------------chat step-------------------------------------------------------------------------

    await step.chat(
      'chat',
      async (controls) => {
        const result: any = {
          body: controls.chatBody,
        }
        return result;
      },
      {
        controlSchema: chatControlSchema,
      },
    )

    // -----------------------------------payload schema-------------------------------------------------------------------------
  },
  {
    payloadSchema: payloadSchema
  },
  // -----------------------------------tags-------------------------------------------------------------------------
);
