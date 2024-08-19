"use server";
import { EmailTemplate } from "@/components/Email/Email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function getEmailAdress({ email }: { email: string }) {
  const { data, error } = await resend.emails.send({
    from: "Yurikaza VPN <yurikazaVPN@resend.dev>",
    to: [email, "yusufmirza55@hotmail.com"],
    subject: "Welcome to Yurikaza VPN",
    react: EmailTemplate({ firstName: email }),
  });

  if (error) {
    return error;
  }

  return { data };
}
