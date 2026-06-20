// ============================================================
// BRAND CONFIG — edit bagian ini saja untuk ganti klien
// ============================================================
export const BRAND = {
  name: "Revelry Planner",
  nameShort: "Revelry",
  nameDisplay: ["Revelry", "Planner", ""] as const,
  niche: "Wedding & Event Planner",
  tagline: "Meriahkan Pestamu Bersama Kami",
  heroDesc: "Revelry Planner hadir untuk menjadikan setiap perayaan Anda luar biasa — dari pernikahan impian hingga big event berkesan — dengan perencanaan menyeluruh dan eksekusi profesional.",
  aboutDesc: "Revelry Planner adalah layanan planner & organizer profesional untuk wedding, event, dan big event. Kami percaya setiap pesta layak dirayakan dengan meriah dan berkesan. Dengan tim berpengalaman dan pendekatan personal, kami pastikan setiap detail terlaksana sempurna — sehingga Anda tinggal hadir, menikmati, dan bersinar di hari istimewa.",
  city: "Indonesia",
  address: "Indonesia",
  year: "2025",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "Revelry Planner — Wedding & Event Planner Profesional",
  metaDesc: "Jadikan momen pernikahan dan event Anda tak terlupakan bersama Revelry Planner. Perencanaan menyeluruh, eksekusi profesional.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440";
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Planner",
    desc: "Perencanaan dan koordinasi pernikahan menyeluruh dari awal hingga hari H.",
    icon: "Sparkles",
  },
  {
    title: "Event Organizer",
    desc: "Eksekusi big event, corporate event, dan private party yang berkesan.",
    icon: "PartyPopper",
  },
  {
    title: "Dekorasi",
    desc: "Konsep dekorasi modern, elegan, hingga custom sesuai tema impian Anda.",
    icon: "Flower2",
  },
  {
    title: "Dokumentasi",
    desc: "Foto & video sinematik yang mengabadikan setiap momen berharga.",
    icon: "Camera",
  },
  {
    title: "Catering",
    desc: "Pilihan menu lezat untuk seluruh tamu dengan cita rasa terbaik.",
    icon: "Utensils",
  },
  {
    title: "Paket All-in-One",
    desc: "Solusi lengkap satu pintu — efisien, terpadu, dan tanpa repot.",
    icon: "Gift",
  },
];

export const GALLERY = [
  { src: "/img/wedding2.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding3.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding4.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding5.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding7.jpg", cat: "Event", h: "short" },
  { src: "/img/wedding8.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding9.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding1.jpg", cat: "Dokumentasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Event", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Starter",
    tag: "100 – 200 tamu",
    price: 5_500_000,
    features: [
      "Koordinator & 3 tim hari H",
      "Briefing & technical meeting",
      "Susunan acara & rundown",
      "Pendamping pengantin",
      "Konsultasi gratis",
    ],
  },
  {
    name: "Paket Regular",
    tag: "250 – 350 tamu",
    price: 8_500_000,
    popular: true,
    features: [
      "Koordinator senior & 5 tim hari H",
      "Briefing, TM & gladi resik",
      "Rundown, cue card & timeline",
      "Pendamping kedua pengantin",
      "Koordinasi seluruh vendor",
      "Konsultasi tak terbatas",
    ],
  },
  {
    name: "Paket Premium",
    tag: "400 – 500 tamu",
    price: 12_000_000,
    features: [
      "Koordinator senior & 8 tim hari H",
      "Briefing, TM & 2x gladi resik",
      "Custom rundown & timeline detail",
      "Pendamping & asisten keluarga",
      "Full vendor coordination",
      "Laporan & evaluasi pasca acara",
    ],
  },
  {
    name: "Paket Signature",
    tag: "500+ tamu / Big Event",
    price: 18_000_000,
    features: [
      "Event director & 12+ tim",
      "Unlimited meeting & planning",
      "Custom premium concept",
      "VIP escort keluarga inti",
      "Koordinasi vendor premium",
      "Konsep & supervisi penuh hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi Essentials", tag: "Simpel Elegan", price: 10_000_000, features: ["Pelaminan utama", "Backdrop akad", "Standing flower", "Photobooth sederhana", "Karpet & ornamen"] },
  { name: "Dekorasi Modern", tag: "Contemporary", price: 16_000_000, popular: true, features: ["Pelaminan premium", "Backdrop akad custom", "Fresh flower arrangement", "Photobooth instagramable", "Dekor meja tamu"] },
  { name: "Dekorasi Luxury", tag: "Full Floral", price: 22_000_000, features: ["Pelaminan luxury", "Full fresh flower", "Aisle & entrance deco", "Photobooth premium", "Styling area lengkap"] },
  { name: "Dekorasi Grand", tag: "Big Event", price: 35_000_000, features: ["Konsep ballroom / outdoor mewah", "Fresh flower & lighting dekoratif", "Stage & backdrop grand", "Photobooth signature", "Full area styling"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Silver", tag: "Akad only", price: 3_500_000, features: ["1 fotografer", "1 videografer", "200 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Gold", tag: "Akad + Resepsi", price: 5_500_000, popular: true, features: ["2 fotografer", "1 videografer", "400 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Platinum", tag: "Full Day", price: 7_500_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Sinematik", tag: "Pre & Full Day", price: 9_500_000, features: ["Tim sinematik lengkap", "Pre-wedding session", "Cinematic video 5 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Gratis", desc: "Ceritakan impian Anda. Kami dengar dan pahami setiap detail.", icon: "MessageCircle" },
  { n: "02", title: "Perencanaan Detail", desc: "Kami rancang konsep, rundown, dan koordinasikan semua vendor.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Profesional", desc: "Hari H di tangan kami. Anda hadir, menikmati, dan bersinar.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Selamanya", desc: "Dokumentasi indah sebagai warisan momen bahagia Anda.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Revelry Planner benar-benar membuat pernikahan kami jauh melebihi ekspektasi. Semua berjalan lancar tanpa kendala satu pun. Terima kasih tim Revelry!",
    name: "Mila & Iqbal",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote:
      "Dari dekorasi hingga dokumentasi, semuanya indah dan profesional. Tim mereka sangat responsif dan membantu kami dari awal hingga akhir.",
    name: "Rahmi & Aldi",
    date: "Februari 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Kami awalnya khawatir soal koordinasi vendor, tapi Revelry handle semuanya dengan sempurna. Hari pernikahan kami terasa magical!",
    name: "Dinda & Rafi",
    date: "Desember 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "7 Tren Wedding 2026 yang Wajib Anda Tahu Sebelum Menikah",
    cat: "Inspirasi",
    date: "10 Mei 2026",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Checklist Lengkap Persiapan Pernikahan 12 Bulan Sebelum Hari H",
    cat: "Panduan",
    date: "2 April 2026",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Cara Memilih Wedding Organizer yang Tepat untuk Hari Spesial Anda",
    cat: "Tips",
    date: "15 Maret 2026",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
