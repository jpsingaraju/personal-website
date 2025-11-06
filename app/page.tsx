"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";

export default function Home(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-dvh flex items-center justify-center px-4 sm:px-6 font-mono overflow-hidden">
      <main className="max-w-2xl w-full space-y-8 sm:space-y-8">
        <section className="space-y-2">
          <div className="text-lg sm:text-xl font-bold">
            jathin pranav singaraju
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            builder, hooper,{" "}
            <Link
              href="https://sites.google.com/view/jps-art-portfolio/home"
              className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              artist
            </Link>
            , and poker degen ;)
          </p>
        </section>

        <section className="space-y-1">
          <h2 className="text-xs sm:text-sm font-semibold">currently:</h2>
          <ul className="space-y-0.5 text-gray-600 text-xs sm:text-sm">
            <li>- building cool stuff + investing</li>
            <li>- studying eecs + biz @ uc berkeley M.E.T.</li>
            <li>
              - incoming @{" "}
              <span
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span
                  className={`inline-block align-bottom transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                    isExpanded || isHovered
                      ? "opacity-0 max-w-0"
                      : "opacity-100 max-w-[1ch] mr-2"
                  }`}
                >
                  ▲
                </span>
                <span
                  className={`text-gray-600 inline-block align-bottom transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                    isExpanded || isHovered
                      ? "opacity-100 max-w-[6ch] mr-2"
                      : "opacity-0 max-w-0"
                  }`}
                >
                  vercel
                </span>
              </span>
              (summer 2026)
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">previously:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>- swe @ hp + few startups</li>
            <li>- barry m goldwater scholar</li>
            <li>
              — ai/ml researcher —&gt; publications
              <span className="text-xs align-super">
                [
                <Link
                  href="https://www.liebertpub.com/doi/10.1089/ten.TEC.2023.0150"
                  className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1
                </Link>
                ,
                <Link
                  href="https://aclanthology.org/2022.naacl-main.345/"
                  className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2
                </Link>
                ,
                <Link
                  href="https://aiche.onlinelibrary.wiley.com/doi/10.1002/btm2.10641"
                  className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3
                </Link>
                ]
              </span>{" "}
              +{" "}
              <Link
                href="https://patents.google.com/patent/US20250029359A1"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                patent
              </Link>
            </li>
          </ul>
        </section>

        <section className="space-y-1">
          <h2 className="text-xs sm:text-sm font-semibold">some projects:</h2>
          <ul className="space-y-0.5 text-gray-600 text-xs sm:text-sm">
            <li>
              -{" "}
              <Link
                href="https://derivium.co"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                derivium
              </Link>{" "}
              -&gt; options discovery engine
            </li>
            <li>
              -{" "}
              <Link
                href="https://x.com/jpsingaraju/status/1982939253463290265"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                harmoniq
              </Link>{" "}
              -&gt; calhacks (1st place)
            </li>
            <li>
              -{" "}
              <Link
                href="https://x.com/jpsingaraju/status/1977155001064825136"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                polyhedg
              </Link>{" "}
              -&gt; sftw x a16z hacks (2nd place)
            </li>
            {/* <li>
              -{" "}
              <Link
                href="https://kinetikgigs.com"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                kinetik
              </Link>{" "}
              -&gt; intel layer for recruiting
            </li> */}
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/posthuman"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                posthuman
              </Link>{" "}
              -&gt; treehacks
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <Link
            href="mailto:jathinpsingaraju@berkeley.edu"
            className="w-fit block text-gray-600 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-all text-xs sm:text-sm"
          >
            jathinpsingaraju@berkeley.edu
          </Link>

          <div className="flex gap-3 sm:gap-4 text-sm sm:text-base pt-2">
            <Link
              href="https://twitter.com/jpsingaraju"
              className="text-gray-600 hover:text-gray-800 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/jpsingaraju"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="https://github.com/jpsingaraju"
              className="text-gray-600 hover:text-purple-700 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://devpost.com/jpsingaraju"
              className="text-gray-600 hover:text-indigo-700 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiDevpost size={18} />
            </Link>
            <Link
              href="https://instagram.com/jpsingaraju"
              className="text-gray-600 hover:text-pink-600 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
