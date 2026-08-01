import Image from "next/image";

const LEFT_FEATURES = [
  { num: "1", title: "Experienced Technicians" },
  { num: "2", title: "No Hidden Fees" },
];

const RIGHT_FEATURES = [
  { num: "3", title: "Quick Service" },
  { num: "4", title: "Warranties on Repairs" },
];

function FeatureItem({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tint font-display text-xl font-bold text-black">
        {num}.
      </span>
      <p className="max-w-[10rem] pt-1 text-2xl font-extrabold leading-tight text-black">
        {title}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">
          Why Choose Tyre Repair?
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-10">
          {LEFT_FEATURES.map((f) => (
            <FeatureItem key={f.num} {...f} />
          ))}
        </div>

        <Image
          src="/images/about_x2.jpg"
          alt="Tyre and wheel"
          width={674}
          height={684}
          className="mx-auto h-auto w-full max-w-sm"
        />

        <div className="flex flex-col gap-10">
          {RIGHT_FEATURES.map((f) => (
            <FeatureItem key={f.num} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
