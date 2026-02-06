import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffgicharu.com"),
  title: {
    default: "Jeff Gicharu — Full-Stack Developer | Nairobi, Kenya",
    template: "%s | Jeff Gicharu",
  },
  description:
    "Full-Stack Developer based in Nairobi, Kenya. Building production software with React, TypeScript, Django, and modern infrastructure. From offline-first PWAs to telecom platforms.",
  keywords: [
    "Jeff Gicharu",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Django",
    "Nairobi",
    "Kenya",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Jeff Gicharu" }],
  creator: "Jeff Gicharu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeffgicharu.com",
    siteName: "Jeff Gicharu",
    title: "Jeff Gicharu — Full-Stack Developer",
    description:
      "Building production software with React, TypeScript, Django, and modern infrastructure. Based in Nairobi, Kenya.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeff Gicharu — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff Gicharu — Full-Stack Developer",
    description:
      "Building production software with React, TypeScript, Django, and modern infrastructure.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jeff Gicharu",
    jobTitle: "Full-Stack Developer",
    url: "https://jeffgicharu.com",
    email: "jkaharu2970@gmail.com",
    telephone: "+254714478086",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [
      "https://github.com/jeffgicharu",
      "https://linkedin.com/in/jeff-gicharu-0924a4217",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Jomo Kenyatta University of Agriculture and Technology",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Django",
      "Python",
      "PostgreSQL",
      "Nginx",
      "DevOps",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: apply dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="light"){d.classList.remove("dark")}else if(t==="dark"||!t&&window.matchMedia("(prefers-color-scheme:dark)").matches){d.classList.add("dark")}else{d.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${outfit.variable} font-body`}>
        {/* Noise grain overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
