import { kos } from "@/data/kos";
import { waLink } from "@/lib/format";

export default function FloatingWhatsApp() {
  return (
    <a
      className="fab"
      href={waLink(kos.whatsapp, `Halo ${kos.name}, saya mau tanya soal kamar kos.`)}
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat WhatsApp
    </a>
  );
}
