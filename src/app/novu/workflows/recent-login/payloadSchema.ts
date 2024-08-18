import { z } from "zod";

const date = new Date();

const formattedDate = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date);

export const payloadSchema = z.object({
    time: z.string().default(formattedDate),
    loginDevice: z.string().default('Desktop'),
    loginLocation: z.string().default('London, United Kingdom'),
    loginIP: z.string().ip({ version: "v4" }).default('47.149.53.167'),
    userFirstName: z.string().default('Jane'),
});