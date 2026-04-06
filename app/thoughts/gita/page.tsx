"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/** Condensed practical lines — same copy as each chapter's "practical application" in full view. */
const GITA_CONDENSED_VIEW: { n: number; name: string; short: string | null }[] =
  [
    {
      n: 1,
      name: "Arjuna Vishada Yoga",
      short:
        "Recognizing when you need guidance is a sign of wisdom, not weakness.",
    },
    {
      n: 2,
      name: "Sankhya Yoga",
      short: "Always maintain equanimity and do your work without attachment.",
    },
    {
      n: 3,
      name: "Karma Yoga",
      short:
        "Act without selfish motivation and set a righteous example for others.",
    },
    {
      n: 4,
      name: "Jnana Karma Sanyasa Yoga",
      short:
        "Learn from those who have mastered their fields and understand life.",
    },
    {
      n: 5,
      name: "Karma Sanyasa Yoga",
      short:
        "Find peace through inner reflection, not through external validation.",
    },
    {
      n: 6,
      name: "Dhyana Yoga",
      short:
        "Live in moderation and avoid extremes, don't do too little or too much.",
    },
    {
      n: 7,
      name: "Jnana Vijnana Yoga",
      short: "Don't stop at what is comfortable and good enough.",
    },
    {
      n: 8,
      name: "Aksara Brahma Yoga",
      short: "What occupies your mind shapes your reality: think positively.",
    },
    {
      n: 9,
      name: "Raja Vidya Raja Guhya Yoga",
      short: "Love what you do and do what you love.",
    },
    {
      n: 10,
      name: "Vibhuti Yoga",
      short: "Recognize excellence and aim to surround yourself with it.",
    },
    {
      n: 11,
      name: "Vishvarupa Darshana Yoga",
      short: "Always stay humble and hungry for knowledge.",
    },
    {
      n: 12,
      name: "Bhakti Yoga",
      short: "Your character is the only thing that matters.",
    },
    {
      n: 13,
      name: "Kshetra Kshetrajna Vibhaga Yoga",
      short: "Always think carefully before you act.",
    },
    {
      n: 14,
      name: "Guna Traya Vibhaga Yoga",
      short: "Through highs and lows, trust the process with unwavering faith.",
    },
    {
      n: 15,
      name: "Purushottama Yoga",
      short:
        "Dig deeper to find who you truly are. You are more than any name or label.",
    },
    {
      n: 16,
      name: "Daivasura Sampada Vibhaga Yoga",
      short:
        "Everything in life is a choice, so choose to walk in the path of light.",
    },
    {
      n: 17,
      name: "Shraddha Traya Vibhaga Yoga",
      short: "If you believe in something enough, it will happen.",
    },
    {
      n: 18,
      name: "Moksha Sanyasa Yoga",
      short:
        "Just be righteous and you will live a happy, healthy, and prosperous life.",
    },
  ];

