import Icon from "./Icon";
import { kos, nearby } from "@/data/kos";

export default function Location() {
  return (
    <section id="lokasi" className="section">
      <div className="wrap location">
        <div>
          <h2>Lokasi strategis</h2>
          <p className="lead">{kos.address}</p>
          <a className="btn btn--outline-dark" href={kos.mapsUrl} target="_blank" rel="noopener noreferrer">
            Buka di Google Maps
          </a>
        </div>
        <ul className="nearby">
          {nearby.map((n) => (
            <li key={n.place}>
              <span className="nearby__icon"><Icon name="pin" size={20} /></span>
              <div>
                <strong>{n.place}</strong>
                <span>{n.distance}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
