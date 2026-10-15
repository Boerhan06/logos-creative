import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";
import OurClients from "./components/OurClients";
import Portfolio from "./components/Portfolio";
import VideoShowcase from "./components/VideoShowcase";
import Results from "./components/Results";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { ScrollRevealProvider } from "./components/ScrollReveal";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollRevealProvider>
        <Header />
        <main className="flex-1 flex flex-col relative w-full pt-16 lg:pt-20 pb-20 lg:pb-0 bg-surface">
        {/* 01. HOME (Hero + Bukan Cuma Bikin Konten + What We Do) */}
        <Hero />
        <WhatWeDo />

        {/* 02. ABOUT (Kenalan, Yuk. + Our Values) */}
        <About />

        {/* 03. OUR CLIENTS (Senang Bisa Jadi Bagian dari Cerita Kalian) */}
        <OurClients />

        {/* 04. PORTFOLIO (Cukup Cerita. Sekarang Lihat Karyanya) */}
        <Portfolio />

        {/* 05. FEATURED VIDEO REELS (Dari Ide Hingga Layar) */}
        <VideoShowcase />

        {/* 06. RESULTS (Angka Juga Punya Cerita) */}
        <Results />

        {/* 06. CONTACT US (Jadi, Lagi Punya Ide Apa? + Chat with Logos Creative) */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </main>
      <MobileNav />
      </ScrollRevealProvider>
    </SmoothScrollProvider>
  );
}