export default function GitaPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageView, setPageView] = useState<"full" | "condensed">("full");

  useEffect(() => {
    const handleScroll = () => {
      const hub = document.getElementById("chapters-scroll-target");
      const scrollY = window.scrollY;
      let showButton = scrollY > 400;
      if (hub) {
        const rect = hub.getBoundingClientRect();
        const hubInView = rect.top < window.innerHeight && rect.bottom > 0;
        showButton = showButton && !hubInView;
      }
      setShowScrollTop(showButton);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const hub = document.getElementById("chapters-scroll-target");
    if (hub) {
      hub.scrollIntoView({ behavior: "smooth", block: "start" });
      // Clear the hash from the URL
      window.history.pushState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  const handleChapterLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]');
    const hash = link?.getAttribute("href") ?? null;
    if (!hash || hash === "#" || hash === "#chapters") return;
    e.preventDefault();
    const id = hash.slice(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", window.location.pathname + hash);
    }
  };

  return (
    <div className="min-h-screen bg-white font-mono flex justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <header>
          <div className="py-6">
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-lg sm:text-xl font-bold max-w-md">
                reflections on the bhagavad gita
              </h1>
              <Link
                href="/"
                className="underline text-gray-600 hover:text-gray-900 transition-colors text-sm whitespace-nowrap ml-4"
              >
                back home
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <article>
          <div className="space-y-8 text-xs sm:text-sm text-gray-700">
            <section id="personal-note" className="space-y-4">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                personal note
              </h2>
              <p className="indent-8">
                I'm genuinely proud of what this has turned out to be. I
                expected this to take a few weeks, but it turned into a
                semester-long project. I&apos;ve put a lot of effort into making
                this as foundational as possible. They say mastering the mind is
                mastering life, and the Gita might be the best guide we have for
                it. I can personally say that I&apos;ve changed a ton along the
                way, becoming more reflective and intentional with my decisions.
                Thank you for reading, and I wish you the best in your journey!
              </p>
              <div
                className="group mx-auto grid max-w-lg place-items-center text-center outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
                tabIndex={0}
              >
                <p className="col-start-1 row-start-1 text-sm sm:text-base leading-relaxed text-gray-800 underline decoration-dotted decoration-gray-400 underline-offset-2 visible group-hover:invisible group-focus-within:invisible">
                  असंशयं महाबाहो मनो दुर्निग्रहं चलम् अभ्यासेन तु कौन्तेय
                  वैराग्येण च गृह्यते
                </p>
                <p className="col-start-1 row-start-1 text-xs sm:text-sm leading-relaxed text-gray-800 underline decoration-dotted decoration-gray-400 underline-offset-2 invisible group-hover:visible group-focus-within:visible">
                  Asamshayam Mahabaho Mano Durnigraham Chalam,
                  <br />
                  Abhyasena Tu Kaunteya Vairagyena Cha Grihyate
                </p>
              </div>
              <p className="indent-8 italic text-gray-700">
                &ldquo;It is true that the mind is restless and difficult to
                control. But it can be conquered through regular practice and
                detachment.&rdquo; — Bhagavad Gita 6.35
              </p>
            </section>

            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                introduction
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  My interpretation of <em>The Bhagavad Gita</em> stems from
                  close study of{" "}
                  <a
                    href="https://www.amazon.com/Bhagavad-Gita-2nd-Eknath-Easwaran/dp/1586380192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    <em>The Bhagavad Gita translated by Eknath Easwaran</em>
                  </a>
                  . Easwaran goes into great detail to capture the teachings of
                  Sri Krishna in a sublime manner. As I read through each
                  chapter, I identified and analyzed what I consider to be Sri
                  Krishna's most profound verses. The insights presented here
                  reflect my own research and thinking.
                </p>
                <p>
                  Before I dive into the chapters, I first want to lay the
                  foundation for Hinduism as well as the Gita. Therefore,
                  throughout the introductory section, I have identified
                  integral concepts:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-8 text-xs sm:text-sm text-gray-700">
                  <li>
                    <em className="bg-yellow-200 px-1 py-0.5 rounded">
                      word(s)
                    </em>{" "}
                    — foundational principle
                  </li>
                </ul>
                <p>
                  Additionally, to better explain the Gita in its depth,
                  throughout the chapters, I have included the following
                  sections:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-8 text-xs sm:text-sm text-gray-700">
                  <li>
                    <em className="bg-orange-200 px-1 py-0.5 rounded">
                      spiritual lesson
                    </em>{" "}
                    — core teaching
                  </li>
                  <li>
                    <em className="bg-sky-200 px-1 py-0.5 rounded">
                      practical application
                    </em>{" "}
                    — daily takeaway
                  </li>
                  <li>
                    <em className="bg-pink-200 px-1 py-0.5 rounded">
                      chapter summary
                    </em>{" "}
                    — overview of events
                  </li>
                  <li>
                    <em className="bg-green-200 px-1 py-0.5 rounded">
                      important verses
                    </em>{" "}
                    — key quotes
                  </li>
                </ul>
                <p>
                  Many say the Gita is a religious book. However, I believe it
                  is a spiritual book to discover the meaning of life. While
                  there are characters and references to concepts from Hinduism,
                  the Gita preaches righteousness; its teachings serve as
                  universal values that transcend religion, color, and race.
                </p>
                <p>
                  My primary goal with this page is to document my own
                  reflections and understanding, but I also hope this serves as
                  a springboard for others who are curious about the Gita and
                  wish to explore its wisdom for themselves.
                </p>
              </div>
            </section>

            {/* Hindu Philosophy Section */}
            <section id="hindu-philosophy">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                the hindu philosophy
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  You are different from everything in the world: from a
                  different species, of a different color, with different
                  desires, etc. No living thing is the same. We live in a world
                  where we characterize these differences by "name and form."
                  For example, a bee is different from a human. And you are
                  different from your friend. And so on. In this way, reality to
                  us appears unique and separated. Nothing is unified.
                </p>
                <p>
                  However, rishis, ancient Hindu seers who encountered the
                  divine through mystical experience, discovered that reality
                  was in fact unified. And to explain the fragmentation, they
                  said that what we see, hear, smell, touch, and taste are
                  experiences that we deem as the ultimate truth. They defined
                  this concept as{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">maya</em>,
                  the energy that makes unity appear as countless things with
                  "name and form." By studying the mind through meditation, the
                  rishis discovered an indivisible reality that existed beyond
                  the visible world.
                </p>
                <p>
                  They defined this concept as{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">Brahman</em>
                  , absolute reality itself (the Godhead). An infinite, unified
                  spirit and the divine ground of existence. But what about me?
                  Who am I in this unified reality? I am{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">Atman</em>
                  ... the Self. A state of consciousness that transcends time
                  and change. When one's ego vanishes and the consciousness
                  separates itself from the mind and body, the Self emerges.
                </p>
                <p>
                  As Easwaran says, "Atman is Brahman: the Self in each person
                  is not different from the Godhead" (p. 26). This means God
                  dwells within everyone. By discovering the true Self, you will
                  be able to recognize Brahman, the divine unity connecting all
                  existence.
                </p>
              </div>
            </section>

            {/* Self-realization Section */}
            <section id="self-realization">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                attaining self-realization
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  This leads us to the essence and most important part of
                  Hinduism: becoming one with Brahman. To understand this, we
                  must conceptualize{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">dharma</em>{" "}
                  and{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">karma</em>{" "}
                  in the light of reincarnation.
                </p>
                <p>
                  Dharma literally means "support from within," and in broader
                  terms it represents virtue, justice, and righteousness: the
                  right way to live according to your nature and duties. Now,
                  any action you take or thought you have will have
                  consequences. And those consequences will have more
                  consequences, and so on. This cascading network of effects is
                  called karma. In Sanskrit, karma means "action" or "deed." And
                  as cliché as it may sound, everything that happens to us, good
                  or bad, was caused by something we did in the past.
                </p>
                <p>
                  Often, karma has a negative connotation in the Western world.
                  However, karma can be good or bad. It is simply the law of
                  cause and effect. When karma remains unresolved, the soul
                  enters{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">samsara</em>
                  , the cycle of birth, death, and rebirth (reincarnation). For
                  example (though this is oversimplified), a greedy person might
                  be reborn into poverty to learn generosity, or a compassionate
                  person may be reborn into favorable circumstances that reflect
                  their selfness.
                </p>
                <p>
                  A person who is Self-realized transcends all karma and attains{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">moksha</em>.
                  At the time of death, they become one with Brahman, absorbed
                  into the divine. To successfully reach this state, one must
                  conquer{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">kama</em>,
                  feelings of gratification that entrap us in the concept of
                  samsara, and cultivate{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    shraddha
                  </em>
                  , which translates as "faith" but conceptually means
                  unwavering trust in the values that govern life. Equally
                  important is acting without ego and through "actionless
                  actions," where actions happen through you but not by you, as
                  there is no "I" claiming ownership of them.
                </p>
                <p>
                  This liberation can be pursued through various spiritual
                  paths, which Sri Krishna elaborates in the Gita as the yogas
                  of action, devotion, knowledge, and meditation. When
                  Self-realization occurs, maya fades away, and you see Brahman
                  in everything and everything in Brahman. To understand how the
                  Gita guides us toward this realization, we must explore the
                  philosophical framework it draws upon.
                </p>
              </div>
            </section>

            {/* Gita's Essence Section */}
            <section id="gita-essence">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                the gita's essence
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  There are six main schools of philosophy in Hinduism—Sankhya,
                  Yoga, Nyaya, Vaisheshika, Mimamsa, and Vedanta—each
                  interpreting the Vedas in different ways to provide frameworks
                  for Self-realization. Vedanta, the most widely influential
                  school today, is the philosophy we explored above. The Sankhya
                  school, on the other hand, describes the inner complexities of
                  the mind through a clear, systematic vocabulary. Since the
                  Gita draws heavily on Sankhya's psychological framework while
                  remaining philosophically Vedantic, understanding Sankhya will
                  provide deeper insight into Sri Krishna's teachings.
                </p>
                <p>
                  The Sankhya philosophy distinguishes between{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">Purusha</em>{" "}
                  (the Self, like Vedanta's Atman) and{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    prakriti
                  </em>{" "}
                  (everything else). Prakriti consists of three{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">gunas</em>,
                  the fundamental forces of energy that compose reality:{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">tamas</em>{" "}
                  (inertia, ignorance, dullness),{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">rajas</em>{" "}
                  (passion, activity, desire), and{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">sattva</em>{" "}
                  (purity, clarity, harmony). Everything in the mental and
                  physical world contains these three qualities in varying
                  proportions, constantly shifting and interacting. The Gita
                  presents spiritual evolution as the transition from tamas to
                  rajas to sattva, and ultimately to unity with the divine,
                  combining Sankhya's psychology with Vedanta's goal of
                  realizing Atman.
                </p>
                <p>
                  As Easwaran says, "[The Gita] is a handbook for
                  Self-realization and a guide to action" (p. 48). The Gita
                  describes itself as a <em>brahma vidyayam yogashastra</em>, a
                  scripture on the knowledge of Brahman and the practice of{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">yoga</em>.
                  Yoga literally means "union" or "spiritual practice," and can
                  refer both to any path leading to the divine and to specific
                  systematic methods like the Yoga school of thought.
                </p>
                <p>
                  Sri Krishna presents multiple yogic paths to Self-realization:{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    jnana yoga
                  </em>{" "}
                  (knowledge),{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    bhakti yoga
                  </em>{" "}
                  (devotion), and{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    karma yoga
                  </em>{" "}
                  (selfless action). He also discusses{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    raja yoga
                  </em>{" "}
                  (meditation), the path of mental discipline through
                  concentration and breathwork. Most people today associate yoga
                  with physical postures, but these exercises are just one small
                  part of raja yoga's broader practice of mind control.
                </p>
                <p>
                  Throughout the Gita's eighteen chapters, Sri Krishna weaves
                  these four paths together, showing how they complement each
                  other. While each path alone can lead to liberation, he
                  teaches that integrating them all is most effective: act
                  selflessly, cultivate devotion, pursue knowledge, and practice
                  meditation. Now let us turn to the story of how the Gita came
                  to be.
                </p>
              </div>
            </section>

            {/* The Mahabharata Section */}
            <section id="mahabharata">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                the mahabharata
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  Sometime around 1000 BC, there existed a kingdom called
                  Hastinapura, ruled by King Pandu. His older brother,
                  Dhritarashtra, was born blind and thus could not inherit the
                  throne, so he served as Pandu's right-hand man. King Pandu had
                  five sons—Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva
                  (collectively known as the Pandavas)—while Dhritarashtra
                  fathered a hundred sons, the eldest being Duryodhana
                  (collectively known as the Kauravas). All the young princes
                  grew up together in the kingdom, learning the skills of war
                  from their guru, Dronacharya, under the guidance of the
                  revered elder Bhishma, the grand uncle who had taken a vow to
                  serve the throne.
                </p>
                <p>
                  One day, King Pandu died during a spiritual retreat in the
                  forest. Dhritarashtra naturally assumed the throne as regent
                  until Yudhishthira, Pandu's eldest son and rightful heir, came
                  of age. However, Dhritarashtra's love for his own eldest son,
                  Duryodhana, clouded his judgment. Rather than passing the
                  throne to Yudhishthira, Dhritarashtra allowed Duryodhana's
                  ambition to grow. Duryodhana, consumed by jealousy and greed,
                  refused to share even a portion of the kingdom with his
                  cousins. This refusal ultimately led to the division between
                  the Pandavas and Kauravas, culminating in the decision to wage
                  the Kurukshetra War for the throne of Hastinapura. Tragically,
                  despite their love for the Pandavas, both Dronacharya and
                  Bhishma were bound by duty to fight on the Kauravas' side,
                  adding to the moral complexity of the war.
                </p>
                <p>
                  This struggle for power is preserved in{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    The Mahabharata
                  </em>
                  , an epic composed in ancient India that documents this war.
                  With over 1.8 million words, it is the longest piece of
                  literature in the world. If you want to learn more about the
                  Mahabharata and its events, I would recommend reading this{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Mahabharata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    <em>Wikipedia article</em>
                  </a>
                  , which surprisingly contains a comprehensive overview.
                </p>
              </div>
            </section>

            {/* Setting the Scene Section */}
            <section id="setting-scene">
              <h2 className="text-xs sm:text-sm font-semibold mb-2">
                setting the scene
              </h2>
              <div className="space-y-2 [&_p]:indent-8">
                <p>
                  As laid out by the Mahabharata, there are two central figures
                  in the Gita: Arjuna, one of the five Pandava brothers and the
                  greatest warrior of his time, and Sri Krishna, Arjuna's
                  charioteer and an incarnation of God. Just before the war
                  begins, Arjuna, overcome with moral doubt about fighting his
                  own relatives, including his beloved teacher Dronacharya and
                  grand uncle Bhishma, refuses to fight.
                </p>
                <p>
                  It is in this moment that Sri Krishna delivers the teachings
                  that comprise{" "}
                  <em className="bg-yellow-200 px-1 py-0.5 rounded">
                    The Bhagavad Gita
                  </em>
                  —nearly seven hundred verses of profound instruction on
                  dharma, the nature of the Self, shraddha, and the paths to
                  spirituality.
                </p>
                <p>
                  Sanjaya, Dhritarashtra's charioteer who possessed divine
                  vision, would later narrate the events of the battlefield,
                  including the Gita itself, to the blind king. The Gita we read
                  today is thus Sanjaya's account of Sri Krishna's teachings,
                  narrated to Dhritarashtra as the battle unfolds.
                </p>
                <p>
                  In Sanskrit, "Bhagavad" translates to "of God" and "Gita"
                  translates to "song." And so, with that, let the{" "}
                  <em>"Song of God"</em> begin.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Table of Contents Section */}
            <section id="chapters">
              <p
                id="chapters-scroll-target"
                className="mb-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-mono scroll-mt-4"
              >
                You can choose to read my reflections in either a full or
                condensed view. The full layout walks through every chapter in
                depth, while the condensed version provides the main takeaway of
                each chapter for daily application. I recommend reading the full
                layout to get the most out of it.
              </p>
              <div
                className="mb-4 text-xs sm:text-sm font-mono"
                role="group"
                aria-label="Choose full or condensed layout"
              >
                <button
                  type="button"
                  onClick={() => setPageView("full")}
                  className={`bg-transparent border-0 p-0 cursor-pointer font-mono ${
                    pageView === "full"
                      ? "font-semibold text-gray-900 underline underline-offset-2"
                      : "text-gray-500 no-underline hover:text-gray-800"
                  }`}
                >
                  full
                </button>
                <span className="text-gray-400 mx-1.5" aria-hidden>
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => setPageView("condensed")}
                  className={`bg-transparent border-0 p-0 cursor-pointer font-mono ${
                    pageView === "condensed"
                      ? "font-semibold text-gray-900 underline underline-offset-2"
                      : "text-gray-500 no-underline hover:text-gray-800"
                  }`}
                >
                  condensed
                </button>
              </div>
              <div className="border-t border-gray-200 mb-6" />

              {pageView === "condensed" ? (
                <div id="table-of-contents" className="mb-8">
                  <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
                    chapters
                  </h2>
                  <div className="space-y-5 text-xs sm:text-sm text-gray-700">
                    {GITA_CONDENSED_VIEW.map((ch) => (
                      <div key={ch.n} className="flex gap-3 sm:gap-4">
                        <span className="shrink-0 w-7 sm:w-8 text-right tabular-nums text-gray-900">
                          {ch.n}.
                        </span>
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="font-semibold text-gray-900">
                            {ch.name}
                          </div>
                          {ch.short != null ? (
                            <p className="text-gray-600 leading-relaxed indent-0">
                              {ch.short}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-8" />
                </div>
              ) : (
                <>
                  <div id="table-of-contents">
                    <h2 className="text-lg sm:text-xl font-bold mb-6">
                      table of contents
                    </h2>

                    {/* Chapters */}
                    <nav className="mb-8" onClick={handleChapterLinkClick}>
                      <h3 className="text-xs sm:text-sm mb-2 font-semibold">
                        chapters
                      </h3>
                      <div className="grid grid-cols-1 gap-y-2 text-xs sm:text-sm text-gray-700">
                        <div>
                          <a
                            href="#chapter-1"
                            className="hover:text-gray-900 underline"
                          >
                            1. Arjuna Vishada Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-2"
                            className="hover:text-gray-900 underline"
                          >
                            2. Sankhya Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-3"
                            className="hover:text-gray-900 underline"
                          >
                            3. Karma Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-4"
                            className="hover:text-gray-900 underline"
                          >
                            4. Jnana Karma Sanyasa Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-5"
                            className="hover:text-gray-900 underline"
                          >
                            5. Karma Sanyasa Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-6"
                            className="hover:text-gray-900 underline"
                          >
                            6. Dhyana Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-7"
                            className="hover:text-gray-900 underline"
                          >
                            7. Jnana Vijnana Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-8"
                            className="hover:text-gray-900 underline"
                          >
                            8. Aksara Brahma Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-9"
                            className="hover:text-gray-900 underline"
                          >
                            9. Raja Vidya Raja Guhya Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-10"
                            className="hover:text-gray-900 underline"
                          >
                            10. Vibhuti Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-11"
                            className="hover:text-gray-900 underline"
                          >
                            11. Vishvarupa Darshana Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-12"
                            className="hover:text-gray-900 underline"
                          >
                            12. Bhakti Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-13"
                            className="hover:text-gray-900 underline"
                          >
                            13. Kshetra Kshetrajna Vibhaga Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-14"
                            className="hover:text-gray-900 underline"
                          >
                            14. Guna Traya Vibhaga Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-15"
                            className="hover:text-gray-900 underline"
                          >
                            15. Purushottama Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-16"
                            className="hover:text-gray-900 underline"
                          >
                            16. Daivasura Sampada Vibhaga Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-17"
                            className="hover:text-gray-900 underline"
                          >
                            17. Shraddha Traya Vibhaga Yoga
                          </a>
                        </div>
                        <div>
                          <a
                            href="#chapter-18"
                            className="hover:text-gray-900 underline"
                          >
                            18. Moksha Sanyasa Yoga
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-8"></div>

                  {/* Chapter 1 */}
                  <section id="chapter-1" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 1: arjuna vishada yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The War Within
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-1-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One must surrender to honest confusion to achieve
                        spiritual wisdom because even the most qualified cannot
                        find morality in complex situations.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-1-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Do not hesitate to seek help when facing a difficult
                        problem. Recognizing when you need guidance is a sign of
                        wisdom, not weakness.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-1-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna to drive the chariot between the
                        two armies. As the chariot passes through the Kauravas
                        side, Arjuna is stunned to see his cousins, uncles,
                        friends, and gurus preparing to fight against him.
                        Although he understands the greed of the opposing side,
                        he is unwilling to fight them, as he would rather die at
                        their hands than kill close ones. Arjuna doesn't want to
                        be a sinner and questions what happiness life provides
                        without relatives. Overcome with confusion, Arjuna lets
                        go of the Gandiva, his bow, and sits down on his
                        chariot.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-1-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 1.32 - 1.34
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "O Krishna, I have no desire for victory, or for a
                          kingdom or pleasures. Of what use is a kingdom or
                          pleasure or even life, if those for whose sake we
                          desire these things — teachers, fathers, sons,
                          grandfathers, uncles, in-laws, grandsons, and others
                          with family ties — are engaging in this battle,
                          renouncing their wealth and their lives?"
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> If
                          pursuing dharma requires killing those we love, what
                          meaning does love, or life itself, have?
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 1.43
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "The timeless spiritual foundations of family and
                          society would be destroyed by these terrible deeds,
                          which violate the unity of life."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Arjuna believes that Moksha isn't possible if the
                          foundations of familial dharma are destroyed. He
                          claims there is no reason to engage in the war,
                          because the war's "terrible deeds" violate the unity
                          of life, Brahman, itself.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 1.47
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Overwhelmed by sorrow, Arjuna spoke these words. And
                          casting away his bow and his arrows, he sat down in
                          his chariot in the middle of the battlefield."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Arjuna surrenders his weapons symbolizing a complete
                          spiritual crisis. By laying down his bow, he openly
                          invites Sri Krishna's guidance.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 2 */}
                  <section id="chapter-2" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 2: sankhya yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Self-Realization
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-2-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who frees the mind from attachment and aversion to
                        the senses and desires can attain Self-realization,
                        which is true immortality.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-2-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Always maintain equanimity and do your work without
                        attachment to success or failure.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-2-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        In response to Arjuna's despair, Sri Krishna urges him
                        to fulfill his warrior duty and fight. He reminds Arjuna
                        that a warrior's dharma is to uphold justice and defeat
                        evil, as abandoning the battle out of fear would bring
                        dishonor, which is worse than death. To relieve Arjuna's
                        grief, Sri Krishna explains that pleasure and pain are
                        fleeting sensations affecting only the body, and one
                        must transcend them to realize the Self. The Self is
                        eternal; it has no birth or death, so only the body
                        perishes. However, actions performed with selfish desire
                        and attachment create karma, which binds the soul to the
                        cycle of rebirth. Therefore, Sri Krishna tells Arjuna to
                        act without attachment to results, transcending ego. By
                        performing his duty with equanimity, Arjuna can
                        ultimately find liberation.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-2-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 2.38
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Having made yourself alike in pain and pleasure,
                          profit and loss, victory and defeat, engage in this
                          great battle and you will be freed from sin."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Act
                          with composure in whatever you do. Be steady
                          regardless of the outcome you experience and learn to
                          control your reactions to it.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 2.40
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "On this path effort never goes to waste, and there is
                          no failure. Even a little spiritual awareness will
                          protect you from the greatest fear."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Quite
                          literally the epitome of life.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 2.47
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "You have the right to work, but never to the fruit of
                          work. You should never engage in action for the sake
                          of reward, nor should you long for inaction."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          is probably one of the most important verses of the
                          Gita, so I have included the actual Sanskrit verse:
                          Karmanye vadhikaraste Ma Phaleshu Kadachana, Ma
                          Karmaphalaheturbhurma Te Sangostvakarmani. When you do
                          something, never worry about the result. Just ensure
                          that you do your job according to dharma and let the
                          rest happen on its own.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 2.62 - 2.63
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "When you keep thinking about sense objects,
                          attachment comes. Attachment breeds desire, the lust
                          of possession that burns to anger. Anger clouds the
                          judgement; you can no longer learn from past mistakes.
                          Lost is the power to choose between what is wise and
                          what is unwise, and your life is utter waste."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Train
                          your mind to let go of attachment to sensory
                          experiences, especially those rooted in selfish
                          desire. Without the ability to make wise decisions,
                          life loses its meaning. And once this downward spiral
                          begins, you experience chaos and confusion.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 2.68 - 2.69
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "[A Self-realized] sage awakes to light in the night
                          of all creatures. That which the world calls day, the
                          night of ignorance to the wise."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> One
                          of my favorite metaphors: a Self-realized sage is
                          awake to Brahman while the world sleeps in spiritual
                          ignorance. Conversely, what the world considers 'day'
                          (material pleasures, sensory experiences, ego,
                          separateness) is maya to the wise.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 3 */}
                  <section id="chapter-3" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 3: karma yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Selfless Service
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-3-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who conquers selfish desire and acts selflessly,
                        letting the Self transcend the ego, will ultimately be
                        freed from karma.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-3-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Do not avoid action; actively fulfill your duties for
                        the welfare of all. Act without selfish motivation and
                        set a righteous example that others will follow.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-3-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna, thinking meditation is the answer to his
                        confusion, asks why he must fight if knowledge is
                        superior to action. In response, Sri Krishna clarifies
                        that avoiding action is not the path to liberation.
                        Instead, he instructs Arjuna to act, but without selfish
                        desire. He explains that all beings are bound to act by
                        the three gunas, and even the wise must continue to act
                        to maintain cosmic order and set an example for others.
                        Sri Krishna urges Arjuna to perform his warrior duty for
                        the welfare of the world. He tells Arjuna that by acting
                        selflessly and offering all actions to the divine,
                        Arjuna can transcend karma and achieve liberation while
                        still engaged in the world.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-3-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 3.08
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Fulfill all your duties; action is better than
                          inaction. Even to maintain your body, Arjuna, you are
                          obliged to act."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Never
                          engage in inaction, for it is physically impossible.
                          You are always breathing, thinking, existing. Since
                          action is unavoidable, fulfill your duties consciously
                          rather than letting them happen unconsciously.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 3.19 - 3.20
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Strive constantly to serve the welfare of the world;
                          by devotion to selfless work one attains the supreme
                          goal of life. Do your work with the welfare of others
                          always in mind. It was by such work that Janaka
                          attained perfection; others too have followed this
                          path."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Even
                          those who attained Enlightenment, like Janaka,
                          followed a path of selfless work. Dedicate yourself to
                          serving the community around you.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 3.35
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "It is better to strive in one's own dharma than to
                          succeed in the dharma of another. Nothing is ever lost
                          in following one's own dharma, but competition in
                          another's dharma breeds fear and insecurity."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Always follow what you believe is right; never get
                          lost in what anyone else is doing. Stay on your own
                          path.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 3.42 - 3.43
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "The senses are higher than the body, the mind higher
                          than the senses; above the mind is the intellect, and
                          above the intellect is the Atman. Thus, knowing that
                          which is supreme, let the Atman rule the ego. Use your
                          mighty arms to slay the fierce enemy that is selfish
                          desire."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          really like how this verse describes the hierarchy of
                          consciousness (body → senses → mind → intellect →
                          Atman). To attain the Self, let the Atman control the
                          mind, senses, and ego, and conquer selfish desire.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 4 */}
                  <section id="chapter-4" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 4: jnana karma sanyasa yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Wisdom in Action
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-4-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who overcomes doubt and seeks knowledge on the path
                        to spiritual wisdom will ultimately find eternal peace
                        (the Self).
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-4-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Learn from those who have mastered their fields and
                        understand life deeply. Make learning and the pursuit of
                        knowledge a lifelong goal.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-4-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna reveals that this "wisdom" was known to
                        ancient saints and kings. When Arjuna questions how Sri
                        Krishna could have taught this ages ago, Sri Krishna
                        explains that while Arjuna has been born many times and
                        forgotten, Sri Krishna himself is eternal and takes
                        finite form whenever righteousness declines, manifesting
                        to protect the good and destroy evil. Sri Krishna
                        explains that when you see Brahman in everything and
                        offer your actions as selfless service, you achieve
                        liberation. Seek this wisdom from enlightened teachers,
                        he tells Arjuna, for knowledge destroys all karma.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-4-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 4.19
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "The awakened sages call a person wise when all his
                          undertakings are free from anxiety about results; all
                          his selfish desires have been consumed in the fire of
                          knowledge."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Those
                          who are wise exhibit two qualities: (1) they perform
                          their duties without attachment to results and (2)
                          they burn away selfish desires in their constant
                          pursuit of knowledge.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 4.34
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Approach those who have realized the purpose of life
                          and question them with reverence and devotion; they
                          will instruct you in this wisdom."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> A
                          famous sloka goes:{" "}
                          <em>
                            Matru Devo Bhava, Pitru Devo Bhava, Acharya Devo
                            Bhava, Atithi Devo Bhava.
                          </em>{" "}
                          This sloka says to revere your mother, father,
                          teacher, and guests (anyone you serve) as God. In the
                          same spirit, approach enlightened people with
                          reverence to receive their wisdom.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 4.39
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Those who take wisdom as their highest goal, whose
                          faith is deep and whose senses are trained, attain
                          wisdom quickly and enter into perfect peace."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> The
                          biggest takeaway from this chapter is simple: make
                          wisdom your highest goal, and you will find peace.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 5 */}
                  <section id="chapter-5" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 5: karma sanyasa yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Renounce & Rejoice
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-5-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who acts selflessly without attachment to results
                        and discovers peace within the Self attains liberation.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-5-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Find peace through inner reflection, not through
                        external validation or success.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-5-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks whether renunciation of action or selfless
                        action is superior. Sri Krishna clarifies that while
                        both lead to liberation, karma yoga is more practical:
                        true renunciation means acting without attachment to
                        results, not abandoning action. One who works
                        selflessly, offering actions to Brahman while
                        recognizing nature as the true doer, achieves peace and
                        liberation.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-5-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 5.10
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Those who surrender to Brahman all selfish
                          attachments are like the leaf of a lotus floating
                          clean and dry in water. Sin cannot touch them."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Love
                          this quote! Just like a lotus leaf that sits on water
                          but stays dry, you should fully participate in life
                          without letting outcomes disturb your inner peace.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 5.29
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "The wise master their senses, mind, and intellect
                          through meditation. Self-realization is their only
                          goal. Freed from selfish desire, fear, and anger, they
                          live in freedom always."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> What
                          does a Self-realized person perceive and feel? This
                          verse perfectly answers that question.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 6 */}
                  <section id="chapter-6" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 6: dhyana yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Practice of Meditation
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-6-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who practices consistency and steadies the restless
                        mind through yoga (meditation) can achieve union with
                        the Self.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-6-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Live in moderation and avoid extremes, don't do too
                        little and don't do too much. Work with consistency and
                        know that your efforts will never go to waste.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-6-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        In this chapter, Sri Krishna outlines the path of
                        meditation, emphasizing that true yoga means mastering
                        the mind through balanced living. He stresses moderation
                        in lifestyle, as extremes in either direction obstruct
                        inner peace. Sri Krishna also acknowledges the mind is
                        restless and difficult to control, like the wind, but
                        through sustained practice and detachment, it can be
                        steadied. Hence, Sri Krishna reassures Arjuna that no
                        spiritual effort is wasted. Even incomplete practice
                        carries forward into future lives until one reaches the
                        supreme goal.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-6-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 6.01
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "It is not those who lack energy or refrain from
                          action, but those who work without expectation of
                          reward who attain the goal of meditation. Theirs is
                          true renunciation."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          once again encapsulates what it means to find the
                          Self. It starts chapter 1 and is quite literally the
                          main idea of the Gita.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 6.05
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Reshape yourself through the power of your will;
                          never let yourself be degraded by self-will. The will
                          is the only friend of the Self, and the will is the
                          only enemy of the Self."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Very
                          important quote in my opinion. Your intention can be a
                          blessing or a curse, so use it effectively to discover
                          the Self. Make your intention your strongest weapon in
                          the path for liberation.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 6.19
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "When meditation is mastered, the mind is unwavering
                          like the flame of a lamp in a windless place."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> One
                          of the best analogies in the scripture. I see two
                          rooms: one with a flame and lamp without wind and one
                          with a flame and lamp with wind. The room with wind
                          has disturbances (inconsistencies) which put the flame
                          out (creating imbalance). The room without wind has no
                          disturbances (consistency) which keep the flame up
                          (maintain balance). The flame is our will, and the
                          room wind is like actions we take. Very cool example.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 6.35
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "It is true that the mind is restless and difficult to
                          control. But it can be conquered, Arjuna, through
                          regular practice and detachment."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Nothing is impossible: anything can be done with
                          utmost confidence.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 6.40
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Arjuna, my son, such a person will not be destroyed.
                          No one who does good work will ever come to a bad end,
                          either here or in the world to come."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          really like this verse because effort never goes to
                          waste. As long as you try your hardest and put in full
                          forth effort, your work will always see light.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 7 */}
                  <section id="chapter-7" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 7: jnana vijnana yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Wisdom from Realization
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-7-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who understands that Sri Krishna is Brahman, the
                        creator of everything and everything itself, has
                        achieved utmost wisdom and will find liberation.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-7-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Don't stop at what is comfortable and good enough. Keep
                        going until you truly master what you're pursuing.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-7-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna tells Arjuna to take refuge in him, and he
                        will help Arjuna attain complete wisdom (jnana) and
                        realization (vijnana). He reveals his divine nature,
                        explaining that he is both the material world and the
                        spiritual consciousness that animates it, and that
                        everything in existence is ultimately him. He also
                        explains that most people are deluded by the three gunas
                        and fail to recognize his eternal nature. Out of
                        thousands, only a few seek true knowledge, and among
                        seekers, only a rare one truly knows him. Those who
                        truly understand Sri Krishna and worship him with pure
                        devotion will ultimately find liberation.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-7-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 7.03 – 7.05
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "One person in many thousands may seek perfection, yet
                          of these only a few reach the goal and come to realize
                          me. Earth, water, fire, air, akasha, mind, intellect,
                          and ego — these are the eight divisions of my
                          prakriti. But beyond this I have another, higher
                          nature, Arjuna; it supports the whole universe and is
                          the source of life in all beings."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          really like these verses because it shows that out of
                          thousands of people, only a few truly seek spiritual
                          perfection, and among those seekers, only a few really
                          know Sri Krishna completely. Here, Sri Krishna
                          introduces both his natures, and I think understanding
                          them is essential to knowing the complete reality.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 7.21 – 7.23
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "When a person is devoted to something with complete
                          faith, I unify his faith in that. Then, when faith is
                          completely unified, one gains the object of devotion.
                          In this way, every desire is fulfilled by me. Those
                          whose understanding is small attain only transient
                          satisfaction: those who worship the gods go to the
                          gods. But my devotees come to me."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> These
                          verses really encapsulate what the chapter has to
                          offer. Whatever you devote yourself to with complete
                          faith, Sri Krishna strengthens that faith and helps
                          you attain it. This connects to the notion that he
                          introduced earlier: do your duty and don't worry about
                          the result. In essence, leave the rest up to me.
                          Additionally, I really like how he talks about other
                          Hindu gods. He essentially says that devoting yourself
                          to other gods will give you temporary satisfaction,
                          but if you devote yourself to me, you will attain
                          eternal peace.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 7.30
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Those who see me ruling the cosmos, who see me in the{" "}
                          <em>adhibhuta</em>, the <em>adhidaiva</em>, and the{" "}
                          <em>adhiyajna</em>, are conscious of me even at the
                          time of death."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          like this verse because it introduces three important
                          terms. Adhibhuta: the physical, material world
                          (everything you can see, touch, and experience with
                          your senses). Adhidaiva: the divine dimension (the
                          universal forces and energies that govern existence).
                          Adhiyajna: the principle of sacrifice itself (the
                          inner spirit of offering and devotion that connects
                          the material and divine). Those who comprehend that
                          Sri Krishna pervades all three dimensions always
                          remain conscious of him. This is the highest
                          realization because you are seeing that Brahman is
                          present in the physical world around you, in the
                          cosmic forces that govern it, and in the spirit of
                          devotion within you.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 8 */}
                  <section id="chapter-8" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 8: aksara brahma yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Eternal Godhead
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-8-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who constantly thinks of Sri Krishna and chants the
                        sound of the universe, "Aum," even at the time of death,
                        will unite with Brahman and attain liberation.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-8-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        What occupies your mind shapes your reality. Think
                        positively, and positive outcomes will follow.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-8-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna to explain Brahman, karma,
                        adhibhuta, adhidaiva, and adhiyajna. Sri Krishna
                        clarifies these concepts and emphasizes that remembering
                        the divine at the time of death determines one's
                        destination. He explains two paths the soul takes after
                        death: the northern path of light, symbolizing spiritual
                        illumination, leads to liberation; the southern path of
                        smoke, symbolizing spiritual darkness, leads to rebirth.
                        Sri Krishna teaches that by steadying the life's energy
                        (prana) in the crown of the head, chanting "Aum," and
                        keeping the mind fixed on him at death, one reaches the
                        supreme goal. He emphasizes that constant practice and
                        devotion throughout life prepare the mind for this final
                        moment.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-8-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 8.14
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "I am easily attained by the person who always
                          remembers me and is attached to nothing else. Such a
                          person is a true yogi, Arjuna."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Consistency and simplicity in devotion lead directly
                          to Sri Krishna. This is why constant practice
                          throughout life matters; your thoughts reflect your
                          life's habits.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 8.17
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Those who understand the cosmic laws know that the
                          Day of Brahma ends after a thousand yugas and the
                          Night of Brahma ends after a thousand yugas."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Let
                          me explain what I understand about the Hindu
                          cosmological philosophy here. Time is divided into
                          cycles called yugas, with four ages that repeat:{" "}
                          <em>Satya Yuga</em> (1,728,000 years—age of truth and
                          righteousness), <em>Treta Yuga</em> (1,296,000
                          years—age when virtue begins to decline),{" "}
                          <em>Dvapara Yuga</em> (864,000 years—age when virtue
                          declines further and duality emerges),{" "}
                          <em>Kali Yuga</em> (432,000 years—the current age of
                          darkness and moral decline). Together, these four
                          yugas form one <em>Maha Yuga</em> cycle of 4,320,000
                          years. A thousand of these Maha Yuga cycles constitute
                          one Day of Brahma (4.32 billion years), during which
                          the universe manifests and evolves. This is followed
                          by one Night of Brahma, when the universe dissolves
                          back into Unmanifest potential. In Hindu cosmology,
                          the entire universe exists within Vishnu's cosmic
                          dream as he rests on the serpent Ananta in the cosmic
                          ocean. From Vishnu's navel emerges a lotus, from which
                          Brahma arises to create the world. When the cosmic day
                          ends, Shiva dissolves it all back into Vishnu. Then
                          the cycle repeats forever. Brahma, Vishnu, and Shiva,
                          the Trimurti, are not separate gods but manifestations
                          of the ultimate reality, Brahman.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 9 */}
                  <section id="chapter-9" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 9: raja vidya raja guhya yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Royal Path
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-9-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who fills the mind with Sri Krishna, loves him,
                        thinks of him, serves him, and always worships him will
                        ultimately be united with him.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-9-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Love what you do and do what you love.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-9-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna reveals the Hindu theology to Arjuna: he is
                        immanent in all creation and the force pervading the
                        entire universe. Everything is Sri Krishna, yet nothing
                        contains him. He explains that those who seek this
                        divine nature with devotion (bhakti) will reach him. Sri
                        Krishna treats all beings equally, but those who worship
                        him with love dwell within him, and he within them. Even
                        those who have sinned can become holy by turning to Sri
                        Krishna with sincere devotion. He promises that no one
                        truly devoted to him will ever come to harm or lead a
                        lost life.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-9-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 9.18 – 9.19
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "I am the goal of life, the Lord and support of all,
                          the inner witness, the abode of all. I am the only
                          refuge, the one true friend; I am the beginning, the
                          staying, and the end of creation; I am the word and
                          the eternal seed. I am heat; I give and withhold the
                          rain. I am immortality and I am death; I am what is
                          and what is not."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> The
                          verse encapsulates what Sri Krishna is saying when he
                          refers to himself and everything that pervades the
                          universe (both what exists and what doesn't exist).
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 9.27
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Whatever you do, make it an offering to me – the food
                          you eat, the sacrifices you make, the help you give,
                          even the suffering."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          is the essence of this chapter: worship Sri Krishna
                          with bhakti and everything else will fall into place.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 9.30 – 9.31
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Even sinners become holy when they take refuge in me
                          alone. Quickly their souls conform to dharma and they
                          attain to boundless peace. Never forget this Arjuna:
                          no one who is devoted to me will ever come to harm."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> No
                          matter what sins you have committed, those who always
                          seek Sri Krishna will find him and reach peace. This
                          isn't saying you should commit crimes; rather, it
                          means that if anything goes wrong, don't despair, turn
                          to Sri Krishna and he will restore balance.
                          Practically, this means finding something greater than
                          yourself to connect with brings peace even in
                          difficult times.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 10 */}
                  <section id="chapter-10" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 10: vibhuti yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Divine Splendor
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-10-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who encounters strength, beauty, or power should
                        recognize it as coming from a spark of Sri Krishna's
                        glory, for he is capable of infinite manifestations.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-10-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Recognize excellence and aim to surround yourself with
                        it.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-10-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna to describe his divine
                        manifestations. Sri Krishna explains that his powers are
                        endless, but he will describe the most prominent ones.
                        He is the beginning, middle, and end of all things.
                        Among the divine, he is Vishnu; among scriptures, he is
                        the sacred texts; among creatures, he is the lion. He is
                        all feelings, birth and death itself, time, the Self
                        within all beings. Krishna lists divine manifestation
                        (vibhuti) after divine manifestation, showing that
                        wherever there is excellence, power, or beauty, it is a
                        part of his divine splendor. He concludes by telling
                        Arjuna that there is no end to his divine
                        manifestations: he supports the entire universe with
                        just a single fragment of his being.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-10-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 10.20
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "I am the true Self in the heart of every creature,
                          Arjuna, and the beginning, middle, and end of their
                          existence."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          verse pretty much sums up what Sri Krishna tells
                          Arjuna in this chapter. This verse is the beginning to
                          his list of prominent manifestations.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 10.39
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "I am the seed that can be found in every creature,
                          Arjuna; for without me nothing can exist, neither
                          animate or inanimate."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Here,
                          Sri Krishna says nothing exists without him. This
                          seems contradictory to an earlier chapter where he
                          said everything is him, yet nothing contains him. But
                          the point is this: he is the source of all existence.
                          Everything emerges from him, exists because of him,
                          yet he transcends it all. He is both immanent (within
                          everything) and transcendent (beyond everything).
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 11 */}
                  <section id="chapter-11" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 11: vishvarupa darshana yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Cosmic Vision
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-11-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who attains union with Sri Krishna through unfailing
                        devotion will reach ultimate peace, but the vision of
                        the cosmic form is granted only by divine grace.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-11-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Always stay humble. The more you know, the more you
                        realize how little you actually understand.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-11-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna to reveal his cosmic form
                        visually. Sri Krishna grants him divine vision and
                        displays his universal form: infinite faces and eyes,
                        celestial ornaments, the brilliance of a thousand suns,
                        and countless manifestations of the universe within the
                        body of the God of gods. Arjuna experiences blissful
                        wonder (savikalpa samadhi), but this awe quickly
                        transforms into terror as he witnesses the war unfold:
                        warriors consumed in Krishna's flaming mouths, eternal
                        fire, and destruction beyond comprehension. This
                        overwhelming vision approaches formless absorption
                        (nirvikalpa samadhi), but Arjuna's fear prevents him
                        from fully dissolving into it. Shocked, Arjuna begs
                        Krishna to return to his gentle human form. Sri Krishna
                        compassionately obliges and reassures Arjuna that all is
                        well.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-11-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 11.10
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "He appeared with an infinite number of faces,
                          ornamented by heavenly jewels, displaying unending
                          miracles and the countless weapons of the power."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Here,
                          Sri Krishna reveals his infinite divine form in all
                          its glory.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 11.12
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "If a thousand suns were to rise in the heavens at the
                          same time, the blaze of their light would resemble the
                          splendor of that supreme spirit."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          really like this verse because it demonstrates the
                          brilliance that the supreme embodies.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 11.30 – 11.31
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "You lap the worlds into your burning mouths and
                          swallow them. Filled with your terrible radiance, O
                          Vishnu, the whole of creation bursts into flames. Tell
                          me who you are, O Lord of terrible form. I bow before
                          you; have mercy! I want to know who you are, you who
                          existed before all creation. Your nature and workings
                          confound me."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Arjuna begs for mercy as the vision becomes unbearably
                          terrifying, showing why fully comprehending God is
                          nearly impossible.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 12 */}
                  <section id="chapter-12" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 12: bhakti yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Way of Love
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-12-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who worships Sri Krishna with pure devotion and
                        embodies the qualities he cherishes will reach life's
                        supreme goal.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-12-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Your character is the only thing that matters: be kind,
                        patient, forgiving, honest, and compassionate.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-12-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna to describe the qualities of his
                        most devoted followers. Sri Krishna responds by listing
                        the characteristics he most admires in his devotees:
                        compassion, freedom from hatred, equanimity in pleasure
                        and pain, forgiveness, contentment, steadiness, and
                        goodwill toward all beings. He emphasizes that those who
                        embody these qualities and worship him with unwavering
                        love are most dear to him.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-12-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 12.8 – 12.11
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Still your mind in me, still your intellect in me,
                          and without doubt you will be united with me forever.
                          If you cannot still your mind in me, learn to do so
                          through the regular practice of meditation. If you
                          lack the will for such self-discipline, engage
                          yourself in my work, for selfless service can lead you
                          at last to complete fulfillment. If you are unable to
                          do even this, surrender yourself to me, disciplining
                          yourself and renouncing the results of all your
                          actions."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          is the only quote I have from this chapter. It quite
                          literally represents that there are many paths and
                          ways to Sri Krishna. Even if you fail and fail and
                          fail, you will eventually reach liberation. Extremely
                          motivating.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 13 */}
                  <section id="chapter-13" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 13: kshetra kshetrajna vibhaga yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Field & The Knower
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-13-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who distinguishes the field from the Knower and
                        achieves freedom from prakriti will attain the supreme
                        goal.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-13-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Always think carefully before you act.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-13-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna introduces the concept of the field (your
                        body, mind, senses, and everything material), also
                        called Prakriti, and the Knower of the field (the
                        consciousness observing it all), also called Purusha. He
                        explains that understanding this distinction is true
                        knowledge. You are not your body, emotions, or thoughts;
                        you are the witnessing consciousness beyond them. He
                        describes the qualities that lead to this wisdom:
                        humility, non-violence, patience, honesty, purity,
                        steadfastness, self-control, freedom from ego, and
                        detachment. By recognizing the difference between the
                        eternal Knower and the temporary field, one can attain
                        liberation.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-13-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 13.2
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "I am the Knower of the field in everyone, Arjuna.
                          Knowledge of the field and its Knower is true
                          knowledge."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          There's a beautiful Hindu teaching that captures this
                          verse: "I am a farmer, this body of mine is my field.
                          I sow good thoughts and actions in my body, and I reap
                          the results." This metaphor perfectly illustrates the
                          field and Knower distinction. Your true Self (the
                          Knower) tends to your body (the field), and whatever
                          you plant, good or bad, you will harvest.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 13.7 – 13.8
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Those who know truly are free from pride and deceit.
                          They are gentle, forgiving, upright, and pure, devoted
                          to their spiritual teacher, filled with inner
                          strength, and self-controlled. Detached from sense
                          objects and self-will, they have learned the painful
                          lesson of separate birth and suffering, old age,
                          disease, and death."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> These
                          are the qualities that are necessary to living a
                          dharmic life.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 14 */}
                  <section id="chapter-14" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 14: guna traya vibhaga yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Forces of Evolution
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-14-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who transcends prakriti (sattva, tamas, and rajas)
                        is fit for a union with Brahman.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-14-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Trust the process with unwavering faith, staying steady
                        through highs and lows.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-14-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna describes the wisdom that allowed saints and
                        sages to attain perfection. He begins by explaining that
                        Prakriti is the womb of all creation, and he is the
                        seed-giver who infuses it. He then explains the three
                        gunas: sattva (purity, harmony), rajas (passion,
                        activity), and tamas (inertia, ignorance). These three
                        forces simultaneously coexist in different proportions
                        in all people and constantly shift, influencing
                        emotions, behavior, and consciousness. Arjuna asks how
                        someone who has transcended the gunas acts. Sri Krishna
                        responds that such a person remains impartial to the
                        gunas, equal in pleasure and pain, praise and blame,
                        kindness and unkindness. By serving Krishna with
                        unwavering devotion and faith, one can rise above the
                        gunas and become fit for union with Brahman.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-14-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 14.11 – 14.13
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "When sattva predominates, the light of wisdom shines
                          through every gate of the body. When rajas
                          predominates, a person runs about pursuing selfish and
                          greedy ends, driven by restlessness and desire. When
                          tamas is dominant a person lives in darkness –
                          slothful, confused, and easily infatuated."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          really like these verses because it shows what life
                          looks like when each of the forces is at its
                          strongest. Extremely interesting how everything in
                          life is like a proportion of these energies.
                          Basically, the next 20 or so verses describe the
                          differences between the three gunas.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 14.24
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "Established within themselves, they are equal in
                          pleasure and pain, praise and blame, kindness and
                          unkindness. Clay, a rock, and gold are the same to
                          them."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> One
                          of my favorite verses of the book. When Arjuna asks
                          Sri Krishna what someone who has mastered the gunas
                          acts like, this is Sri Krishna's response. Ideally,
                          people should try to lead their life in such a way:
                          where clay, rock, and gold are all the same.
                          Obviously, doing this is hard, but the overall idea to
                          remain unselfish is extremely clear.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 15 */}
                  <section id="chapter-15" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 15: purushottama yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Supreme Self
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-15-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who realizes that Sri Krishna is Atman and
                        paradoxically transcends Atman itself will attain
                        supreme liberation.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-15-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Dig deeper to find who you truly are. You are more than
                        any name or label.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-15-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna uses the metaphor of an inverted Ashvattha
                        tree with roots above and branches below to represent
                        the material world rooted in the divine. He explains
                        three levels of reality: the perishable (the physical
                        body and material world), the imperishable (the eternal
                        Self, Atman), and the Supreme Person (Purushottama), who
                        transcends both. Krishna reveals that he is this Supreme
                        Person, beyond all creation yet pervading it. This
                        chapter emphasizes cutting attachment to the material
                        world, symbolized by severing the tree's roots with an
                        axe of detachment, and seeking refuge in Brahman.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-15-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 15.3 - 15.4
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "The true form of this tree - its essence, beginning,
                          and end - is not perceived on this earth. Cut down
                          this strong-rooted tree with the sharp ax of
                          detachment; then find the path which does not come
                          back again. Seek tat, the First Cause, from which the
                          universe came long ago."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> In
                          this small chapter, I found this verse the most
                          interesting because it references "tat" (That), the
                          Sanskrit term for the ultimate, indescribable Supreme
                          reality. "Tat" represents what cannot be fully
                          expressed in words - the First Cause (Brahman) from
                          which all creation emerged and to which liberated
                          souls return.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 16 */}
                  <section id="chapter-16" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 16: daivasura sampada vibhaga yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Two Paths
                      </p>
                    </div>

                    {/* Spiritual Lesson */}
                    <div
                      id="chapter-16-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who follows the path of dharma against lust, greed,
                        and anger and acts in accordance with the scriptures,
                        will achieve the goal of life.
                      </p>
                    </div>

                    {/* Practical Application */}
                    <div
                      id="chapter-16-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Everything in life is a choice, so choose to walk in the
                        path of light.
                      </p>
                    </div>

                    {/* Chapter Summary */}
                    <div
                      id="chapter-16-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Sri Krishna describes two paths: the divine path (daivi
                        sampad) characterized by purity, compassion,
                        truthfulness, and self-control, and the demonic path
                        (asuri sampad) characterized by hypocrisy, arrogance,
                        cruelty, and greed. He reassures Arjuna that he
                        possesses divine qualities. Krishna explains that those
                        on the demonic path are driven by insatiable desires and
                        deny higher reality, act selfishly, and believe the
                        universe exists for their pleasure. Such people are
                        trapped in the cycle of rebirth, repeatedly born with
                        the same destructive tendencies, sinking lower with each
                        life. Sri Krishna identifies three gates to hell: lust,
                        greed, and anger. Those who conquer these three and
                        follow the guidance of scripture will progress toward
                        life&apos;s supreme goal.
                      </p>
                    </div>

                    {/* Important Verses */}
                    <div id="chapter-16-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 16.21 – 16.22
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          "There are three gates to destructive hell: lust,
                          anger, and greed. Renounce these three. Those who
                          escape from these three gates of darkness, Arjuna,
                          seek what is best and attain life&apos;s supreme
                          goal."
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> While
                          this verse identifies the three gates to hell, I see
                          this as also applying to who you surround yourself
                          with. The people around you either pull you toward
                          these destructive forces or help you resist them. At
                          the end of the day, who you are is shaped by who you
                          spend time with. To avoid being influenced by
                          darkness, surround yourself with people who genuinely
                          make a positive difference in your life. And most
                          importantly, have the self-control to recognize such
                          darkness.
                        </p>
                      </div>
                    </div>

                    {/* Chapter Divider */}
                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 17 */}
                  <section id="chapter-17" className="mb-12">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 17: shraddha traya vibhaga yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        The Power of Faith
                      </p>
                    </div>

                    <div
                      id="chapter-17-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who chants the mantra <em>Om Tat Sat</em> with faith
                        and abides by it eventually reaches Brahman.
                      </p>
                    </div>

                    <div
                      id="chapter-17-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        If you believe in something enough, it will happen.
                      </p>
                    </div>

                    <div
                      id="chapter-17-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Arjuna asks Sri Krishna what happens to people who
                        disregard the scriptures but worship with faith. Sri
                        Krishna responds by describing how sattvic, rajasic, and
                        tamasic people act differently based on their nature.
                        Sattvic people worship God, rajasic people worship power
                        and wealth, and tamasic people worship demons and
                        spirits. He explains how this extends to food: sattvic
                        people enjoy tasty, rich, nourishing food; rajasic
                        people prefer salty, spicy, and hot food that promotes
                        discomfort; tamasic people consume overcooked, stale,
                        and impure food. Sri Krishna then introduces the sacred
                        mantra <em>Om Tat Sat</em>, meaning &ldquo;That alone is
                        Truth&rdquo;: only dharma truly exists. Through
                        self-sacrifice, self-discipline, and selfless giving
                        performed with faith, one can reach Brahman.
                      </p>
                    </div>

                    <div id="chapter-17-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 17.3
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;Our faith conforms to our nature, Arjuna. Human
                          nature is made of faith. A person is what his shraddha
                          is.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          is probably the most important verse of this chapter.
                          It expresses a universal teaching found in many
                          religious traditions: a person is what they believe. I
                          tried to define shraddha earlier, but it doesn&apos;t
                          have a single literal translation. Faith, belief,
                          conviction, and everything a person deeply holds can
                          all fall under this concept.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 17.23
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;Om Tat Sat: these three words represent
                          Brahman, from which come priests and scriptures and
                          sacrifice.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> I
                          talked about this earlier. This mantra recurs
                          throughout the Vedas. Om represents the primordial
                          universal sound, Tat represents Brahman, and Sat
                          represents &apos;that which is&apos; or truth.
                          Interestingly, Sri Krishna compares the three gunas
                          across different perspectives: actions, food, worship,
                          and sacrifice. This mantra serves as the culmination,
                          bringing it all together under the truth.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 17.28
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;But to engage in self-sacrifice,
                          self-discipline, and giving without good faith is
                          asat, without worth or goodness, either in this life
                          or the next.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Faith
                          is all that matters. Even if you work hard, but you do
                          it without belief, it won&apos;t matter at all. You
                          should aim to do things with complete confidence and
                          faith.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>

                  {/* Chapter 18 (last chapter: tighter footer margin) */}
                  <section id="chapter-18" className="mb-6">
                    <div className="mb-6">
                      <h3 className="text-sm sm:text-lg font-bold mb-1">
                        chapter 18: moksha sanyasa yoga
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 italic indent-0">
                        Freedom &amp; Renunciation
                      </p>
                    </div>

                    <div
                      id="chapter-18-spiritual-lesson"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-orange-200 px-1 py-0.5 rounded">
                          spiritual lesson
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        One who learns the Gita and faithfully teaches it to
                        others will reach liberation through Sri Krishna&apos;s
                        grace.
                      </p>
                    </div>

                    <div
                      id="chapter-18-practical-application"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-sky-200 px-1 py-0.5 rounded">
                          practical application
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        Just be righteous and you will live a happy, healthy,
                        and prosperous life.
                      </p>
                    </div>

                    <div
                      id="chapter-18-chapter-summary"
                      className="mb-6 space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-pink-200 px-1 py-0.5 rounded">
                          chapter summary
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 indent-0">
                        This chapter is a summary of the entire Gita, recapping
                        all of Sri Krishna&apos;s teachings as the conclusion.
                        Arjuna begins by asking Sri Krishna to explain the
                        difference between sannyasa (renunciation) and tyaga
                        (relinquishment). Sri Krishna clarifies that sannyasa
                        means renouncing all actions, while tyaga means
                        renouncing only the fruits of actions. He explains that
                        complete renunciation of action is impossible as long as
                        you have a body. True renunciation means giving up
                        desire for personal reward while continuing to act
                        according to dharma. Sri Krishna then describes the five
                        elements necessary for every action: the body, the
                        means, the ego, the effort, and divine will. He explains
                        how the three gunas influence different aspects of life
                        and create three types of happiness, which I have
                        explained further in a quote below. Sri Krishna explains
                        the duties of each caste and emphasizes that perfection
                        comes from performing your own dharma rather than
                        another&apos;s. He then gives his ultimate instruction:
                        surrender everything to him with complete devotion, and
                        he will grant liberation. Ultimately, Sri Krishna urges
                        Arjuna to fight, saying that refusing is a useless
                        resolve. He asks Arjuna to share these teachings
                        carefully, only with those who genuinely seek
                        enlightenment. Finally, he asks Arjuna if his confusion
                        has been cleared. Arjuna responds that he is free from
                        doubt and ready to act. The chapter concludes with
                        Sanjaya recounting the divine conversation to
                        Dhritarashtra, proclaiming that wherever Krishna and
                        Arjuna are together, there will be prosperity and
                        victory.
                      </p>
                    </div>

                    <div id="chapter-18-important-verses" className="space-y-4">
                      <h4 className="text-xs sm:text-sm italic indent-0">
                        <span className="bg-green-200 px-1 py-0.5 rounded">
                          important verses
                        </span>
                      </h4>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.2
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;To refrain from selfish acts is one kind of
                          renunciation, called sannyasa; to renounce the fruit
                          of action is another, called tyaga.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span>{" "}
                          Unsurprisingly, I have the most verses labeled as
                          important in this chapter. Anyways, I thought this
                          verse to be interesting because it describes the two
                          kinds of renunciation that are possible.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.11
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;As long as one has a body, one cannot renounce
                          action altogether. True renunciation is giving up all
                          desire for personal reward.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Going
                          off of verse 18.2, it is evident that leading life as
                          a sannyasa is nearly impossible, and the Gita actually
                          does not recommend that. Instead, Sri Krishna says
                          that one should lead the life of a tyaga, where they
                          give up the fruit of their actions.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.36 – 18.39
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;Now listen, Arjuna: there are also three kinds
                          of happiness. By sustained effort, one comes to the
                          end of sorrow. That which seems like poison at first
                          but tastes like nectar in the end – this is the joy of
                          sattva, born of a mind at peace with itself. Pleasure
                          from the senses seems like nectar at first, but it is
                          bitter as poison in the end. This is the kind of
                          happiness that comes to the rajasic. Those who are
                          tamasic draw their pleasures from sleep, indolence,
                          and intoxication. Both in the beginning and in the
                          end, this happiness is a delusion.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          is one of my favorite analogies because it references
                          what happiness looks like in three types of people. In
                          the first, it looks like poison, but it is nectar. In
                          the second, it looks like nectar, but is actually
                          poison. And in the third, it never says it directly,
                          but I imagine it to be where it looks like poison, and
                          is poison. Obviously, the deadliest.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.47
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;It is better to perform one&apos;s own duties
                          imperfectly than to master the duties of another. By
                          fulfilling the obligations he is born with, a person
                          never comes to grief.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          verse is straightforward, but I believe it also
                          appeals from the comparison perspective. Everyone is
                          different. Do not compare yourself to someone else.
                          Just do what you do. And do it with happiness.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.66
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;Abandon all supports and look to me for
                          protection. I shall purify you from the sins of the
                          past; do not grieve.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> Sri
                          Krishna says that he is always there. He is always
                          omnipresent, so never fear. Just think of him and move
                          on. Once again, this is talking about the path to
                          liberation, or in general, if you are ever in danger.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.73
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;You have dispelled my doubts and delusions, and
                          I understand through your grace. My faith is firm now,
                          and I will do your will.&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> This
                          brings us full circle. In Chapter 1, Arjuna was
                          uncertain about fighting in the war. Now, in Chapter
                          18, he is resolute and has confidence. Sri Krishna has
                          changed Arjuna in ways that even he cannot imagine.
                          This is the power of mastering the mind.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                        <p className="text-xs font-mono text-gray-500 indent-0">
                          Verse 18.78
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 italic indent-0">
                          &ldquo;Wherever the divine Krishna and the mighty
                          Arjuna are, there will be prosperity, victory,
                          happiness, and sound judgment. Of this I am
                          sure!&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 indent-0">
                          <span className="font-semibold">Thoughts:</span> One
                          of the more fascinating verses. Here, as we know,
                          Sanjaya is narrating to Dhritarashtra the whole scene.
                          Sanjaya then goes on to say that his hair stood up in
                          ecstasy and the interaction between Sri Krishna and
                          Arjuna was magnificent and holy. He then goes on to
                          say that wherever those two are peace follows.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-8"></div>
                  </section>
                </>
              )}
            </section>
          </div>
        </article>

        {/* Scroll to Top Button */}
        {showScrollTop && pageView === "full" && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-900 text-white px-3 py-1.5 rounded shadow-lg hover:bg-gray-800 transition-all text-xs font-mono"
            aria-label="Scroll to top"
          >
            scroll to chapters
          </button>
        )}

        {/* Footer */}
        <footer className="mt-6">
          <div className="py-3">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Jathin Pranav Singaraju • All Rights
              Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
