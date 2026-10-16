"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "../utils/whatsapp";

const showcaseVideos = [
  {
    id: "the-real-family-drama",
    title: "Sketsa Komedi: Drama Nilai Ujian 100",
    client: "The Real Family",
    logo: "/images/clients/the-real-family.png",
    category: "lifestyle",
    categoryLabel: "Lifestyle & Komedi",
    src: "/Video/1015(2).mp4",
    duration: "01:04",
    hook: "Dapat nilai 100 langsung minta hadiah, giliran ditanya 8x8 malah blank!",
    summary:
      "Sketsa komedi keluarga berdurasi 1 menit dengan alur cerita relatable antara orang tua dan anak. Menyoroti dinamika humor sehari-hari yang memicu interaksi organik tinggi, shares di grup keluarga, dan komentar hangat.",
    challenge:
      "Membuat konten hiburan keluarga yang natural dan relatable tanpa kesan kaku, sehingga disukai audiens dan ditonton sampai detik akhir.",
    solution:
      "Mengembangkan script komedi berbasis kejadian nyata keluarga di rumah, pembagian porsi peran yang natural bagi anak, serta punchline jenaka di akhir video.",
    results: [
      "Retensi penonton konsisten hingga detik ke-60",
      "Rasio share tinggi di WhatsApp & media sosial",
      "Membangun kedekatan emosional hangat bagi brand The Real Family",
    ],
    tags: ["Relatable Comedy", "Family Storytelling", "Viral Script Hook"],
    accentColor: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "madame-arumantara-cinematic",
    title: "Cinematic Dining: Ayam Goreng Rempah Tradisional",
    client: "Madame Arumantara",
    logo: "/images/clients/madame-arumantara.jpg",
    category: "fnb",
    categoryLabel: "F&B & Kuliner",
    src: "/Video/1015(3).mp4",
    duration: "00:10",
    hook: "Aroma rempah autentik dan kerenyahan bumbu khas nusantara di atas daun pisang.",
    summary:
      "Video macro food cinematography dengan pencahayaan hangat dan slow-motion tajam. Memperlihatkan tekstur renyah ayam goreng rempah yang disajikan di atas alas daun pisang dan piring biru elegan khas fine dining Madame Arumantara.",
    challenge:
      "Menyampaikan kenikmatan rasa dan keharuman bumbu tradisional hanya lewat visual tanpa kata-kata dalam waktu 10 detik.",
    solution:
      "Pencahayaan dramatis, color grading bernuansa warm luxury, dan pergerakan kamera macro yang menonjolkan detail remahan rempah gurih.",
    results: [
      "Visual hook kuat pada 3 detik pertama",
      "Mendorong reservasi dining dan kunjungan dine-in",
      "Menciptakan citra restoran tradisional berkelas",
    ],
    tags: ["Food Cinematography", "Macro Texture", "Fine Dining Ambiance"],
    accentColor: "from-primary/20 to-secondary/20",
  },
  {
    id: "the-teeth-whitener",
    title: "Bright Smile Treatment: Solusi Gigi Lebih Putih & Senyum Percaya Diri",
    client: "The Teeth Whitener",
    logo: "/images/clients/the-teeth-whitener.png",
    category: "beauty",
    categoryLabel: "Beauty & Personal Care",
    src: "/Video/1015(4).mp4",
    duration: "00:10",
    hook: "Coba sekarang agar gigi jadi lebih putih, no more gigi kuning dan senyum lebih pede!",
    summary:
      "Video demonstrasi treatment teeth whitening profesional dengan visual klinis yang bersih, estetika modern, dan pesan persuasif yang langsung menjawab keresahan gigi kuning.",
    challenge:
      "Mengubah persepsi masyarakat bahwa perawatan pemutihan gigi itu rumit atau menakutkan menjadi perawatan rutin estetika yang nyaman, higienis, dan instan.",
    solution:
      "Menampilkan proses treatment langsung dengan perlengkapan modern (blue light whitening), didukung teks highlight manfaat yang to-the-point dan ajakan bertindak yang jelas.",
    results: [
      "Tingkat konversi tanya treatment via WhatsApp meningkat",
      "Mengikis keraguan audiens mengenai kenyamanan perawatan",
      "Memperkuat posisi The Teeth Whitener sebagai klinik estetik gigi pilihan",
    ],
    tags: ["Teeth Whitening", "Beauty Treatment", "Confidence Booster"],
    accentColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "tomaple-donut",
    title: "First Bite: Kelembutan Donat Artisan Paling Relatable",
    client: "Tomaple Artisan Donuts",
    logo: "/images/clients/client-tomaple.webp",
    category: "fnb",
    categoryLabel: "F&B & Kuliner",
    src: "/Video/1015(5).mp4",
    duration: "00:10",
    hook: "Buka kemasan estetiknya, rasakan tekstur donat artisan yang lembut dan bikin ketagihan.",
    summary:
      "Format organic food vlog review dengan unboxing box Tomaple dan ekspresi jujur saat menikmati donat artisan. Pacing santai, pencahayaan alami, dan framing relatable menciptakan rasa lapar seketika.",
    challenge:
      "Membuktikan tekstur lembut donat artisan tanpa terasa seperti iklan konvensional yang kaku.",
    solution:
      "Mengadopsi format UGC (User Generated Content) dengan talent natural, pengambilan gambar setinggi mata (eye-level), dan fokus pada kenikmatan gigitan pertama.",
    results: [
      "Komentar antusias menanyakan varian rasa",
      "Lonjakan pesanan hampers dan takeaway",
      "Engagement rate tinggi berkat format yang akrab bagi Gen Z",
    ],
    tags: ["Organic Food Vlog", "First Bite Hook", "Artisan Bakery"],
    accentColor: "from-rose-500/20 to-amber-500/20",
  },
  {
    id: "mulia-film-automotive",
    title: "Solusi Kaca Film Premium: Privasi & Visibilitas Maksimal",
    client: "Fortuner Interior x Mulia Film",
    logo: "/images/clients/fortuner-interior.jpg",
    category: "automotive",
    categoryLabel: "Otomotif & Edukasi",
    src: "/Video/1015(6).mp4",
    duration: "00:10",
    hook: "Dari luar tampak gelap berprivasi tinggi, dari dalam tetap jernih dan adem di bawah terik matahari.",
    summary:
      "Video commercial edukatif di dalam workshop instalasi mobil, menguji langsung kejernihan pandang kaca film dari interior kabin sekaligus menjelaskan perlindungan tolak panas matahari secara ringkas.",
    challenge:
      "Menghilangkan keraguan pemilik mobil bahwa kaca film gelap akan mengurangi visibilitas berkendara di malam hari.",
    solution:
      "Pengambilan gambar dari dalam kabin memperlihatkan pandangan keluar yang tetap jernih dan terang, dibarengi gestur penjelasan interaktif yang meyakinkan.",
    results: [
      "Mengurangi keraguan calon pembeli",
      "Meningkatkan konsultasi via WhatsApp",
      "Format edukasi yang meningkatkan kredibilitas bengkel",
    ],
    tags: ["Automotive Commercial", "Product Demonstration", "Educational Hook"],
    accentColor: "from-blue-500/20 to-cyan-500/20",
  },
];

