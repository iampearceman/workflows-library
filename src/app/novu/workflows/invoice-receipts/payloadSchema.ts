import { z } from "zod";

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
}).format(date);

export const payloadSchema = z.object({
  appleID: z.string().default("alan.turing@gmail.com"),
  address: z.string().default("2125 Chestnut St"),
  fullName: z.string().default("Alan Turing"),
  country: z.string().default("USA"),
  city: z.string().default("San Francisco, CA 94123"),
  invoiceDate: z.string().default(formattedDate),
  orderID: z.string().default("ML4F5L8522"),
  billedTo: z.string().default("Visa .... 7461"),
  documentNo: z.number().int().default(186623754793)
});