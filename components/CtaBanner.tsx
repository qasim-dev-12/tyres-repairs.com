import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="text-center md:text-left">
          <p className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-white md:justify-start">
            <StripesIcon className="h-6 w-8" />
            If Any Car Realated Issues Are Bothering
          </p>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-white sm:text-4xl">
            GIVE A CALL
          </h2>
        </div>

        <Image
          src="/images/man-footer__1_-removebg-preview.png"
          alt="Technician holding a tyre"
          width={260}
          height={320}
          className="h-56 w-auto shrink-0 sm:h-64"
        />

        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-primary">
            <PhoneVolumeIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="text-sm font-bold text-white">We are Available 24x7</p>
            <a href={PHONE_TEL} className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StripesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="currentColor" className={className}>
      <polygon points="0,24 8,24 20,0 12,0" />
      <polygon points="12,24 20,24 32,0 24,0" />
      <polygon points="24,24 32,24 40,4 34,4" opacity="0.7" />
    </svg>
  );
}

function PhoneVolumeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"
      />
      <path strokeLinecap="round" d="M15 8a3 3 0 010 4M17.5 5.5a7 7 0 010 9" />
    </svg>
  );
}
