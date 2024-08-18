import { z } from "zod";
import { CronExpression } from "@novu/framework";

export const emailControlSchema = z.object({
    subject: z.string().default("Recent login to your Account"),
    topText: z.string().default("We wanted to let you know that we have shipped your items."),
    receiptSubject: z.string().default("Recent login to your Account"),
    noticeHeaderText: z.string().default("We noticed a recent login to your Yelp account."),
    headerImage: z.enum([
      'yellow', 
      'purple', 
    ]).default('yellow'),
    bodyContentText: z.string().default("If this was you, there's nothing else you need to do."),
    additionalBodyContentText: z.string().default("If this wasn't you or if you have additional questions, please see our support page.")
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
  pushSubject: z.string().default("Recent login to your Account"),
  pushBody: z.string().default("Hi [userFirstName], we noticed a recent login to your Yelp account. If this was you, there's nothing else you need to do. If this wasn't you, please see our support page."),
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