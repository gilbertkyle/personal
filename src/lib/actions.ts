"use server";
import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(senderEmail, 5000)) {
    return {
      error: "Invalid Email",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Kyle Gilbert <onboarding@resend.dev>",
      to: "k.richard.gilbert@gmail.com",
      subject: "Hello World",
      //html: `<strong>${message as string}</strong>`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string }),
    });
  } catch (error: unknown) {
    return getErrorMessage(error);
  }
  return { data };
};
