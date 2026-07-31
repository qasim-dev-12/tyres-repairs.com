import Image from "next/image";

const LOGOS = [
  "6-1.png",
  "1-3.png",
  "2-3.png",
  "3-2.png",
  "4-2.png",
  "5-1.png",
  "7.png",
  "8.png",
  "9.png",
];

export default function BrandStrip() {
  const logos = [...LOGOS, ...LOGOS];
  return (
    <section className="overflow-hidden bg-white py-14">
      <h2 className="text-center font-display text-2xl font-bold text-black sm:text-3xl">
        We Cooperate with Big Auto Brands
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />

      <div className="mt-10 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16">
          {logos.map((logo, i) => (
            <Image
              key={`${logo}-${i}`}
              src={`/images/${logo}`}
              alt="Partner brand"
              width={90}
              height={60}
              className="h-12 w-auto opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
