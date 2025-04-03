"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 font-mono">
      <main className="max-w-2xl w-full space-y-6 sm:space-y-8">
        <section className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            yoo, i'm jathin pranav singaraju!
          </h1>
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

        <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">currently:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>- working on smth cool, stay tuned</li>
            <li>- studying eecs + biz @ uc berkeley M.E.T.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">previously:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>- launched contests platform w/ 1k users + $10k revenue</li>
            <li>- swe @ hp + few startups</li>
            <li>- barry m goldwater scholar</li>
            <li>{`— ai/ml researcher @ unt —> 3 publications + 1 patent`}</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">projects:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/eyedentity"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                eye-dentity
              </Link>{" "}
              (calhacks - 1st place)
            </li>
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/nova-your-automated-pa"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                nova ai
              </Link>{" "}
              (calhacks - 2nd place)
            </li>
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/just-hurry"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                just hurry!
              </Link>{" "}
              (hackharvard)
            </li>
            <li>
              -{" "}
              <Link
                href="https://x.com/jp_singaraju/status/1837926719116005680"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                crime watch
              </Link>{" "}
              (palantir devcon)
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.youtube.com/watch?v=3qaAxZTMLfk&t=12s"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                grade genius
              </Link>{" "}
              (personal)
            </li>
            <li>
              -{" "}
              <Link
                href="https://www.youtube.com/watch?v=KhQo-jdlRg0"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                face mask detector
              </Link>{" "}
              (personal)
            </li>
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/ecogo-w3lzc9"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                ecogo
              </Link>{" "}
              (sdhacks - 1st place)
            </li>
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/sharez"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                share.
              </Link>{" "}
              (pennapps)
            </li>
            <li>
              -{" "}
              <Link
                href="https://devpost.com/software/spaceverse-yah3tl"
                className="underline decoration-gray-400 hover:decoration-gray-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                spaceverse
              </Link>{" "}
              (hackunt)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <p className="text-gray-600 text-xs sm:text-sm">
            please reach out, i would love to meet you!
          </p>

          <Link
            href="mailto:jathinpsingaraju@berkeley.edu"
            className="block text-gray-600 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-all text-xs sm:text-sm"
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
              <FaXTwitter size={20} sm={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/jpsingaraju"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} sm={24} />
            </Link>
            <Link
              href="https://github.com/jpsingaraju"
              className="text-gray-600 hover:text-purple-700 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} sm={24} />
            </Link>
            <Link
              href="https://instagram.com/jpsingaraju"
              className="text-gray-600 hover:text-pink-600 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} sm={24} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
