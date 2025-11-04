import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Jathin Pranav Singaraju",
  description: "Personal website of Jathin Pranav Singaraju",
  icons: {
    icon: "/circular-photo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="h-full w-full bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

