import { inboxDemo } from "./workflows/inbox-demo/workflow";
import { userOnboarding } from "./workflows/user-onboarding/workflow";
import { mainTemplate } from "./workflows/template/workflow";
import { slackVerificationOTP } from "./workflows/one-time-password/workflow";
import { passwordReset } from "./workflows/password-reset/workflow";
import { recentLogin } from "./workflows/recent-login/workflow";
import { invoiceReceipts } from "./workflows/invoice-receipts/workflow";
import { shippingOrderConfirmation } from "./workflows/order-confirmation/workflow";
import { feedbackReviews } from "./workflows/feedback-reviews/workflow";

export const workflows = [
  mainTemplate,
  passwordReset,
  recentLogin,
  invoiceReceipts,
  shippingOrderConfirmation,
  feedbackReviews,
  inboxDemo,
  userOnboarding,
  slackVerificationOTP,
];