import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jathin Pranav Singaraju",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
