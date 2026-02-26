"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!name || !email || !subject || !message) {
    return {
      error: "Missing required fields.",
    };
  }

  if (!contactEmail) {
    return {
      error: "Contact email is not configured.",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { error: error.message || "Failed to send email." };
  }
}
