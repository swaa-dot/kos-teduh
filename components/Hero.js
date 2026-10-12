import PriceCalculator from "./PriceCalculator";
import { kos, rooms, durations, deposit } from "@/data/kos";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>{kos.tagline}</h1>
          <p className="hero__lead">
            Listrik, air, dan Wi-Fi sudah termasuk. Pilih tipe kamar dan lama sewa, lihat total
            biayanya, lalu pesan langsung ke pemilik.
          </p>
          <div className="actions">
            <a className="btn btn--sun" href="#kamar">Lihat tipe kamar</a>
            <a className="btn btn--outline" href="#lokasi">Lihat lokasi</a>
          </div>
        </div>
        <PriceCalculator
          brand={kos.name}
          rooms={rooms.map(({ id, name, size, price, featured }) => ({ id, name, size, price, featured }))}
          durations={durations}
          deposit={deposit}
          whatsapp={kos.whatsapp}
        />
      </div>
    </section>
  );
}
