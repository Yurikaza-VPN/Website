"use server";
import { EmailTemplate } from "@/components/Email/Email-template";
import { Resend } from "resend";

const resend = new Resend("re_KgaYoTHa_5P4JKNU9Cev26AGoYzjBrDdG");

export default async function getEmailAdress({ email }: { email: string }) {
  const { data, error } = await resend.emails.send({
    from: "Yurikaza VPN <yurikazaVPN@resend.dev>",
    to: [email],
    subject: "Welcome to Yurikaza VPN",
    react: "<p>Hello WOrld</p>",
  });

  if (error) {
    return error;
  }

  return { data };
}
