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
  title: "Math Tutor NYC | SAT, SHSAT & Science Tutoring | D.S Tutoring Center",
  description:
    "Best math, SAT, SHSAT, Regents, and science tutor in NYC. 95% success rate. Free trial available. Expert 1-on-1 tutoring for State Tests.",
  keywords: [
    "math tutor NYC",
    "SAT tutor NYC",
    "SHSAT prep tutor NYC",
    "science tutor NYC",
    "Regents tutoring NYC",
    "State test prep tutor NYC",
    "geometry tutor NYC",
    "algebra tutor NYC",
    "chemistry tutor NYC",
    "physics tutor NYC",
    "math tutor near me NYC",
    "high school tutor NYC",
    "middle school tutor NYC",
    "ELA tutor NYC"
  ],
  authors: [{ name: "Deb Shrestho" }],
  creator: "D.S Tutoring Center",
  publisher: "D.S Tutoring Center",
  metadataBase: new URL("https://d-s-tutoring-center.vercel.app"),
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Math Tutor NYC | SAT, SHSAT & Science Tutoring | D.S Tutoring Center",
    description:
      "Best math, SAT, SHSAT, Regents, and science tutor in NYC. 95% success rate. Free trial available. Expert 1-on-1 tutoring.",
    url: "https://d-s-tutoring-center.vercel.app",
    siteName: "D.S Tutoring Center",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/D.S Tutoring Center Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "D.S Tutoring Center - NYC Tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Tutor NYC | SAT, SHSAT & Science Tutoring",
    description: "Best math, SAT, SHSAT, Regents, and science tutor in NYC. 95% success rate. Free trial available.",
    images: ["/D.S Tutoring Center Logo.jpeg"],
  },
  icons: {
    icon: "/D.S Tutoring Center Logo.jpeg",
    apple: "/D.S Tutoring Center Logo.jpeg",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.S Tutoring Center",
    "image": "https://d-s-tutoring-center.vercel.app/D.S Tutoring Center Logo.jpeg",
    "description": "Premier tutoring center in NYC offering math, science, SAT, SHSAT, and Regents exam preparation with a 95% success rate.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NYC, New York",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-917-312-6589",
    "email": "debashrestha222@gmail.com",
    "url": "https://d-s-tutoring-center.vercel.app",
    "priceRange": "Contact for pricing",
    "areaServed": [
      {"@type": "City", "name": "New York"},
      {"@type": "City", "name": "Manhattan"},
      {"@type": "City", "name": "Brooklyn"},
      {"@type": "City", "name": "Queens"},
      {"@type": "City", "name": "Bronx"}
    ],
    "serviceType": [
      "Math Tutoring",
      "SAT Preparation",
      "SHSAT Prep",
      "Science Tutoring",
      "Regents Exam Prep",
      "State Test Preparation",
      "Algebra Tutoring",
      "Geometry Tutoring",
      "Chemistry Tutoring",
      "Physics Tutoring",
      "ELA Tutoring"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "20"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased lg:cursor-none`}
      >
        {children}
      </body>
    </html>
  );
}
