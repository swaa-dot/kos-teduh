import { testimonials } from "@/data/kos";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Kata penghuni</h2>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote">
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
