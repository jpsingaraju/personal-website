import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="h-full w-full bg-off-white">{children}</body>
    </html>
  );
}
