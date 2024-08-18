import { z } from "zod";

export const payloadSchema = z.object({
    validationCode: z.number().int().default(123456),
    magicLinkURL: z.string().url().default('https://slack.com/magic/link')
});