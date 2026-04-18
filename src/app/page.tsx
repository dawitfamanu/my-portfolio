"use client";

import emailicon from "@/app/assets/emailicon.png";
import emojihub from "@/app/assets/emojihub.png";
import githubicon from "@/app/assets/githubicon.png";
import guild from "@/app/assets/guild.png";
import linkedinicon from "@/app/assets/linkedinicon.png";
import piqq from "@/app/assets/piqq.png";
import profilepic from "@/app/assets/profilepic.jpg";
import tastebuds from "@/app/assets/tastebuds.png";
import guildpic from "@/app/assets/theguildlandingpage.png";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Piqq — Baseball Community App",
    description:
      "A community platform for baseball fans to share highlights, discuss games, and connect with fellow supporters. Polymarket like Prediction Market for baseball games with fun prizes. Built with Next.js and React, TailwindCSS, and TanStack Query for efficient server-state management, caching, and a responsive, real-time feel.",
    image: piqq,
    url: "https://piqq.me",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "TanStack Query"],
  },
  {
    title: "The GUILD's Landing Page",
    description:
      "A sleek, fully responsive landing page for THE GUILD, built from a Figma design using React, TypeScript, and TailwindCSS. Features smooth horizontal scroll animations powered by Framer Motion and a Contact Us form connected to Gmail via OAuth v2.",
    image: guildpic,
    url: "https://jointheguild.org",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "OAuth v2"],
  },
  {
    title: "The GUILD — Web3 Community Platform",
    description:
      "A community platform built collaboratively with a team of six at DIIANT Consulting. Translated Figma designs into responsive code, integrated GraphQL and blockchain APIs, and optimized client-side rendering for a fast, seamless user experience.",
    image: guild,
    url: "https://beta.theguild.quest",
    tags: ["Next.js", "TypeScript", "Sass", "GraphQL", "Web3"],
  },
  {
    title: "Tastebuds — Restaurant Finder",
    description:
      "A cross-platform restaurant finder app for iOS and Android built with React Native. Contributed part-time, implementing visuals, integrating backend APIs, adding localization, and optimizing algorithms for managing restaurant hours.",
    image: tastebuds,
    url: "https://tastebuds.space",
    tags: ["React Native", "TypeScript", "REST API", "i18n"],
  },
  {
    title: "EmojiHub — Social Media with Emoji Marketplace",
    description:
      "A unique Android social media app combining a Twitter-like feed with an emoji marketplace. Users upload 3–5 second videos matched to emojis via Facebook's x3D model. Built with a team of four at Seoul National University.",
    image: emojihub,
    url: "https://github.com/snuhcs-course/swpp-2023-project-team-2",
    tags: ["Android", "Kotlin", "Jetpack Compose", "ML"],
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "React Native",
  "GraphQL",
  "Kotlin",
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "projects", "resume", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#DEDEDE] text-black font-sans">
      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#DEDEDE]/80 backdrop-blur-lg border-b border-black/8 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xl font-bold text-black">Dawit F. Amanu</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ul className="flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link text-sm font-medium transition-colors duration-200 ${
                      activeSection === href.slice(1)
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background blobs */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/15 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-slate-700 font-mono text-sm tracking-widest uppercase mb-4"
          >
            Hello, world! 👋
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none mb-6"
          >
            I&apos;m <span className="text-black">Dawit</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-2xl sm:text-3xl font-light text-gray-600 mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-base text-gray-500 max-w-xl mx-auto mb-10"
          >
            Building user-centric digital experiences with Next.js, React, and
            TypeScript. Passionate about crafting interfaces that are both
            beautiful and fast.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-black text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/25"
            >
              View My Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-black/15 text-black font-semibold text-sm hover:bg-black/5 hover:border-black/25 hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-black/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-[#FC4308] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-14"
          >
            <span className="text-[#FC4308] font-mono text-sm">01.</span>
            <h2 className="text-3xl font-bold text-black">About Me</h2>
            <div className="flex-1 h-px bg-black/8 ml-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-orange-400 blur-2xl opacity-15 scale-110" />
                <div className="relative rounded-2xl overflow-hidden border border-black/10 glow-accent">
                  <Image
                    src={profilepic}
                    alt="Dawit F. Amanu"
                    className="object-cover"
                    style={{ width: "288px", height: "320px" }}
                    width={288}
                    height={320}
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I&apos;m a passionate Frontend Developer with a CS degree from{" "}
                <span className="text-black font-medium">
                  Seoul National University
                </span>
                . Over the past two years I&apos;ve focused on building
                user-centric digital experiences, specializing in modern web and
                mobile development.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                I specialize in turning Figma designs into pixel-perfect,
                performant UIs with smooth animations and solid API
                integrations. Off-screen, you&apos;ll find me on the football
                pitch — it keeps me energized and inspired.
              </p>

              <div>
                <p className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="tag-pill"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="text-[#FC4308] font-mono text-sm">02.</span>
            <h2 className="text-3xl font-bold text-black">Projects</h2>
            <div className="flex-1 h-px bg-black/8 ml-4" />
          </motion.div>

          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.5}
                className="glass-card rounded-2xl overflow-hidden hover:border-orange-500/25 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 group"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-0`}
                >
                  {/* Project image */}
                  <div className="lg:w-1/2 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-64 lg:h-full min-h-64 relative"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Project content */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-[#FC4308] font-mono text-xs tracking-widest uppercase mb-3">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-black transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC4308] hover:text-orange-500 transition-colors duration-200 group/link w-fit"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resume ── */}
      <section id="resume" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-14"
          >
            <span className="text-[#FC4308] font-mono text-sm">03.</span>
            <h2 className="text-3xl font-bold text-black">Resume</h2>
            <div className="flex-1 h-px bg-black/8 ml-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-lg">
            {[
              { label: "English Resume", href: "/resume_eng.pdf", lang: "EN" },
              { label: "Korean Resume", href: "/resume_kr.pdf", lang: "KR" },
            ].map((item, i) => (
              <motion.a
                key={item.lang}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 border border-black/8 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[#FC4308]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black group-hover:text-black transition-colors duration-200">
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5 flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    PDF Download
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#FC4308] transition-colors duration-200 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[#FC4308] font-mono text-sm">04.</span>
            <h2 className="text-3xl font-bold text-black">Contact Me</h2>
            <div className="flex-1 h-px bg-black/8 ml-4" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-600 text-lg mb-12 max-w-xl"
          >
            I&apos;m open to new opportunities. Whether you have a question or
            just want to say hi — my inbox is always open!
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                icon: emailicon,
                label: "Email",
                value: "bfiqiruu@gmail.com",
                href: "mailto:bfiqiruu@gmail.com",
                alt: "Email",
              },
              {
                icon: linkedinicon,
                label: "LinkedIn",
                value: "dawit-fikru-amanu",
                href: "https://linkedin.com/in/dawit-fikru-amanu-280297152/",
                alt: "LinkedIn",
              },
              {
                icon: githubicon,
                label: "GitHub",
                value: "dawitfamanu",
                href: "https://github.com/dawitfamanu",
                alt: "GitHub",
              },
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.04, y: -3 }}
                className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4 border border-black/8 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group flex-1"
              >
                <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/10 transition-colors duration-300">
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-0.5">
                    {contact.label}
                  </p>
                  <p className="text-black font-medium text-sm truncate group-hover:text-black transition-colors duration-200">
                    {contact.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#FC4308] transition-colors duration-200 ml-auto flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-black/20 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Dawit F. Amanu. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </footer>

      {/* ── Scroll-to-top button ── */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-110 transition-all duration-200 z-50"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
