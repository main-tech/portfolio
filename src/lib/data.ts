import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { GiAnvilImpact } from "react-icons/gi";
export const links = [
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

export const experiencesData = [
  {
    title: "Graduate at Jomo Kenyatta University Of Agriculture And Technology",
    location: "Nairobi, Kenya",
    description:
      "I graduated with a Bachelors of Computer Technology after 4 academic years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer intern",
    location: "Nairobi, Kenya",
    description:
      "I worked as an intern at ICIPE - International Centre of Insect Physiology and Ecology." +
      "Added  features for a Java-based application  by implementing new features using Google Web Toolkit (GWT)," +
      "Additionally,created a GIS-focused cross platform mobile app using Capacitor and Vue.js," +
      "integrated CouchDB and PouchDB for  data synchronization and offline capabilities." +
      "integrated OpenLayers for  geospatial data visualization and interaction.",
    icon: React.createElement(GiAnvilImpact),
    date: "June 2022- November 2022",
  },
  {
    title: "Software Engineer",
    location: "Nairobi, Kenya",
    description:
      "Developed and deplodyed web GIS applications using nextjs and OpenLayers at ICIPE",
    icon: React.createElement(GiAnvilImpact),
    date: "December 2022 - April 2023",
  },
  {
    title: "Systems and Cloud Solutions Architect",
    location: "Nairobi, Kenya",
    description:
      "Full time role at ICIPE - International Centre of Insect Physiology and Ecology." +
      "Deployed HPC infrastructure for bioninformatics workloads in AWS using AWS parallel cluster" +
      "Deployed web applications to kubernetes and docker swarm cluster" +
      "Developed GIS web applications using Nextjs,nestjs and open layers",
    icon: React.createElement(GiAnvilImpact),
    date: "May 2023- Current",
  },

] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Nestjs",
  "PostgreSQL",
] as const;
