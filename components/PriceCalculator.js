"use client";

import { useId, useMemo, useState } from "react";
import { formatRupiah, waLink } from "@/lib/format";

export default function PriceCalculator({ brand, rooms, durations, deposit, whatsapp }) {
  const uid = useId();
  const [roomId, setRoomId] = useState(rooms.find((r) => r.featured)?.id ?? rooms[0].id);
  const [months, setMonths] = useState(durations[0].months);

  const calc = useMemo(() => {
    const room = rooms.find((r) => r.id === roomId);
    const dur = durations.find((d) => d.months === months);
    const subtotal = room.price * dur.months;
    const discount = Math.round((subtotal * dur.discount) / 100);
    const total = subtotal - discount + deposit;
    return { room, dur, subtotal, discount, total };
  }, [roomId, months, rooms, durations, deposit]);

  const message =
    `Halo ${brand}, saya tertarik menyewa kamar ${calc.room.name} selama ${calc.dur.label}. ` +
    `Estimasi pembayaran awal ${formatRupiah(calc.total)}. Apakah masih tersedia?`;

  return (
    <div className="calc" role="group" aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className="calc__title">Hitung biaya sewa</h2>

      <label className="field" htmlFor={`${uid}-room`}>Tipe kamar</label>
      <select
        id={`${uid}-room`}
        className="select"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      >
        {rooms.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name} ({r.size}) - {formatRupiah(r.price)}/bulan
          </option>
        ))}
      </select>

      <fieldset className="seg">
        <legend className="field">Lama sewa</legend>
        <div className="seg__row">
          {durations.map((d) => (
            <label key={d.months} className="seg__opt">
              <input
                type="radio"
                name={`${uid}-dur`}
                value={d.months}
                checked={months === d.months}
                onChange={() => setMonths(d.months)}
              />
              <span>
                {d.label}
                {d.discount > 0 && <small>hemat {d.discount}%</small>}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <dl className="calc__rows" aria-live="polite">
        <div>
          <dt>Sewa {calc.dur.label}</dt>
          <dd>{formatRupiah(calc.subtotal)}</dd>
        </div>
        {calc.discount > 0 && (
          <div>
            <dt>Potongan {calc.dur.discount}%</dt>
            <dd>-{formatRupiah(calc.discount)}</dd>
          </div>
        )}
        <div>
          <dt>Deposit (sekali bayar)</dt>
          <dd>{formatRupiah(deposit)}</dd>
        </div>
        <div className="calc__total">
          <dt>Pembayaran awal</dt>
          <dd>{formatRupiah(calc.total)}</dd>
        </div>
      </dl>

      <a
        className="btn btn--sun btn--block"
        href={waLink(whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pesan lewat WhatsApp
      </a>
    </div>
  );
}
