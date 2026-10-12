// Semua konten landing page ada di file ini.
// Cari tanda "[" untuk menemukan bagian yang masih placeholder.

export const kos = {
  name: "Kos Teduh",
  tagline: "Kos nyaman, harga jelas, tinggal bawa koper.",
  title: "Kos Teduh | Sewa Kos Nyaman dengan Harga Jelas",
  description:
    "Sewa kamar kos bersih dengan Wi-Fi, listrik, dan air sudah termasuk. Hitung biaya sewa sendiri dan pesan langsung lewat WhatsApp.",
  url: "https://namadomainkamu.com",
  address: "[Alamat lengkap kos, kota]",
  mapsUrl: "https://maps.google.com/?q=alamat+kos+kamu",
  whatsapp: "6281231973100", // format internasional tanpa + atau 0 di depan
  instagram: "https://instagram.com/akunkamu",
  responseTime: "Dibalas dalam 1 jam, pukul 08.00 sampai 21.00",
};

export const navLinks = [
  { href: "#kamar", label: "Kamar" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#cara-sewa", label: "Cara sewa" },
  { href: "#faq", label: "FAQ" },
];

// Harga per bulan dalam rupiah. "stock" = sisa kamar saat ini.
export const rooms = [
  {
    id: "standar",
    name: "Standar",
    size: "3 x 3 m",
    price: 850000,
    stock: 3,
    tone: "#DCE3FA",
    facilities: ["Kasur dan lemari", "Kipas angin", "Kamar mandi bersama", "Wi-Fi"],
    note: "Pas untuk satu orang yang mau hemat.",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    size: "3 x 4 m",
    price: 1250000,
    stock: 2,
    tone: "#FFE9A8",
    featured: true,
    facilities: ["Kasur, lemari, meja belajar", "AC", "Kamar mandi dalam", "Wi-Fi"],
    note: "Paling banyak dipilih penghuni.",
  },
  {
    id: "premium",
    name: "Premium",
    size: "4 x 4 m",
    price: 1650000,
    stock: 1,
    tone: "#D3EFE3",
    facilities: ["Kasur besar, lemari, meja kerja", "AC", "Kamar mandi dalam (water heater)", "Wi-Fi"],
    note: "Lebih luas untuk bekerja dari kamar.",
  },
];

// discount = persen potongan dari total sewa
export const durations = [
  { months: 1, label: "1 bulan", discount: 0 },
  { months: 3, label: "3 bulan", discount: 3 },
  { months: 6, label: "6 bulan", discount: 6 },
  { months: 12, label: "12 bulan", discount: 10 },
];

export const deposit = 500000; // dibayar sekali di awal [sesuaikan aturan pengembalian]

export const facilities = [
  { icon: "wifi", title: "Wi-Fi cepat", text: "Internet tersedia di semua kamar dan area bersama." },
  { icon: "zap", title: "Listrik dan air termasuk", text: "Tidak ada tagihan tambahan setiap bulan. [Sesuaikan]" },
  { icon: "shield", title: "Keamanan 24 jam", text: "CCTV di area umum dan akses pintu dengan kunci sendiri." },
  { icon: "washing", title: "Area cuci dan jemur", text: "Mesin cuci bersama dan tempat jemur di lantai atas." },
  { icon: "utensils", title: "Dapur bersama", text: "Kompor, kulkas, dan dispenser untuk semua penghuni." },
  { icon: "bike", title: "Parkir motor", text: "Parkir dalam pagar, muat untuk [jumlah] motor." },
];

export const nearby = [
  { place: "[Nama kampus atau kantor]", distance: "5 menit berjalan kaki" },
  { place: "[Minimarket / warung makan]", distance: "2 menit berjalan kaki" },
  { place: "[Halte atau stasiun terdekat]", distance: "10 menit berkendara" },
  { place: "[Rumah sakit / klinik]", distance: "8 menit berkendara" },
];

export const steps = [
  { title: "Hubungi kami", text: "Tanyakan ketersediaan kamar lewat WhatsApp atau gunakan kalkulator di atas." },
  { title: "Lihat kamar", text: "Datang survei langsung, atau minta video kamar lewat WhatsApp." },
  { title: "Bayar sewa dan deposit", text: "Transfer pembayaran awal, lalu terima bukti dan aturan kos." },
  { title: "Pindah masuk", text: "Ambil kunci di hari yang disepakati dan mulai tinggal." },
];

// CATATAN: ganti testimoni di bawah dengan testimoni penghuni asli sebelum situs dipublikasikan.
export const testimonials = [
  {
    quote: "[Contoh] Kamarnya bersih dan pemiliknya cepat membalas kalau ada yang rusak.",
    name: "[Nama penghuni]",
    detail: "[Mahasiswa / karyawan], tinggal sejak [tahun]",
  },
  {
    quote: "[Contoh] Harga sudah jelas dari awal, jadi tidak ada biaya tak terduga.",
    name: "[Nama penghuni]",
    detail: "[Mahasiswa / karyawan], tinggal sejak [tahun]",
  },
  {
    quote: "[Contoh] Wi-Fi stabil dan lokasinya dekat tempat saya bekerja.",
    name: "[Nama penghuni]",
    detail: "[Mahasiswa / karyawan], tinggal sejak [tahun]",
  },
];

export const faqs = [
  {
    q: "Apa saja yang sudah termasuk dalam harga sewa?",
    a: "Listrik, air, dan Wi-Fi sudah termasuk dalam harga bulanan. [Sesuaikan dengan aturan kos kamu.]",
  },
  {
    q: "Berapa deposit dan kapan dikembalikan?",
    a: "Deposit dibayar sekali di awal dan dikembalikan saat kamu keluar, selama kamar dalam kondisi baik. [Sesuaikan aturan pengembalian.]",
  },
  {
    q: "Apakah ada jam malam atau batasan tamu?",
    a: "[Isi aturan jam malam dan jam berkunjung tamu di sini.]",
  },
  {
    q: "Bolehkah membawa kendaraan sendiri?",
    a: "Boleh. Tersedia parkir motor di dalam pagar. [Sesuaikan jika ada parkir mobil.]",
  },
  {
    q: "Bisakah membayar per bulan tanpa kontrak panjang?",
    a: "Bisa. Sewa mulai dari 1 bulan, dan semakin lama kamu menyewa, semakin besar potongan harganya.",
  },
];
