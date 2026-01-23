"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Artwork {
  title: string;
  medium: string;
  year: string;
  description: string[];
  image: string;
  category: "acrylics" | "pastels" | "pencils";
  maxHeight?: string;
}

const artworks: Artwork[] = [
  {
    title: "Orange on Orange",
    medium: "Acrylic",
    year: "2013",
    description: [
      "This was my first painting.",
    ],
    image: "/art/orange-on-orange-v2.jpg",
    category: "acrylics",
    maxHeight: "max-h-[480px]",
  },
  {
    title: "Blissful Ganesha",
    medium: "Acrylic",
    year: "2018",
    description: [
      "Represents the Hindu God Lord Ganesha, remover of all obstacles.",
      "Brings vibrance and joy throughout the house.",
    ],
    image: "/art/blissful-ganesha.jpg",
    category: "acrylics",
  },
  {
    title: "An Innocent Smile",
    medium: "Pastel Pencils",
    year: "2020",
    description: [
      "Radiates joy and light within the hearts of humanity.",
    ],
    image: "/art/innocent-smile.jpg",
    category: "pastels",
  },
  {
    title: "Patriotic Red Cardinal",
    medium: "Acrylic",
    year: "2014",
    description: [
      "Represents the nation living in peace and harmony.",
    ],
    image: "/art/patriotic-red-cardinal.jpg",
    category: "acrylics",
  },
  {
    title: "The Blue Morpho Butterfly",
    medium: "Colored Pencil",
    year: "2020",
    description: [
      "Symbolizes transformation and delicate beauty in nature.",
    ],
    image: "/art/blue-morpho-butterfly.jpg",
    category: "pencils",
  },
  {
    title: "Future Vision",
    medium: "Acrylic",
    year: "2019",
    description: [
      "Doodle 4 Google - represents a world of robots and flourishing technology.",
    ],
    image: "/art/future-vision-2019.jpg",
    category: "acrylics",
  },
  {
    title: "The Beauty of Red",
    medium: "Oil Pastels",
    year: "2015",
    description: [
      "Displays blending colors and getting messy.",
    ],
    image: "/art/beauty-of-red.jpg",
    category: "pastels",
  },
  {
    title: "My Mom - The Light of The House",
    medium: "Charcoal",
    year: "2021",
    description: [
      "Depicts my mom's incredible strength and warmth.",
    ],
    image: "/art/light-of-the-house.jpg",
    category: "pencils",
  },
  {
    title: "Connection & Innovation",
    medium: "Colored Pencil",
    year: "2020",
    description: [
      "Doodle 4 Google - showcases learning and teaching younger generations.",
      "As they grow up, they teach others.",
    ],
    image: "/art/future-vision-2020.jpg",
    category: "pencils",
  },
  {
    title: "A Moment In Time",
    medium: "Charcoal",
    year: "2021",
    description: [
      "Encourages cherishing every moment and living it completely.",
    ],
    image: "/art/frozen-moment.jpg",
    category: "pencils",
  },
  {
    title: "Creativity & Imagination",
    medium: "Colored Pencil",
    year: "2018",
    description: [
      "Doodle 4 Google - blends creativity and imagination with technology.",
    ],
    image: "/art/future-vision-2018.jpg",
    category: "pencils",
  },
  {
    title: "Sunset at the Beach",
    medium: "Acrylic",
    year: "2019",
    description: [
      "Captures the feel of watching the sunset on the beach.",
    ],
    image: "/art/sunset-at-beach.jpg",
    category: "acrylics",
    maxHeight: "max-h-[400px]",
  },
  {
    title: "Self Portrait",
    medium: "Writing Pencil",
    year: "2019",
    description: [
      "Reminds me of how much I've grown as an artist and person.",
    ],
    image: "/art/myself-6th-grade.jpg",
    category: "pencils",
  },
];

export default function ArtPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const artworkRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleArtworkClick = (index: number) => {
    if (window.innerWidth >= 768) {
      setSelectedIndex(index);
    }
  };

  const handleClose = () => {
    const previousIndex = selectedIndex;
    setSelectedIndex(null);
    
    // Scroll to the artwork position after state updates
    setTimeout(() => {
      if (previousIndex !== null && artworkRefs.current[previousIndex]) {
        artworkRefs.current[previousIndex]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Header */}
      <header>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex justify-between items-start mt-4">
            <h1 className="text-lg sm:text-xl font-bold">
              my art portfolio
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

      {/* About Section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="max-w-lg space-y-4 text-xs sm:text-sm text-gray-700">
          <p>
            Welcome! This website showcases hallmark pieces that represent significant milestones in my journey as an artist. All pieces originate from my imagination or reference photos I've personally taken. With every new work, I challenge myself by exploring different mediums and techniques, always seeking to expand my skills and knowledge.
          </p>
          <p className="text-xs text-gray-500 italic pt-1">
            A sincere thank you the two art teachers that developed me as an artist: Ms. Rosie and Mr. Buscemi!
          </p>
        </div>
      </div>

      {/* Masonry Gallery - Balanced Layout */}
      {selectedIndex === null && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 pb-6">
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {artworks.map((artwork, index) => (
              <div
                key={index}
                ref={(el) => { artworkRefs.current[index] = el; }}
                className="break-inside-avoid group md:cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleArtworkClick(index)}
              >
                <div className="relative bg-gray-100 overflow-hidden rounded-lg">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={800}
                    height={800}
                    className={`w-full h-auto transition-all duration-300 object-cover ${artwork.maxHeight || ''}`}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/75 transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                      <h3 className="text-sm font-semibold mb-1">
                        {artwork.title}
                      </h3>
                      <p className="text-xs opacity-90">
                        {artwork.medium} • {artwork.year}
                      </p>
                      <p className="text-xs mt-2 opacity-75">
                        {artwork.description[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Artwork Detail View */}
      {selectedIndex !== null && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 pb-6">
          <div className="space-y-6">
            {/* Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={artworks[selectedIndex].image}
                alt={artworks[selectedIndex].title}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
            
            {/* Details */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h2 className="text-lg sm:text-xl font-bold">
                  {artworks[selectedIndex].title}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm underline"
                >
                  close
                </button>
              </div>
              <p className="text-sm text-gray-600">
                {artworks[selectedIndex].medium} • {artworks[selectedIndex].year}
              </p>
              <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                {artworks[selectedIndex].description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Jathin Pranav Singaraju • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
