import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Gilbert | Personal Portfolio",
  description: "Full stack developer portfolio website for Kyle Gilbert ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-[#dbd7fd] absolute top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
