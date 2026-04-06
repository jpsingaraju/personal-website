import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts | Jathin Pranav Singaraju",
};

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
