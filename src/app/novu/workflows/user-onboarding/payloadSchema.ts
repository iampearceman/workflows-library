import { z } from "zod";

export const payloadSchema = z.object({
teamImage: z
    .string()
    .url()
    .default(
      "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
    ),
  userImage: z
    .string()
    .url()
    .default(
      "https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png",
    ),
  arrowImage: z
    .string()
    .url()
    .default(
      "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png",
    ),
});