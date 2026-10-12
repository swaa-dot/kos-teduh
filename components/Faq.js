import { faqs } from "@/data/kos";

export default function Faq() {
  return (
    <section id="faq" className="section section--tint">
      <div className="wrap faq">
        <h2>Pertanyaan yang sering diajukan</h2>
        <div className="faq__list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
