// Ikon garis sederhana (24x24). Tambah ikon baru dengan menambah entri di ICONS.
const ICONS = {
  wifi: [
    { d: "M5 12.55a11 11 0 0 1 14.08 0" },
    { d: "M1.42 9a16 16 0 0 1 21.16 0" },
    { d: "M8.53 16.11a6 6 0 0 1 6.95 0" },
    { d: "M12 20h.01" },
  ],
  zap: [{ d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z" }],
  shield: [
    { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" },
  ],
  washing: [
    { rect: [3, 2, 18, 20, 2] },
    { circle: [12, 13, 5] },
    { d: "M7 6h.01M11 6h.01" },
  ],
  utensils: [
    { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" },
    { d: "M7 2v20" },
    { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" },
  ],
  bike: [
    { circle: [5.5, 17.5, 3.5] },
    { circle: [18.5, 17.5, 3.5] },
    { d: "M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" },
  ],
  check: [{ d: "M20 6 9 17l-5-5" }],
  pin: [{ d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" }, { circle: [12, 10, 3] }],
  clock: [{ circle: [12, 12, 10] }, { d: "M12 6v6l4 2" }],
};

export default function Icon({ name, size = 22 }) {
  const parts = ICONS[name] || [];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {parts.map((p, i) => {
        if (p.d) return <path key={i} d={p.d} />;
        if (p.circle) return <circle key={i} cx={p.circle[0]} cy={p.circle[1]} r={p.circle[2]} />;
        if (p.rect) return <rect key={i} x={p.rect[0]} y={p.rect[1]} width={p.rect[2]} height={p.rect[3]} rx={p.rect[4]} />;
        return null;
      })}
    </svg>
  );
}
