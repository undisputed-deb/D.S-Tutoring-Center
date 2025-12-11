import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D.S Tutoring Center — Excellence in Education",
  description:
    "D.S Tutoring Center in NYC. Excellence in Education since 2023. State Tests, SHSAT, SAT, Regents, AP. Personalized, proven, high-impact tutoring.",
  metadataBase: new URL("https://dstutoringcenter.company"),
  openGraph: {
    title: "D.S Tutoring Center — Excellence in Education",
    description:
      "Brutalist minimal + Swiss design tutoring center site. NYC-based. 120% commitment.",
    url: "https://dstutoringcenter.company",
    siteName: "D.S Tutoring Center",
    type: "website",
  },
  icons: {
    icon: "/D.S Tutoring Center Logo.jpeg",
    apple: "/D.S Tutoring Center Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased lg:cursor-none`}
      >
        {children}
      </body>
    </html>
  );
}
