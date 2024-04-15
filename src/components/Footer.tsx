import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">&copy; 2030 Ricardo All rights reserved</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React and Next.js (App Router and Server
        Actions), TypeScript, Tailwind CSS, Framer Motion, React Email and Resend, hosted on Vercel
      </p>
    </footer>
  );
}
