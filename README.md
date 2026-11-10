<a id="readme-top"></a>

<div align="center">
  <h1 align="center">hadidwirsty-hero</h1>

  <p align="center">
    <strong>Pengalaman Hero Section Interaktif & Animasi Parallax Multi-Plane Skala Sinematik</strong>
    <br />
    Terinspirasi dari arsitektur visual Wishlabs AI, direkayasa dengan Next.js 16, React 19, Tailwind CSS v4, dan Motion (Framer).
    <br />
    <br />
    <a href="https://github.com/hadidwirsty/hadidwirsty-hero"><strong>Jelajahi Repositori »</strong></a>
    ·
    <a href="https://github.com/hadidwirsty/hadidwirsty-hero/issues">Laporkan Masalah</a>
    ·
    <a href="https://github.com/hadidwirsty/hadidwirsty-hero/issues">Ajukan Fitur</a>
  </p>
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.4.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.1-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Framer_14.x-black?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-orange?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

</div>

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
  - [Fitur Utama](#fitur-utama)
  - [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Arsitektur](#struktur-arsitektur)
- [Memulai (Getting Started)](#memulai-getting-started)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
  - [Menjalankan Server Lokal](#menjalankan-server-lokal)
- [Perintah Pengembangan](#perintah-pengembangan)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

---

## Tentang Proyek

**hadidwirsty-hero** adalah antarmuka web modern kelas dunia yang menampilkan pengalaman *scrollytelling* berbasis kedalaman 3D (*multi-plane parallax depth*). Proyek ini dirancang untuk menghadirkan atmosfer visual sinematik tanpa mengorbankan performa, memanfaatkan mesin animasi **Motion (Framer Motion)** generasi terbaru yang sepenuhnya kompatibel dengan **React 19** dan **Next.js 16 (App Router)**.

### Fitur Utama

- 🌄 **Multi-Plane Parallax Scroll:** Tumpukan 4 lapisan seni pegunungan (*clouds, citadel factory, misty valley, foreground mountain ridge*) yang bergerak pada rasio kedalaman berbeda terhadap posisi gulir pengguna.
- ⚡ **Optimasi Performa Gambar:** Memanfaatkan komponen `<Image />` bawaan Next.js dengan atribut `priority` dan kompresi format otomatis AVIF/WebP.
- 🎨 **Palet Warna OKLCH & Tailwind v4:** Sistem tema modern dengan variabel warna OKLCH berdaya kontras tinggi dan dukungan *Dark/Light Mode* melalui `next-themes` (dilengkapi pintasan papan ketik <kbd>D</kbd>).
- 🧩 **Arsitektur Komponen Modular:** Koleksi komponen siap pakai yang rapi di `@/components/hero` (`ParallaxHero`, `Navbar`, `InteractivePreview`, `MetricsStrip`, `AnimatedCounter`, `HeroFooter`).
- 💎 **Bebas Masalah Rendering:** Menggunakan `useSyncExternalStore` untuk mendeteksi *mounting* sisi klien tanpa memicu *cascading renders* pada React 19.

### Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) `16.4.4` (App Router + Turbopack)
- **Library UI:** [React](https://react.dev/) `19.3.1`
- **Animasi:** [Motion](https://motion.dev/) `^14.11.1` (Framer Motion v14)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) `v4` & `@tailwindcss/postcss`
- **Komponen Primitif:** `@base-ui/react` `^1.9.0` & `shadcn/ui` (gaya `base-luma`)
- **Ikon:** `lucide-react` `^1.71.0`
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) `^5` (Strict Mode)

<p align="right">(<a href="#readme-top">kembali ke atas ↑</a>)</p>

---

## Struktur Arsitektur

```text
hadidwirsty-hero/
├── app/
│   ├── globals.css              # Konfigurasi Tailwind v4, @theme inline, variabel OKLCH
│   ├── layout.tsx               # Root HTML layout (Inter + Geist_Mono, ThemeProvider)
│   └── page.tsx                 # Halaman utama mengintegrasikan ParallaxHero & Showcase
├── components/
│   ├── hero/                    # Modul komponen Hero
│   │   ├── animated-counter.tsx # Counter angka animasi pegas (spring physics)
│   │   ├── hero-footer.tsx      # Footer penutup aplikasi
│   │   ├── hero-section.tsx     # Section hero sekunder
│   │   ├── index.ts             # Barrel export modular
│   │   ├── interactive-preview.tsx # Showcase komparasi AI Sebelum/Sesudah
│   │   ├── metrics-strip.tsx    # Papan metrik statistik 4 angka riil
│   │   ├── navbar.tsx           # Header navigasi transparan (glassmorphism)
│   │   └── parallax-hero.tsx    # Mesin animasi scroll parallax 4-lapisan
│   └── ui/                      # Komponen primitif shadcn / Base UI
├── public/
│   └── hero/                    # Aset grafis parallax (cloud, factory, valley, mountain)
└── .agents/
    └── rules/
        └── project-context.md   # Dokumen Authoritative Context Memory proyek
```

<p align="right">(<a href="#readme-top">kembali ke atas ↑</a>)</p>

---

## Memulai (Getting Started)

### Prasyarat

Pastikan lingkungan Anda telah terpasang:
- **Node.js:** Versi 20.x atau lebih baru
- **pnpm:** Versi 10.x atau lebih baru (`corepack enable pnpm` atau melalui package manager sistem)

### Instalasi

1. Klon repositori ini:
   ```bash
   git clone https://github.com/hadidwirsty/hadidwirsty-hero.git
   cd hadidwirsty-hero
   ```

2. Pasang dependensi menggunakan `pnpm`:
   ```bash
   pnpm install
   ```

### Menjalankan Server Lokal

Jalankan server pengembangan:
```bash
pnpm dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000) (atau port yang dialokasikan) untuk melihat aplikasi.

<p align="right">(<a href="#readme-top">kembali ke atas ↑</a>)</p>

---

## Perintah Pengembangan

| Perintah | Deskripsi |
| :--- | :--- |
| `pnpm dev` | Menjalankan server pengembangan Next.js lokal |
| `pnpm build` | Mengompilasi aplikasi untuk lingkungan produksi via Turbopack |
| `pnpm start` | Menjalankan aplikasi hasil kompilasi produksi |
| `pnpm typecheck` | Menjalankan audit tipe data TypeScript (`tsc --noEmit`) |
| `pnpm lint` | Menjalankan audit linter ESLint 9 |
| `pnpm format` | Menjalankan pemformatan kode dengan Prettier |

<p align="right">(<a href="#readme-top">kembali ke atas ↑</a>)</p>

---

## Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat berkas `LICENSE` untuk informasi lebih lanjut.

---

## Kontak

**Muhammad Hadid Wiransetyo**  
- Profil GitHub: [@hadidwirsty](https://github.com/hadidwirsty)
- Proyek Tautan: [https://github.com/hadidwirsty/hadidwirsty-hero](https://github.com/hadidwirsty/hadidwirsty-hero)

<p align="right">(<a href="#readme-top">kembali ke atas ↑</a>)</p>
