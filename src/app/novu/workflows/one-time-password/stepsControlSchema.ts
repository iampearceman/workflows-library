import { z } from "zod";

export const emailControlSchema = z.object({
    emailSubject: z.string().default("Verify your Slack OTP!"),
    confirmAddressHeader: z.string().default("Confirm your email address"),
    majorBodyText: z.string().default("Your confirmation code is below - enter it in your open browser window and we'll help you get signed in."),
    showMagicLink: z.boolean().default(false),
    linkText: z.string().default("Click this link if the OTP does not work for you!"),
    showOTP: z.boolean().default(true)
});

export const pushControlSchema = z.object({
    pushNotificationSubject: z.string().default("You received a Slack OTP")
});

export const inAppControlSchema = z.object({
});

export const smsControlSchema = z.object({
    smsSubject: z.string().default("You received a Slack OTP")
});

export const chatControlSchema = z.object({
});