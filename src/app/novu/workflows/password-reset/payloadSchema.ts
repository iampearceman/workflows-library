import { z } from "zod";

export const payloadSchema = z.object({
    resetPasswordLink: z.string().url().default('https://dropbox.com/password/reset')
});