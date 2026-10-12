import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { kos, navLinks } from "@/data/kos";
import { waLink } from "@/lib/format";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL(kos.url),
  title: kos.title,
  description: kos.description,
  openGraph: {
    title: kos.title,
    description: kos.description,
    url: kos.url,
    siteName: kos.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={font.variable}>
      <body>
        <a href="#utama" className="skip-link">Lompat ke konten</a>
        <Navbar
          name={kos.name}
          links={navLinks}
          waHref={waLink(kos.whatsapp, `Halo ${kos.name}, saya mau tanya soal kamar kos.`)}
        />
        {children}
      </body>
    </html>
  );
}
