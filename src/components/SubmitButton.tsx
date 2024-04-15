"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="disabled:scale-100 disabled:bg-opacity-65 h-[3rem] w-[8rem] text-white bg-gray-900 rounded-full outline-none transition-all flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
