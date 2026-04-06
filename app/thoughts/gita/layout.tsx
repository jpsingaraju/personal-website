import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflections on the Bhagavad Gita | Jathin Pranav Singaraju",
};

export default function GitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
