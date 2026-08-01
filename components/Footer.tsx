import Image from "next/image";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black pb-24 pt-14 text-white md:pb-14">
      <Image
        src="/images/footer-left.png"
        alt=""
        width={402}
        height={326}
        className="pointer-events-none absolute -left-16 -top-10 hidden h-auto w-56 opacity-20 md:block"
      />
      <Image
        src="/images/footer-right.png"
        alt=""
        width={637}
        height={173}
        className="pointer-events-none absolute -right-10 bottom-16 hidden h-auto w-64 opacity-20 lg:block"
      />
      <Image
        src="/images/footer-bar-left.png"
        alt=""
        width={389}
        height={168}
        className="pointer-events-none absolute -bottom-6 left-1/3 hidden h-auto w-48 opacity-10 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/images/logo-tyre-repair.png"
            alt="Tyre Repair - Auto Repairing Service"
            width={1774}
            height={887}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm text-neutral-400">
            From minor repairs to major overhauls, we provide reliable and expert car services to
            ensure you drive with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon label="Facebook" />
            <SocialIcon label="Twitter" />
            <SocialIcon label="YouTube" />
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-primary">Opening Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li className="flex justify-between gap-4">
              <span>Monday – Saturday</span>
              <span>7:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span>8:30 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-primary">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            <li>
              <a href={PHONE_TEL} className="hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-neutral-500 sm:px-6 lg:px-8">
        Copyright 2024, tyrerepair.com All Rights Reserved.
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-whatsapp py-3 text-center text-sm font-bold text-white"
        >
          WhatsApp
        </a>
        <a href={PHONE_TEL} className="bg-primary py-3 text-center text-sm font-bold text-white">
          Call
        </a>
      </div>
    </footer>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold"
      aria-label={label}
      title={label}
    >
      {label[0]}
    </span>
  );
}
