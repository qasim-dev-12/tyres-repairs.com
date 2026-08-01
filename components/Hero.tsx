import Image from "next/image";
import { PHONE_TEL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black">
      <Image
        src="/images/wheel-1-min.png"
        alt=""
        width={398}
        height={398}
        className="animate-spin-slow pointer-events-none absolute -bottom-24 -left-24 hidden h-[380px] w-[380px] opacity-90 md:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="relative z-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-white">
            At Location in 25 Mins.
          </p>
          <div className="mb-4 h-1 w-20 rounded bg-primary" />

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Car Tyre Repair Service At Your Location
          </h1>

          <h2 className="mt-4 inline-block bg-white/10 px-2 py-1 text-lg font-medium leading-relaxed text-white/90">
            We Fix Flat Tyre, Repair Puncture Tyre and Sale New Tyre to keep your car running
            smoothly.
          </h2>

          <div>
            <a
              href={PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2d6afc] to-[#ff0606] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Image
              src="/images/Screenshot_3.png"
              alt="Our expert technicians"
              width={318}
              height={117}
              className="h-16 w-auto"
            />
            <p className="font-display text-xl font-bold text-white">6+ Expert Technicians</p>
          </div>
        </div>

        <div className="relative hidden h-[420px] md:block lg:h-[480px]">
          <Image
            src="/images/download-removebg-preview-e1727752358402.png"
            alt="Tyre repair technician"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
