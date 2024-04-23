"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/actions";
import SubmitButton from "@/components/SubmitButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:k.richard.gilbert@gmail.com">
          k.richard.gilbert@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          // @ts-ignore
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          if (data) {
            toast.success("Email sent");
          }
        }}
      >
        <input
          required
          maxLength={500}
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
