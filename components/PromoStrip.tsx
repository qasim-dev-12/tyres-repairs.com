import { PHONE_TEL } from "@/lib/site";

const PROMOS = [
  {
    line1: "Book Your Service Now",
    line2: "On site Tyre change",
    bg: "/images/promo-wheel-wrench.png",
  },
  {
    line1: "Spare Tyre Change &",
    line2: "Buy New Tyre",
    bg: "/images/promo-spare-tyre.png",
  },
];

export default function PromoStrip() {
  return (
    <section className="bg-white">
      <div className="grid gap-px sm:grid-cols-2">
        {PROMOS.map((promo) => (
          <div
            key={promo.line1}
            className="bg-tint bg-cover bg-right bg-no-repeat px-8 py-14 sm:px-12 sm:py-20"
            style={{ backgroundImage: `url(${promo.bg})` }}
          >
            <p className="text-2xl font-light text-black sm:text-3xl">{promo.line1}</p>
            <p className="text-2xl font-bold text-black sm:text-3xl">{promo.line2}</p>
            <a
              href={PHONE_TEL}
              className="mt-6 inline-flex items-center rounded bg-gradient-to-r from-[#2d6afc] to-[#ff0606] px-8 py-3 text-base font-bold text-white"
            >
              Call now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
