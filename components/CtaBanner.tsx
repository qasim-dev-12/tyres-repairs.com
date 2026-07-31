import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 text-white">
      <Image
        src="/images/man-footer__1_-removebg-preview.png"
        alt=""
        width={260}
        height={320}
        className="pointer-events-none absolute -bottom-4 right-4 hidden h-72 w-auto opacity-90 md:block"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Image
          src="/images/Screenshot_13-removebg-preview.png"
          alt=""
          width={60}
          height={60}
          className="mx-auto mb-4 h-12 w-auto"
        />
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          IF ANY CAR RELATED ISSUES ARE BOTHERING
        </h2>
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">GIVE A CALL</h2>

        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            <PhoneVolumeIcon className="h-5 w-5" />
            We are Available 24x7
          </p>
          <a href={PHONE_TEL} className="font-display text-4xl font-extrabold sm:text-5xl">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
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
