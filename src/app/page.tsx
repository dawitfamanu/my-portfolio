"use client";

import emailicon from "@/app/assets/emailicon.png";
import emojihub from "@/app/assets/emojihub.png";
import githubicon from "@/app/assets/githubicon.png";
import guild from "@/app/assets/guild.png";
import linkedinicon from "@/app/assets/linkedinicon.png";
import profilepic from "@/app/assets/profilepic.jpg";
import tastebuds from "@/app/assets/tastebuds.png";
import guildpic from "@/app/assets/theguildlandingpage.png";
import { motion } from "framer-motion";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
};

const projects: Props[] = [
  {
    title: "The GUILD's Landing Page",
    description:
      "A sleek and interactive landing page designed for THE GUILD, implemented based on a Figma design using React, TypeScript, and TailwindCSS. This project features a fully responsive layout, ensuring an optimal user experience on both mobile and desktop devices. I brought the design to life with smooth horizontal scroll animations powered by Framer Motion, adding dynamic visual interest to key sections. Additionally, I integrated a `Contact Us` form using React Form, connected to Gmail via OAuth v2 for secure and efficient email functionality.",
    image: guildpic,
    url: "https://jointheguild.org",
  },
  {
    title: "The GUILD - Web3 Community Platform",
    description:
      "A robust community platform developed collaboratively by a team of six developers during my time at DIIANT Consulting. My primary focus was on Frontend development, where I translated Figma designs into high-quality, responsive code. I also worked extensively on integrating backend GraphQL APIs and blockchain APIs with the client side, ensuring seamless communication and optimized rendering for enhanced performance. The project was built using Next.js with TypeScript and Sass, using these technologies to create a fast and efficient user experience.",
    image: guild,
    url: "https://beta.theguild.quest",
  },
  {
    title: "Tastebuds - Restaurant Finder",
    description:
      "Tastebuds is a cross-platform restaurant finder app designed for both iOS and Android devices, developed using React Native. I contributed part-time to this project, assisting the main developer in implementing visuals and integrating backend APIs. My work included adding localization functionalities to ensure a user-friendly experience for diverse audiences. I also worked on optimizing algorithms for storing and managing restaurant opening hours efficiently, improving the app’s reliability and usability.",
    image: tastebuds,
    url: "https://tastebuds.space",
  },
  {
    title: "EmojiHub - Mini social media with emoji marketplace",
    description:
      "EmojiHub is a unique social media app that combines a Twitter-like feed with an emoji marketplace. Users can create custom emojis by uploading short 3–5 second videos, which are then matched to emojis using Facebook's x3D model. Developed as part of a Software Development course at Seoul National University, this Android app was built by a team of four. My primary responsibility was designing and implementing the Frontend of the app, focusing on creating an intuitive and visually appealing user interface.",
    image: emojihub,
    url: "https://github.com/snuhcs-course/swpp-2023-project-team-2",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Junior Frontend Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dawit F. Amanu</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#about" className="hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-500">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#resume" className="hover:text-blue-500">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="about" className="bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="flex items-center space-x-4">
              <Image
                src={profilepic}
                alt="Profile Picture"
                className="rounded-full object-cover shadow-md"
                width={250}
                height={270}
              />
              <p className="text-xl text-gray-600 text-justify">
                I’m a passionate Frontend Developer with a strong foundation in
                computer science, having graduated from Seoul National
                University`s CS department. Over the past two years, I’ve
                focused on building user-centric digital experiences,
                specializing in modern web and app development. My experience
                includes working with Next.js, React, TypeScript, and
                TailwindCSS to create responsive and dynamic web interfaces.
                I’ve also developed cross-platform applications using React
                Native and native Android applications with Kotlin and Jetpack
                Compose. When I’m not coding, you can find me enjoying a
                football match or playing the sport, which keeps me energized
                and inspired. Let’s connect and create something extraordinary
                together!
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="flex flex-col gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} className="">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                    <div className="text-left w-full md:w-1/2">
                      <h3 className="text-4xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2 text-justify text-xl">
                        {project.description}
                      </p>
                      <a
                        href={project.url}
                        className="text-blue-500 hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                    <Image
                      width={400}
                      height={300}
                      src={project.image}
                      alt="Project image"
                      className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Resume</h2>
            <a
              href="/my-portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 underline"
            >
              Click here to see my resume
            </a>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I would love to hear from you! Feel free to reach out via email or
              connect with me on LinkedIn.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:bfiqiruu@gmail.com"
                className=" text-white px-6 py-2 rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={emailicon}
                  alt="Email Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="https://linkedin.com/in/dawit-fikru-amanu-280297152/"
                className="text-white px-6 py-2 rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedinicon}
                  alt="LinkedIn Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="https://https://github.com/dawitfamanu"
                className="text-white px-6 py-2 rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={githubicon}
                  alt="github Icon"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Dawit F. Amanu. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
