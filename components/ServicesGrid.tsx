import Image from "next/image";
import { EMAIL, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

const SERVICES = [
  {
    image: "/images/istockphoto-892109776-612x612-1.jpg",
    alt: "Car tyre repair service",
    badge: "CAR TYRE REPAIR SERVICE",
    lines: ["On-Site Service", "in Just 20-25 Minutes!", "Book Your Service Now"],
  },
  {
    image: "/images/istockphoto-1573720038-612x612-1.jpg",
    alt: "Car tyre fitting service Dubai",
    badge: "SPARE TYRE CHANGE SERVICE",
    lines: ["On-Site Service", "in Just 20-25 Minutes!", "Book Your Service Now"],
  },
  {
    image: "/images/istockphoto-505840706-612x612-1.jpg",
    alt: "Rim repair service",
    badge: "CAR RIM REPAIR SERVICE",
    lines: ["looking like new again", "Quality service", "Book Your Service Now"],
  },
  {
    image: "/images/istockphoto-1170341874-612x612-1.jpg",
    alt: "Puncture repair service",
    badge: "TYRE PUNCTURE REPAIR SERVICE",
    lines: ["On-Site Service", "in Just 20-25 Minutes!", "Get 1 Month Warranty For Repair"],
  },
  {
    image: "/images/new-tyres.jpg",
    alt: "Buy new tyres",
    badge: "BUY NEW TYRE",
    lines: ["We have all Brands", "of Tyres Available in All Sizes."],
  },
  {
    image: "/images/istockphoto-1404906074-612x612-1.jpg",
    alt: "Car battery replacement service",
    badge: "CAR BATTERY REPLACEMENT",
    lines: ["Installed on-site", "Get back on the road", "quickly"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.badge} className="border-t-4 border-primary bg-white shadow-sm">
            <Image
              src={service.image}
              alt={service.alt}
              width={400}
              height={280}
              className="h-48 w-full object-cover"
            />
            <div className="px-6 py-8 text-center">
              <span className="inline-block rounded bg-gradient-to-r from-[#2d6afc] to-[#ff0606] px-6 py-3 text-base font-extrabold uppercase tracking-wide text-white">
                {service.badge}
              </span>
              <div className="mt-5 space-y-1 text-lg text-neutral-800">
                {service.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="flex">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-whatsapp py-4 text-center text-lg font-bold text-white"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="flex-1 bg-[#2d6afc] py-4 text-center text-lg font-bold text-white"
              >
                Call
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 bg-accent py-4 text-center text-lg font-bold text-white"
              >
                Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
