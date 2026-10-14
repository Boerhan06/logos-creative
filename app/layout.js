import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Logos Creative — Your Support System",
  description:
    "Teman berpikir, tim eksekusi, dan support system untuk brand yang ingin terus berkembang. Mulai dari media sosial, produksi konten, sampai aktivasi brand.",
  keywords: [
    "creative agency",
    "your support system",
    "logos creative",
    "social media",
    "creative production",
    "branding creative direction",
    "campaign brand activation",
    "agensi kreatif",
  ],
  icons: {
    icon: "/images/logo-round.svg",
    apple: "/images/logo-round.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} h-full`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/images/logo-round.svg" />
        <link rel="apple-touch-icon" href="/images/logo-round.svg" />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
