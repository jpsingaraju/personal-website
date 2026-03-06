import Link from "next/link";

const log = [
  {
    date: "2026",
    href: "https://april-blush.vercel.app",
    name: "april",
    desc: "your taxes, automatically filed",
    external: true,
  },
  {
    date: "2026",
    href: "https://devpost.com/software/bye-buy",
    name: "bye! buy!",
    desc: "agentic p2p marketplace",
    tag: "treehacks 1st",
    external: true,
  },
  {
    date: "2026",
    href: "https://github.com/jpsingaraju/giannis-kalshi-bot",
    name: "giannis",
    desc: "twitter + kalshi bot for giannis nba trade",
    external: true,
  },
  {
    date: "2026",
    href: "https://github.com/jpsingaraju/nfl-clip-coach",
    name: "clippr",
    desc: "ask a question, get the nfl clip",
    external: true,
  },
  {
    date: "2025",
    href: "https://devpost.com/software/clustr-tame6u",
    name: "clustr",
    desc: "reinventing the twitter algo",
    external: true,
  },
  {
    date: "2025",
    href: "https://derivium.co",
    name: "derivium",
    desc: "discover the best options trades",
    star: true,
    external: true,
  },
  {
    date: "2025",
    href: "https://github.com/jpsingaraju/axis",
    name: "axis",
    desc: "pc webcam to 3d mouse",
    external: true,
  },
  {
    date: "2025",
    href: "https://x.com/jpsingaraju/status/1982939253463290265",
    name: "harmoniq",
    desc: "medical cross-border compliance",
    tag: "calhacks 1st",
    external: true,
  },
  {
    date: "2025",
    href: "https://x.com/jpsingaraju/status/1977155001064825136",
    name: "polyhedg",
    desc: "certainty as a service",
    tag: "a16z hacks 2nd",
    star: true,
    external: true,
  },
  {
    date: "2025",
    href: "https://kinetikgigs.com",
    name: "kinetik",
    desc: "intel layer for recruiting",
    external: true,
  },
  {
    date: "2025",
    href: "https://devpost.com/software/posthuman",
    name: "posthuman",
    desc: "automated legacy management",
    external: true,
  },
  {
    date: "2024",
    href: "https://devpost.com/software/eyedentity",
    name: "eyedentity",
    desc: "jarvis for first responders",
    tag: "calhacks 1st",
    external: true,
  },
  {
    date: "2024",
    href: "https://devpost.com/software/nova-your-automated-pa",
    name: "nova ai",
    desc: "your automated personal assistant",
    tag: "calhacks 2nd",
    external: true,
  },
  {
    date: "2024",
    href: "https://devpost.com/software/just-hurry",
    name: "just hurry!",
    desc: "simplifying hurricane disaster relief",
    external: true,
  },
  {
    date: "2024",
    href: "https://x.com/jpsingaraju/status/1837926719116005680",
    name: "crime watch",
    desc: "la crime tracking platform",
    star: true,
    external: true,
  },
  {
    date: "2022",
    href: "https://devpost.com/software/sharez",
    name: "share.",
    desc: "social media for retail investors",
    external: true,
  },
  {
    date: "2022",
    href: "https://devpost.com/software/spaceverse-yah3tl",
    name: "spaceverse",
    desc: "crowdsourcing space knowledge",
    external: true,
  },
  {
    date: "2022",
    href: "https://devpost.com/software/ecogo-w3lzc9",
    name: "eco go",
    desc: "gamifying sustainability",
    tag: "sdhacks 1st",
    external: true,
  },
  {
    date: "2021",
    href: "https://www.youtube.com/watch?v=3qaAxZTMLfk",
    name: "grade genius",
    desc: "district grade app",
    star: true,
    external: true,
  },
  {
    date: "2020",
    href: "https://github.com/jpsingaraju/face-mask-detector",
    name: "face mask detector",
    desc: "ml model to detect face masks",
    external: true,
  },
];

const years = [...new Set(log.map((e) => e.date))].sort(
  (a, b) => Number(b) - Number(a),
);

export default function BuildLog(): JSX.Element {
  return (
    <div className="min-h-screen bg-white font-mono flex justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        <header>
          <div className="py-6">
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-lg sm:text-xl font-bold">my build log</h1>
              <Link
                href="/"
                className="underline text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                back home
              </Link>
            </div>
          </div>
        </header>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700">
          <p>
            This log showcases my journey as a builder. I just love finding
            problems, building solutions, and shipping them. I have a huge list
            of ideas in my notes app that I slowly work through. Whether
            it&apos;s a one day cook, a hackathon build, or a side quest,
            it&apos;ll end up here.
          </p>
          <p className="text-xs text-gray-500 italic pt-1">
            I've gone through and highlighted my most memorable, favorite
            builds!
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="space-y-6">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gray-400">
                    {year}
                  </span>
                  <div className="flex-1 border-t border-gray-200" />
                </div>
                <div className="space-y-2">
                  {log
                    .filter((e) => e.date === year)
                    .map((entry) => (
                      <div
                        key={entry.name}
                        className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[12rem_1fr] text-xs sm:text-sm"
                      >
                        <Link
                          href={entry.href}
                          className="underline decoration-gray-400 hover:decoration-gray-600 transition-all text-gray-900 w-fit block"
                          {...(entry.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          <span className={entry.star ? "bg-yellow-200" : ""}>
                            {entry.name}
                          </span>
                        </Link>
                        <div className="text-gray-600">
                          {entry.desc}
                          {entry.tag && (
                            <span className="text-gray-400"> · {entry.tag}</span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
