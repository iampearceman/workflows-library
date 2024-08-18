import { z } from "zod";

export const payloadSchema = z.object({
  userName: z.string().default("Alan"),
});