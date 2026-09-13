import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathanael Esmond Hartono | Informatics Graduate & Software Engineer",
  description: "Portfolio of Nathanael Esmond Hartono, Informatics Graduate from Universitas Atma Jaya Yogyakarta. Projects, Experience, and Certifications.",
  icons: {
    icon: "/iconnew.jpeg",
    shortcut: "/iconnew.jpeg",
    apple: "/iconnew.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-black text-zinc-100 selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
