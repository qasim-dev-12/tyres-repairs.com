import { PHONE_TEL } from "@/lib/site";

export default function ServicesIntro() {
  return (
    <section id="services" className="bg-black py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          We Keep Your Car Running Like New
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">
          Explore Our Services
        </p>
        <h3 className="mt-2 text-xl font-semibold">
          Fast and Reliable On-Site Service in Just 20-25 Minutes!
        </h3>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
