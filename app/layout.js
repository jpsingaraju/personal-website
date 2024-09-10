import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/personal-pic.png" />
        <title>Jathin Pranav Singaraju</title>
      </head>
      <body className="h-full w-full bg-off-white">{children}</body>
    </html>
  );
}
