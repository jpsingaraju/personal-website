import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReact,
  FaPython,
  FaHtml5,
  FaAws,
  FaJava,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTensorflow,
  SiFlutter,
  SiGooglecloud,
  SiC,
} from "react-icons/si";

const NavIcon = ({ Icon, href, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-400 hover:${color} transition-colors duration-300`}
  >
    <Icon size={24} />
  </a>
);

const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
      {title}
    </h2>
    {children}
  </section>
);

const TimelineItem = ({ logo, company, title, date, isLeft }) => (
  <div
    className={`flex items-center mb-16 ${isLeft ? "flex-row-reverse" : ""}`}
  >
    <div className={`w-1/2 ${isLeft ? "text-right pr-8" : "pl-8"}`}>
      <h3 className="text-sm md:text-md sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-600">{company}</p>
      <p className="text-xs md:text-sm text-gray-500">{date}</p>
    </div>
    <div className="relative">
      <div className="w-16 h-16 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center relative">
        <img
          src={logo}
          alt={company}
          className="w-14 h-14 object-contain rounded-full"
        />
      </div>
    </div>
    <div className="w-1/2"></div>
  </div>
);

const ProjectCard = ({ logo, title, details, subtitle, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={logo}
          className="w-10 sm:w-12 object-contain rounded-full"
          alt={title}
        />
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 font-medium">{details}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
      <p className="text-gray-600 pt-4 font-extralight text-sm">{subtitle}</p>
    </div>
  </a>
);

const TechStack = () => (
  <Section title="Tech Stack">
    <div className="flex flex-wrap gap-6 sm:gap-8 justify-center items-center">
      <div className="relative group">
        <FaPython className="text-yellow-400" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Python
        </span>
      </div>
      <div className="relative group">
        <FaJava className="text-red-600" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Java
        </span>
      </div>
      <div className="relative group">
        <SiC className="text-blue-600" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          C
        </span>
      </div>
      <div className="relative group">
        <FaHtml5 className="text-orange-500" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          HTML5
        </span>
      </div>
      <div className="relative group">
        <FaAws className="text-orange-400" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          AWS
        </span>
      </div>
      <div className="relative group">
        <SiGooglecloud className="text-blue-600" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Google Cloud
        </span>
      </div>
      <div className="relative group">
        <FaReact className="text-blue-500" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          React.js
        </span>
      </div>
      <div className="relative group">
        <SiNextdotjs className="text-black" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Next.js
        </span>
      </div>
      <div className="relative group">
        <SiTailwindcss className="text-teal-500" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Tailwind CSS
        </span>
      </div>
      <div className="relative group">
        <SiTensorflow className="text-orange-500" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          TensorFlow
        </span>
      </div>
      <div className="relative group">
        <SiFlutter className="text-blue-400" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          Flutter
        </span>
      </div>
      <div className="relative group">
        <FaGithub className="text-gray-800" size={36} sm={48} />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 bg-gray-800 text-white text-xs sm:text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          GitHub
        </span>
      </div>
    </div>
  </Section>
);

export default function PersonalShowcase() {
  const experiences = [
    {
      logo: "/hp-logo.png",
      company: "HP Inc.",
      title: "Software Engineering Intern",
      date: "May 2024 - Aug 2024",
    },
    {
      logo: "/hustle-fund-logo.jpeg",
      company: "Angel Squad",
      title: "Angel Squad VC Fellow",
      date: "Sep 2023 - Aug 2024",
    },
    {
      logo: "/cyqiq-logo.jpeg",
      company: "Cyqiq AI",
      title: "Software Engineering Intern",
      date: "Oct 2023 - Mar 2024",
    },
    {
      logo: "/unt-logo.png",
      company: "University of North Texas",
      title: "Research Assistant",
      date: "Mar 2021 - Sep 2023",
    },
    {
      logo: "/empowermx-logo.jpeg",
      company: "EmpowerMX",
      title: "Software Engineering Intern",
      date: "Jun 2022 - Aug 2022",
    },
    {
      logo: "/cuttr-logo.jpeg",
      company: "Cuttr",
      title: "Co-Founder and CEO",
      date: "Dec 2021 - Jan 2023",
    },
  ];

  const projects = [
    {
      logo: "grade-genius.png",
      title: "Grade Genius",
      details: "750+ users",
      subtitle: "Flutter • Flask • GCP",
      description:
        "Intuitive and multifaceted gradebook mobile app for the Frisco Indepdent School District.",
      link: "https://www.youtube.com/watch?v=3qaAxZTMLfk&t=12s&ab_channel=JathinPranavSingaraju",
    },
    {
      logo: "facemask.png",
      title: "Face Mask Detector",
      details: "2K+ downloads",
      subtitle: "TensorFlow • Keras",
      description:
        "ML algorithm and dataset to identify masks on people's faces during COVID-19.",
      link: "https://www.youtube.com/watch?v=KhQo-jdlRg0&ab_channel=JathinPranavSingaraju",
    },
    {
      logo: "ecogo.png",
      title: "EcoGo",
      details: "SDHacks",
      subtitle: "HTML • SvelteKit • SQLite",
      description:
        "Simple web app that provides information on one's contribution to sustainability.",
      link: "https://devpost.com/software/ecogo-w3lzc9",
    },
    {
      logo: "share.png",
      title: "Share.",
      details: "PennApps",
      subtitle: "Flutter • Flask",
      description:
        "Financial web app for beginners to to learn about and enjoy the thrills of the stock market.",
      link: "https://devpost.com/software/sharez",
    },
    {
      logo: "spaceverse.png",
      title: "Spaceverse",
      details: "HackUNT",
      subtitle: "React • MongoDB",
      description:
        "End-to-end web app to educate the community about everything in the universe.",
      link: "https://devpost.com/software/spaceverse-yah3tl",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="bg-opacity-80 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <FaHome className="h-6 w-6 text-gray-800 hover:text-slate-500 transition-colors duration-300" />
            </Link>
            <div className="flex items-center space-x-6">
              <NavIcon
                Icon={FaLinkedin}
                href="https://www.linkedin.com/in/jathin-pranav-singaraju/"
                color="text-blue-600"
              />
              <NavIcon
                Icon={FaGithub}
                href="https://github.com/jp-singaraju"
                color="text-purple-700"
              />
              <NavIcon
                Icon={FaXTwitter}
                href="https://twitter.com/jp_singaraju"
                color="text-black"
              />
              <NavIcon
                Icon={FaInstagram}
                href="https://instagram.com/jp_singaraju"
                color="text-pink-600"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-8 mb-8">
            About Me
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 mt-2 leading-relaxed md:text-md">
            Hello, I'm a student at UC Berkeley's M.E.T. program,
            double-majoring in Electrical Engineering & Computer Sciences (EECS)
            and Business Administration 💼. When I'm not in class, I'm plotting
            the next world-changing startup 🌍 (just kidding, I'm probably
            building cool side projects 😉). And when I'm not doing that, I'm
            off on an adventure exploring unknown places 🌋. But most likely,
            you'll catch me "dunking" on the basketball court 🏀 or glued to the
            TV watching Steph Curry drain threes 📺!
          </p>
        </div>
        <Section>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} {...exp} isLeft={index % 2 === 1} />
            ))}
          </div>
        </Section>
        <Section title="Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>
        <TechStack />
      </main>
    </div>
  );
}
