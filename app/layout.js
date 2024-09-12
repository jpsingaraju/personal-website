import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <Analytics />
      <head>
        <link rel="icon" href="/circular-photo.png" />
        <title>Jathin Pranav Singaraju</title>
      </head>
      <body className="h-full w-full bg-off-white">{children}</body>
    </html>
  );
}
