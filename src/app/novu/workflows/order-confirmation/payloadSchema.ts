import { z } from "zod";

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date);

export const payloadSchema = z.object({
  orderArrivalLocation: z.string().default('Prague, Czech'),
  orderArrivalDate: z.string().default(formattedDate),
  orderID: z.string().default('112-6949858-2887402'),
  userFirstName: z.string().default('John'),
  orderTotalAmount: z.number().int().default(259),
  orderCurrency: z.enum([
    "$",
    "£",
    "€"
  ]).default("$"),
  packageTrackingLink: z.string().default('https://packagetracking.com/track')
});