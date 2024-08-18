import { z } from "zod";
import { CronExpression } from "@novu/framework";

export const emailControlSchema = z.object({
  headerText: z.string().default("Here's the latest review"),
  headerTextSize: z.enum(["20px", "25px", "30px", "35px"]).default("25px"),
  headerTextColour: z.enum(["#059A05", "#f00", "#08080A"]).default("#08080A"),
  bodyText: z
    .string()
    .default(
      "was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He’s welcome back anytime and would easily recommend him to any host!"
    ),
  questionOne: z.string().default("How do reviews work?"),
  linkToAnswerOne: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/13"),
  questionTwo: z.string().default("How do reviews work?"),
  linkToAnswerTwo: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/14"),
  questionThree: z.string().default("How do reviews work?"),
  linkToAnswerThree: z
    .string()
    .url()
    .default("https://airbnb.com/help/article/15"),
  btnColor: z.enum(["#ff5a5f", "#f00", "#f0f"]).default("#ff5a5f"),
  textSize: z.enum(["10px", "15px", "25px"]).default("15px"),
  emailSubject: z.string().default("You have a new review"),
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
  type: z.enum(["Regular", "Scheduled"]).default("Regular"),
  unit: z.enum(["seconds", "minutes", "hours", "days", "weeks", "months"]).default("weeks"),
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