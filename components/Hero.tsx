import Image from "next/image";
import { PHONE_TEL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <Image
        src="/images/wheel-1-min.png"
        alt=""
        width={220}
        height={220}
        className="animate-spin-slow pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 opacity-90 md:block"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            At Location in 25 Mins.
          </p>
          <div className="mb-4 h-1 w-20 rounded bg-primary" />

          <h1 className="font-display text-4xl font-bold leading-tight text-black sm:text-5xl">
            Car Tyre Repair Service At Your Location
          </h1>
          <h2 className="mt-4 text-lg font-medium text-neutral-700">
            We Fix Flat Tyre, Repair Puncture Tyre and Sale New Tyre to keep your car running
            smoothly.
          </h2>

          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Call Now
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Image
              src="/images/Screenshot_3.png"
              alt="Rated by our customers"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
            <p className="font-display text-xl font-bold text-black">6+ Expert Technicians</p>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/images/download-removebg-preview-e1727752358402.png"
            alt="Tyre repair technician"
            width={520}
            height={520}
            className="mx-auto h-auto w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
