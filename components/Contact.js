import Icon from "./Icon";
import { kos } from "@/data/kos";
import { waLink } from "@/lib/format";

export default function Contact() {
  const href = waLink(kos.whatsapp, `Halo ${kos.name}, saya mau tanya soal kamar kos.`);
  return (
    <section id="kontak" className="section section--brand">
      <div className="wrap contact">
        <div>
          <h2>Masih ada pertanyaan? Tanya langsung.</h2>
          <p className="lead">
            <Icon name="clock" size={18} /> {kos.responseTime}
          </p>
        </div>
        <div className="actions">
          <a className="btn btn--sun" href={href} target="_blank" rel="noopener noreferrer">Chat WhatsApp</a>
          <a className="btn btn--outline" href={kos.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
}
