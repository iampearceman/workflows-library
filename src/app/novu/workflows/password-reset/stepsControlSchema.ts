import { z } from "zod";
import { CronExpression } from "@novu/framework";

export const emailControlSchema = z.object({
    emailSubject: z.string().default("Dropbox - Reset your password"),
    headerText: z.string().default("Password reset requested"),
    headerTextSize: z.enum(['16px', '20px', '24px']).default("20px"),
    headerTextColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextOne: z.string().default("Someone recently requested a password change for your Dropbox account. If this was you, you can set a new password."),
    bodyTextOneColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextTwo: z.string().default("If you don't want to change your password or didn't request this, just ignore and delete this message."),
    bodyTextTwoColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    bodyTextThree: z.string().default("To keep your account secure, please don&apos;t forward this email to anyone. See our Help Center for more secutiry tips"),
    bodyTextThreeColour: z.enum(['#059A05', '#f00', '#08080A']).default("#08080A"),
    showResetPasswordButton: z.boolean().default(true),
    showResetLink: z.boolean().default(false),
    resetLinkText: z.string().default("Use this link to reset your password"),
});

export const inAppControlSchema = z.object({
  inAppSubject: z.string().default("In-App Notification Subject!"),
  inAppBody: z.string().default("In-App Notification Body!"),
  inAppAvatar: z.string().default("https://avatars.githubusercontent.com/u/63902456?v=4"),
  showInAppAvatar: z.boolean().default(true),
  inAppPrimaryActionLabel: z.string().default("Primary Action"),
  enablePrimaryAction: z.boolean().default(true),
  inAppPrimaryActionUrl: z.string().default("https://novu.com"),
  inAppSecondaryActionLabel: z.string().default("Secondary Action"),
  enableSecondaryAction: z.boolean().default(false),
  inAppSecondaryActionUrl: z.string().default("https://novu.com"),
});

export const smsControlSchema = z.object({
  smsBody: z.string().default("SMS Notification Subject"),
});

export const pushControlSchema = z.object({
  pushSubject: z.string().default("Push Notification Subject"),
  pushBody: z.string().default("Push Notification Body"),
});

export const chatControlSchema = z.object({
  chatBody: z.string().default("Chat Notification Body"),
});

export const delayControlSchema = z.object({
  unit: z.enum(["seconds", "minutes", "hours", "days", "weeks", "months"]).default("days"),
  amount: z.number().default(2),
});

export const digestControlSchema = z.object({
  strategy: z.enum(["Regular", "Scheduled"]).default("Regular"),
  lookBackWindow: z.boolean().default(false),
  digestKey: z.string().default("digestKey"),
  unit: z.enum(["seconds", "minutes", "hours", "days", "weeks", "months"]).default("days"),
  amount: z.number().default(3),
  cron: z.string().default(CronExpression.EVERY_DAY_AT_8AM), // visit https://crontab.guru/ to set the cron expression.
});

export const customControlSchema = z.object({
});