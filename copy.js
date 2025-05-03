"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex px-4 mt-10 ml-10 sm:px-6 font-mono">
      <main className="max-w-2xl w-full space-y-6 sm:space-y-8">
        <section className="space-y-3">
          <div className="text-lg sm:text-xl font-bold">
            Jathin Pranav Singaraju
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

        {/* <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">currently:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>- working on smth cool, stay tuned</li>
            <li>- studying eecs + biz @ uc berkeley M.E.T.</li>
          </ul>
        </section> */}

        <section className="space-y-2">
          {/* <h2 className="text-xs sm:text-sm font-semibold">previously:</h2> */}
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
            <li>- studying eecs + biz @ uc berkeley M.E.T.</li>
            <li>- prev swe @ hp + few startups</li>
            <li>- barry m goldwater scholar</li>
            <li>
              — publications
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
              + patent
            </li>
          </ul>
        </section>

        {/* <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">projects:</h2>
          <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
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
              (treehacks)
            </li>
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
          </ul>
        </section> */}

        {/* <section className="space-y-2">
          <h2 className="text-xs sm:text-sm font-semibold">other:</h2>
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
          </ul>
        </section> */}

        <section className="space-y-3">
          {/* <p className="text-gray-600 text-xs sm:text-sm">
            please reach out, i would love to meet you!
          </p> */}

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
