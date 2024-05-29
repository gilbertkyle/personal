import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@public/corpcomment.png";
import rmtdevImg from "@public/rmtdev.png";
import wordanalyticsImg from "@public/wordanalytics.png";
import type { StaticImageData } from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

type Link = {
  name: string;
  hash: string;
};

type Experience = {
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
  date: string;
};

export const links: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Graduated from San Jose State University",
    location: "San Jose, CA",
    description: "I graduated with a BS in Economics with honors.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Graduated Bootcamp",
    location: "New York City, NY",
    description: "I graduated after an intensive 13-week course",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "FantasyFive",
    description: "Weekly Draft Fantasy Football site.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Drizzle", "Typescript", "AWS"],
    imageUrl: corpcommentImg, // CHANGE THIS IN PROD
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData: string[] = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Drizzle",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
