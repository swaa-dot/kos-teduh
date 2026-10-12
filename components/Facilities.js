import Icon from "./Icon";
import { facilities } from "@/data/kos";

export default function Facilities() {
  return (
    <section id="fasilitas" className="section section--tint">
      <div className="wrap">
        <h2>Fasilitas untuk semua penghuni</h2>
        <ul className="facilities">
          {facilities.map((f) => (
            <li key={f.title}>
              <span className="facilities__icon"><Icon name={f.icon} /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
