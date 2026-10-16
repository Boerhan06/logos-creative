import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://logoscreative.id"),
  title: {
    default: "Logos Creative — Your Support System | Creative Agency Indonesia",
    template: "%s | Logos Creative",
  },
  description:
    "Logos Creative adalah creative agency di Indonesia yang menjadi support system brand Anda: Social Media Management, Creative Production, Brand Activation, dan Creative Direction.",
  keywords: [
    "logos creative",
    "logos creative agency",
    "creative agency indonesia",
    "agensi kreatif indonesia",
    "creative agency jakarta",
    "jasa social media management",
    "creative production",
    "brand activation",
    "branding creative direction",
    "your support system",
    "digital marketing agency",
  ],
  authors: [{ name: "Logos Creative", url: "https://logoscreative.id" }],
  creator: "Logos Creative",
  publisher: "Logos Creative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://logoscreative.id",
  },
  openGraph: {
    title: "Logos Creative — Your Support System | Creative Agency",
    description:
      "Teman berpikir, tim eksekusi, dan support system untuk brand yang ingin terus berkembang. Dari media sosial sampai aktivasi brand.",
    url: "https://logoscreative.id",
    siteName: "Logos Creative",
    images: [
      {
        url: "/images/logo-mark.png",
        width: 1200,
        height: 630,
        alt: "Logos Creative — Your Support System",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Creative — Your Support System | Creative Agency",
    description:
      "Teman berpikir, tim eksekusi, dan support system untuk brand yang ingin terus berkembang.",
    images: ["/images/logo-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-round.svg",
    apple: "/images/logo-round.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Logos Creative",
  alternateName: ["Logos Creative Agency", "Logos"],
  url: "https://logoscreative.id",
  logo: "https://logoscreative.id/images/logo-round.svg",
  image: "https://logoscreative.id/images/logo-mark.png",
  description:
    "Logos Creative adalah creative agency di Indonesia yang menjadi support system brand Anda: Social Media Management, Creative Production, Brand Activation, dan Creative Direction.",
  telephone: "+6281315579997",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com/logoscreative.id",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Kreatif",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creative Production",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Activation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Creative Direction",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/images/logo-round.svg" />
        <link rel="apple-touch-icon" href="/images/logo-round.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}

