import { steps } from "@/data/kos";

export default function Steps() {
  return (
    <section id="cara-sewa" className="section section--tint">
      <div className="wrap">
        <h2>Cara sewa dalam 4 langkah</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
