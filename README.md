# Landing page sewa kos (Next.js)

Next.js App Router, JavaScript, tanpa library UI tambahan.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Mengisi konten

Semua teks, harga, fasilitas, dan nomor WhatsApp ada di `data/kos.js`.
Cari tanda `[` untuk menemukan placeholder. Hal yang wajib diganti:

- `whatsapp`: format internasional tanpa `+` dan tanpa `0` di depan (contoh `6281234567890`).
- `url`, `address`, `mapsUrl`, `instagram`.
- Harga kamar, `stock`, dan `deposit`.
- Testimoni: ganti dengan testimoni penghuni asli sebelum situs dipublikasikan.

## Fitur

- Kalkulator biaya sewa (tipe kamar x lama sewa, potongan, deposit) yang membuat pesan WhatsApp otomatis.
- Tombol pesan di tiap kartu kamar, dengan pesan WhatsApp yang sudah terisi.
- FAQ memakai `<details>` bawaan HTML, tanpa JavaScript.
- JSON-LD `LodgingBusiness` untuk SEO lokal.
- Tombol WhatsApp mengambang di layar mobile.

## Mengganti ilustrasi dengan foto

`components/RoomArt.js` adalah ilustrasi sementara. Taruh foto di `public/kamar/`, lalu pakai
`next/image` (beri `priority` hanya untuk gambar di layar pertama dan `sizes` yang sesuai).

## Performa

Semua section adalah Server Component. Hanya `Navbar` (menu mobile) dan `PriceCalculator`
yang memakai JavaScript klien. Font memakai `next/font`, dan tidak ada gambar atau script pihak ketiga.
