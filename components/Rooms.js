import Icon from "./Icon";
import RoomArt from "./RoomArt";
import { kos, rooms } from "@/data/kos";
import { formatRupiah, waLink } from "@/lib/format";

export default function Rooms() {
  return (
    <section id="kamar" className="section">
      <div className="wrap">
        <h2>Pilih tipe kamar</h2>
        <p className="lead">Harga per bulan, sudah termasuk listrik, air, dan Wi-Fi.</p>

        <div className="rooms">
          {rooms.map((r) => {
            const msg = `Halo ${kos.name}, saya tertarik dengan kamar ${r.name}. Apakah masih tersedia?`;
            return (
              <article key={r.id} className={`room${r.featured ? " room--featured" : ""}`}>
                <RoomArt tone={r.tone} />
                <div className="room__body">
                  <div className="room__head">
                    <h3>{r.name}</h3>
                    {r.featured && <span className="badge">Paling diminati</span>}
                  </div>
                  <p className="room__note">{r.note} Ukuran {r.size}.</p>
                  <p className="room__price">
                    {formatRupiah(r.price)}
                    <span>/bulan</span>
                  </p>
                  <ul className="room__list">
                    {r.facilities.map((f) => (
                      <li key={f}>
                        <Icon name="check" size={18} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="room__stock">
                    {r.stock > 0 ? `Sisa ${r.stock} kamar` : "Penuh, tanya daftar tunggu"}
                  </p>
                  <a className="btn btn--primary btn--block" href={waLink(kos.whatsapp, msg)} target="_blank" rel="noopener noreferrer">
                    Pesan kamar {r.name}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
