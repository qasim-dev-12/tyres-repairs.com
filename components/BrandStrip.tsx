import Image from "next/image";

const LOGOS = [
  { file: "6-1.png", name: "Toyota" },
  { file: "1-3.png", name: "Mercedes-Benz" },
  { file: "2-3.png", name: "Tesla" },
  { file: "3-2.png", name: "BMW" },
  { file: "4-2.png", name: "Limousine Palace" },
  { file: "5-1.png", name: "Ferrari" },
  { file: "7.png", name: "Nissan" },
  { file: "8.png", name: "Ford" },
  { file: "9.png", name: "Honda" },
];

export default function BrandStrip() {
  return (
    <section className="bg-tint py-16">
      <h2 className="text-center font-display text-3xl font-bold text-black sm:text-4xl">
        We Cooperate With Big Auto Brands
      </h2>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {LOGOS.map((logo) => (
          <div
            key={logo.file}
            className="flex aspect-square items-center justify-center border border-neutral-200 bg-white p-8"
          >
            <Image
              src={`/images/${logo.file}`}
              alt={logo.name}
              width={300}
              height={300}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
