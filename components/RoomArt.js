// Ilustrasi kamar sederhana sebagai pengganti foto.
// Ganti dengan <Image> dari next/image setelah kamu punya foto asli di /public.
export default function RoomArt({ tone }) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Ilustrasi kamar" className="room__art">
      <rect width="320" height="180" fill={tone} />
      <rect y="130" width="320" height="50" fill="#161B33" opacity="0.08" />
      <rect x="205" y="28" width="82" height="64" rx="4" fill="#fff" opacity="0.9" />
      <path d="M246 28v64M205 60h82" stroke={tone} strokeWidth="4" />
      <rect x="34" y="92" width="150" height="44" rx="6" fill="#2F4BD8" />
      <rect x="34" y="78" width="46" height="22" rx="6" fill="#fff" />
      <rect x="30" y="136" width="8" height="14" fill="#161B33" opacity="0.5" />
      <rect x="180" y="136" width="8" height="14" fill="#161B33" opacity="0.5" />
    </svg>
  );
}
