import { PHONE_TEL } from "@/lib/site";

const PROMOS = [
  { line1: "Book Your Service Now", line2: "On site Tyre change" },
  { line1: "Spare Tyre Change &", line2: "Buy New Tyre" },
];

export default function PromoStrip() {
  return (
    <section className="bg-tint">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        {PROMOS.map((promo) => (
          <div
            key={promo.line1}
            className="flex flex-col items-center justify-between gap-4 rounded-xl bg-white p-6 text-center shadow-sm sm:flex-row sm:text-left"
          >
            <div>
              <p className="font-display text-xl font-bold text-black">{promo.line1}</p>
              <p className="font-display text-xl font-bold text-primary">{promo.line2}</p>
            </div>
            <a
              href={PHONE_TEL}
              className="shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white"
            >
              Call now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
