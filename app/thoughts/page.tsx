import Link from "next/link";

const thoughts = [
  {
    slug: "gita",
    title: "reflections on the bhagavad gita",
    minutes: 45,
    date: "2026-04-06",
    displayDate: "Apr 6, 2026",
  },
];

export default function ThoughtsIndex(): JSX.Element {
  return (
    <div className="min-h-screen bg-white font-mono flex justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        <header>
          <div className="py-6">
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-lg sm:text-xl font-bold">
                my writing archive
              </h1>
              <Link
                href="/"
                className="underline text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                back home
              </Link>
            </div>
          </div>
        </header>

        <main className="space-y-6 text-xs sm:text-sm text-gray-700">
          <section className="space-y-2">
            <p>
              This archive holds my essays and short-form notes. It includes
              reflections on cool literature I&apos;ve read, existential
              questions I&apos;ve been grappling with, and deep dives when a
              topic won&apos;t let go.
            </p>
          </section>

          <section className="pt-4 pb-12">
            <div className="space-y-3">
              {thoughts.map((post) => (
                <article
                  key={post.slug}
                  className="flex items-baseline gap-3 sm:gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <Link
                      href={`/thoughts/${post.slug}`}
                      className="underline decoration-gray-400 hover:decoration-gray-700 text-gray-900 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[0.7rem] sm:text-xs text-gray-500">
                      {post.minutes} min read
                    </p>
                  </div>
                  <div className="shrink-0 text-[0.7rem] sm:text-xs text-gray-400 text-right">
                    {post.displayDate}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