const categories = [
  { id: "all", label: "Semua Format", count: 5 },
  { id: "fnb", label: "F&B & Kuliner", count: 2 },
  { id: "lifestyle", label: "Lifestyle & Komedi", count: 1 },
  { id: "beauty", label: "Beauty & Personal Care", count: 1 },
  { id: "automotive", label: "Otomotif & Edukasi", count: 1 },
];

export default function VideoShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [unmutedId, setUnmutedId] = useState(null);
  const [playingStates, setPlayingStates] = useState({});
  const carouselRef = useRef(null);
  const videoRefs = useRef({});
  const modalVideoRef = useRef(null);
  const [modalPlaying, setModalPlaying] = useState(true);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalProgress, setModalProgress] = useState(0);
  const [modalCurrentTime, setModalCurrentTime] = useState(0);
  const [modalDuration, setModalDuration] = useState(0);

  const filteredVideos =
    activeCategory === "all"
      ? showcaseVideos
      : showcaseVideos.filter((v) => v.category === activeCategory);

  // Setup IntersectionObserver for auto-play when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const vidId = video.dataset.videoId;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setPlayingStates((prev) => ({ ...prev, [vidId]: true }));
          } else {
            video.pause();
            setPlayingStates((prev) => ({ ...prev, [vidId]: false }));
          }
        });
      },
      { threshold: 0.4 }
    );

    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) observer.observe(vid);
    });

    return () => observer.disconnect();
  }, [filteredVideos]);

  // Handle Carousel Scroll
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Toggle Play / Pause on Card
  const toggleCardPlay = (e, videoId) => {
    e.stopPropagation();
    const vid = videoRefs.current[videoId];
    if (vid) {
      if (vid.paused) {
        vid.play().catch(() => {});
        setPlayingStates((prev) => ({ ...prev, [videoId]: true }));
      } else {
        vid.pause();
        setPlayingStates((prev) => ({ ...prev, [videoId]: false }));
      }
    }
  };

  // Toggle Mute on Card
  const toggleMute = (e, videoId) => {
    e.stopPropagation();
    if (unmutedId === videoId) {
      setUnmutedId(null);
      if (videoRefs.current[videoId]) {
        videoRefs.current[videoId].muted = true;
      }
    } else {
      // Mute all other cards
      Object.entries(videoRefs.current).forEach(([id, vid]) => {
        if (vid) vid.muted = id !== videoId;
      });
      setUnmutedId(videoId);
      if (videoRefs.current[videoId]) {
        videoRefs.current[videoId].muted = false;
        videoRefs.current[videoId].play().catch(() => {});
        setPlayingStates((prev) => ({ ...prev, [videoId]: true }));
      }
    }
  };

  // Open Modal Theater View
  const openModal = (video) => {
    // Pause all card videos
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.pause();
    });
    setSelectedVideo(video);
    setModalPlaying(true);
    setModalMuted(false);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Modal Video Time Update
  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current) {
      const cur = modalVideoRef.current.currentTime;
      const dur = modalVideoRef.current.duration || 1;
      setModalCurrentTime(cur);
      setModalDuration(dur);
      setModalProgress((cur / dur) * 100);
    }
  };

  const handleModalSeek = (e) => {
    if (modalVideoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const dur = modalVideoRef.current.duration || 1;
      modalVideoRef.current.currentTime = pct * dur;
    }
  };

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setModalPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setModalPlaying(false);
      }
    }
  };

  const formatTime = (secs) => {
    const s = Math.floor(secs || 0);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="portfolio"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full relative"
    >
      <div id="videos" className="absolute -top-24 pointer-events-none" />
      <div className="flex flex-col gap-space-md lg:gap-space-lg">
        {/* Apple-Style Section Header */}
        <div className="reveal reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="material-symbols-outlined text-[16px] text-primary">
                play_circle
              </span>
              <span className="text-label-sm font-bold text-primary tracking-widest uppercase">
                PORTOFOLIO VIDEO REELS
              </span>
            </div>

            <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-on-surface font-extrabold tracking-tight leading-tight">
              Portofolio Video: Dari Ide Hingga Layar.
            </h2>

            <p className="mt-4 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed">
              Format short-form video (TikTok, Instagram Reels & YouTube Shorts) adalah medium
              paling efektif untuk menghentikan jempol audiens di 3 detik pertama.
              Berikut karya video nyata yang kami produksi untuk klien kami.
            </p>
          </div>

          {/* Carousel Arrows (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="w-12 h-12 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary transition-all duration-200 active:scale-95 shadow-xs"
              aria-label="Video Sebelumnya"
            >
              <span className="material-symbols-outlined text-[22px]">
                arrow_back
              </span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="w-12 h-12 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary transition-all duration-200 active:scale-95 shadow-xs"
              aria-label="Video Selanjutnya"
            >
              <span className="material-symbols-outlined text-[22px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Apple Segmented Filter Control */}
        <div className="reveal reveal-fade-up delay-100 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-label-md font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-primary text-on-primary shadow-sm shadow-primary/20 scale-[1.02]"
                  : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/30"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-surface-container-highest text-on-surface-variant"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Apple Device-Framed Video Showcase Carousel */}
        <div
          ref={carouselRef}
          className="stagger-container flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth"
        >
          {filteredVideos.map((video) => {
            const isUnmuted = unmutedId === video.id;
            const isPlaying = playingStates[video.id] !== false;

            return (
              <div
                key={video.id}
                onClick={() => openModal(video)}
                className="reveal reveal-scale-up shrink-0 snap-center w-[275px] sm:w-[305px] md:w-[325px] group cursor-pointer"
              >
                {/* Apple-style iPhone Device Mockup Frame */}
                <div className="relative rounded-[40px] p-[10px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-[0_25px_60px_-15px_rgba(94,9,25,0.22)] border border-neutral-700/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_35px_80px_-12px_rgba(94,9,25,0.35)] group-hover:border-primary/40">
                  {/* Outer Bezel Gloss Highlight */}
                  <div className="absolute inset-x-8 top-1 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  {/* Inner Screen Container */}
                  <div className="relative aspect-[9/16] w-full rounded-[30px] overflow-hidden bg-black select-none">
                    {/* Apple Dynamic Island Notch */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black/95 rounded-full flex items-center justify-between px-3 pointer-events-none border border-white/5 shadow-inner">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700/60" />
                      <div className="w-2 h-2 rounded-full bg-blue-950/70" />
                    </div>

                    {/* The Video Element */}
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[video.id] = el;
                      }}
                      data-video-id={video.id}
                      src={video.src}
                      playsInline
                      muted={!isUnmuted}
                      loop
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Ambient Dark Gradient Overlays */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/25 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

                    {/* Top Floating Bar: Client Badge & Sound Toggle */}
                    <div className="absolute top-9 inset-x-3 flex items-center justify-between z-20">
                      {/* Client Badge */}
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white shadow-sm max-w-[70%]">
                        <div className="w-4 h-4 rounded-full overflow-hidden bg-white shrink-0">
                          <img
                            src={video.logo}
                            alt={video.client}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <span className="text-[11px] font-bold truncate">
                          {video.client}
                        </span>
                      </div>

                      {/* Apple-style Audio Toggle */}
                      <button
                        type="button"
                        onClick={(e) => toggleMute(e, video.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md border ${
                          isUnmuted
                            ? "bg-primary text-on-primary border-primary shadow-sm"
                            : "bg-black/55 hover:bg-black/80 text-white border-white/20"
                        }`}
                        aria-label={isUnmuted ? "Matikan Suara" : "Nyalakan Suara"}
                        title={isUnmuted ? "Suara Aktif (Klik untuk Mute)" : "Klik untuk Suara"}
                      >
                        <span className="material-symbols-outlined text-[17px]">
                          {isUnmuted ? "volume_up" : "volume_off"}
                        </span>
                      </button>
                    </div>

                    {/* Center Micro Play/Pause Indicator (Visible on hover or pause) */}
                    <button
                      type="button"
                      onClick={(e) => toggleCardPlay(e, video.id)}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 ${
                        !isPlaying
                          ? "opacity-100 scale-100 ring-2 ring-primary"
                          : "opacity-0 group-hover:opacity-90 scale-95 group-hover:scale-100"
                      }`}
                      aria-label={isPlaying ? "Jeda Video" : "Putar Video"}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {isPlaying ? "pause" : "play_arrow"}
                      </span>
                    </button>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-3 inset-x-3 z-20 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-white/75 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                          {video.categoryLabel}
                        </span>
                        <span className="text-[11px] font-mono text-white/80 font-medium">
                          {video.duration}
                        </span>
                      </div>

                      <h3 className="text-white text-[13px] sm:text-[14px] font-bold leading-tight line-clamp-2 drop-shadow-sm">
                        {video.title}
                      </h3>

                      <p className="text-white/70 text-[11px] line-clamp-1 italic">
                        "{video.hook}"
                      </p>

                      {/* Expand Button */}
                      <div className="mt-1 pt-2 border-t border-white/15 flex items-center justify-between text-white">
                        <span className="text-[11px] font-bold text-white group-hover:text-primary-fixed-dim transition-colors flex items-center gap-1">
                          <span>Tonton Penuh</span>
                          <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-0.5">
                            open_in_full
                          </span>
                        </span>
                        <span className="text-[10px] text-white/60">
                          Tap untuk detail
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple-style Swipe/Scroll Hint on Mobile */}
        <div className="flex sm:hidden items-center justify-center gap-2 text-on-surface-variant text-label-sm">
          <span className="material-symbols-outlined text-[16px] animate-pulse">
            swipe
          </span>
          <span>Geser horizontal untuk melihat 5 video</span>
        </div>

        {/* Callout Banner with Apple Glassmorphic Style */}
        <div className="reveal reveal-fade-up delay-200 mt-4 rounded-[32px] bg-gradient-to-r from-primary-container via-primary to-tertiary-container p-6 sm:p-8 text-on-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0px_20px_45px_-10px_rgba(94,9,25,0.3)]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed block mb-1">
              PRODUKSI VIDEO END-TO-END
            </span>
            <h3 className="text-title-lg sm:text-headline-sm font-black leading-tight">
              Ingin Brand Kamu Punya Video Berkualitas Seperti Ini?
            </h3>
            <p className="mt-2 text-body-sm sm:text-body-md text-primary-fixed/90 leading-relaxed">
              Mulai dari penulisan naskah hook 3 detik, pemilihan talent, shooting
              kamera sinematik, hingga editing & color grading siap posting.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              "Halo Logos Creative! Saya tertarik membuat video promosi TikTok/Reels untuk brand saya. Bisa diskusi konsep dan paket produksinya?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-primary font-extrabold text-label-md hover:bg-primary-fixed transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Konsultasi Video Kamu</span>
            <span className="material-symbols-outlined text-[20px]">
              chat
            </span>
          </a>
        </div>

        {/* Apple-grade Social Calling Out Hub */}
        <div className="reveal reveal-fade-up rounded-[28px] bg-gradient-to-br from-[#1c050a] via-[#2d0912] to-[#120205] border border-[#ffb3b5]/20 p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(94,9,25,0.35)]">
          <div className="flex flex-col gap-1.5 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb3b5] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffdada]">
                OFFICIAL SOCIAL MEDIA
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Eksplorasi Video &amp; Behind The Scenes Kami
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Ikuti akun resmi kami untuk melihat update video terbaru, inspirasi storytelling, dan keseharian kreatif tim Logos Creative.
            </p>
          </div>

          {/* Social Channels Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/logoscreative.id?exln=MWl0c3JxN2tkcXhxeg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white border border-white/15 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(220,39,67,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 group-hover:text-white/95 font-medium leading-none">Instagram</span>
                <span className="text-xs font-bold leading-tight">@logoscreative.id</span>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@logos.creative?_r=1&_t=ZS-9AbjG8m2UD2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-black text-white border border-white/15 hover:border-[#25F4EE]/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(37,244,238,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-[#25F4EE] transition-colors" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.46 6.3 6.3 0 0 0 1.83-4.46V8.92a8.28 8.28 0 0 0 4.93 1.6v-3.5a4.83 4.83 0 0 1-1-.33z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 group-hover:text-white/95 font-medium leading-none">TikTok</span>
                <span className="text-xs font-bold leading-tight">@logos.creative</span>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@logoscreative23?si=0QU3FIP8Fqvw_r3V"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-[#FF0000] text-white border border-white/15 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(255,0,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 group-hover:text-white/95 font-medium leading-none">YouTube</span>
                <span className="text-xs font-bold leading-tight">@logoscreative23</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Apple Theater Fullscreen Lightbox Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-[#121316] text-white rounded-[36px] max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Video Player Showcase */}
            <div className="lg:w-[46%] bg-black flex flex-col items-center justify-center p-4 sm:p-6 relative">
              {/* iPhone Bezel inside modal */}
              <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[9/16] rounded-[36px] overflow-hidden border-[6px] border-neutral-800 shadow-2xl bg-black">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-4 bg-black rounded-full pointer-events-none" />

                <video
                  ref={modalVideoRef}
                  src={selectedVideo.src}
                  playsInline
                  autoPlay
                  muted={modalMuted}
                  loop
                  onTimeUpdate={handleModalTimeUpdate}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={toggleModalPlay}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Floating Modal Controls */}
                <div className="absolute bottom-3 inset-x-3 z-30 flex flex-col gap-2">
                  {/* Progress Bar (Clickable) */}
                  <div
                    onClick={handleModalSeek}
                    className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all"
                  >
                    <div
                      className="h-full bg-primary rounded-full relative"
                      style={{ width: `${modalProgress}%` }}
                    />
                  </div>

                  {/* Controls row */}
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleModalPlay}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {modalPlaying ? "pause" : "play_arrow"}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setModalMuted(!modalMuted)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          modalMuted
                            ? "bg-white/20 text-white"
                            : "bg-primary text-white"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {modalMuted ? "volume_off" : "volume_up"}
                        </span>
                      </button>

                      <span className="font-mono text-[11px] text-white/80">
                        {formatTime(modalCurrentTime)} / {formatTime(modalDuration)}
                      </span>
                    </div>

                    <span className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                      9:16 Vertical Reel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Narrative & Strategy */}
            <div className="lg:w-[54%] p-6 sm:p-8 flex flex-col justify-between bg-surface-container-lowest text-on-surface">
              <div className="flex flex-col gap-5">
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-outline-variant/40 p-1 shrink-0 shadow-xs">
                      <img
                        src={selectedVideo.logo}
                        alt={selectedVideo.client}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <h4 className="text-title-md font-bold text-on-surface leading-tight">
                        {selectedVideo.client}
                      </h4>
                      <span className="text-label-sm font-semibold text-primary">
                        {selectedVideo.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer"
                    aria-label="Tutup Detail"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>

                {/* Title & Hook */}
                <div>
                  <h3 className="text-headline-sm font-extrabold text-on-surface tracking-tight">
                    {selectedVideo.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-2xl bg-surface-container-low border border-primary/20 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                      electric_bolt
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                        Hook 3 Detik Pertama
                      </span>
                      <p className="text-body-sm font-medium text-on-surface italic mt-0.5">
                        "{selectedVideo.hook}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Concept & Solution */}
                <div className="flex flex-col gap-3 text-body-sm text-on-surface-variant leading-relaxed">
                  <div>
                    <h5 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-1">
                      Konsep & Pendekatan Kreatif
                    </h5>
                    <p>{selectedVideo.summary}</p>
                  </div>

                  <div>
                    <h5 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-1">
                      Strategi Eksekusi
                    </h5>
                    <p>{selectedVideo.solution}</p>
                  </div>

                  <div>
                    <h5 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-1">
                      Dampak & Hasil
                    </h5>
                    <ul className="space-y-1 mt-1">
                      {selectedVideo.results.map((res, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            check_circle
                          </span>
                          <span className="text-on-surface font-medium">
                            {res}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedVideo.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold border border-outline-variant/30"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom WhatsApp CTA */}
              <div className="mt-6 pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-label-sm text-on-surface-variant text-center sm:text-left">
                  Ingin format video serupa untuk produkmu?
                </span>

                <a
                  href={getWhatsAppUrl(
                    `Halo Logos Creative! Saya tertarik membuat video promosi dengan konsep mirip "${selectedVideo.title}" (${selectedVideo.client}). Bisa diskusi lebih lanjut?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-container hover:bg-primary text-on-primary font-bold text-label-md shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>Bahas Konsep Ini via WhatsApp</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
