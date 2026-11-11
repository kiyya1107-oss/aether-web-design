// src/app/layout.js
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

// Memanggil Familjen Grotesk secara aman lewat Next.js Font
const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen-grotesk",
});

export const metadata = {
  title: "Robotic Research Team",
  description: "Website resmi tim riset robotik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Trik Jitu: Memanggil Google Font Post No Bills Colombo langsung melalui CDN Link agar 100% Bebas Error */}
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link href="https://googleapis.com/css2?family=Post+No+Bills+Colombo:wght@800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${familjenGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
