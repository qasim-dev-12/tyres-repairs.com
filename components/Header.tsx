import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services", active: false },
  { label: "About", href: "#about", active: true },
  { label: "Tyre Replacement", href: "#services", active: false },
  { label: "Contact Us", href: "#contact", active: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-tyre-repair.png"
            alt="Tyre Repair - Auto Repairing Service"
            width={1774}
            height={887}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-primary ${link.active ? "text-primary" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:hidden items-center justify-center rounded-full bg-whatsapp p-2.5 text-white"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold whitespace-nowrap"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .9.9-2.9-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}
