import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-slate-500/40 via-white to-sky-200/70 flex items-center justify-center">
      <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start pl-28 z-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
            Jathin Pranav Singaraju
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Student. Entrepreneur. Adventurer.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/about"
              className="px-8 py-3 bg-slate-500 text-white text-lg rounded-3xl hover:bg-slate-700 transition-colors"
            >
              About Me
            </Link>
            <a
              href="mailto:pran.singaraju@gmail.com?subject=Contact%20from%20your%20website&body=Hello%20Jathin,"
              className="px-8 py-3 bg-slate-500 text-white text-lg rounded-3xl hover:bg-slate-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex gap-8 ml-4 pt-12">
          <a
            href="https://www.linkedin.com/in/jathin-pranav-singaraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/jp-singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-700 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://twitter.com/jp_singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaXTwitter size={32} />
          </a>
          <a
            href="https://instagram.com/jp_singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex absolute bottom-0 right-0 items-end justify-end z-10">
        <img
          src="main-photo.png"
          className="w-auto h-auto"
          style={{ width: "575px" }}
        />
      </div>
      <div className="bg-gray-100 lg:hidden flex flex-col items-center justify-center w-full h-full space-y-6 p-8">
        <img
          src="circular-photo.png"
          className="rounded-full w-48 h-48 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Jathin Pranav Singaraju
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Student. Entrepreneur. Adventurer.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/about"
            className="px-8 py-3 bg-slate-500 text-white text-lg rounded-3xl hover:bg-slate-700 transition-colors"
          >
            About Me
          </Link>
          <a
            href="mailto:pran.singaraju@gmail.com?subject=Contact%20from%20your%20website&body=Hello%20Jathin,"
            className="px-8 py-3 bg-slate-500 text-white text-lg rounded-3xl hover:bg-slate-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 pt-6">
          <a
            href="https://www.linkedin.com/in/jathin-pranav-singaraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/jp-singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-700 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://twitter.com/jp_singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaXTwitter size={32} />
          </a>
          <a
            href="https://instagram.com/jp_singaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
