import Image from "next/image";

const FEATURES = [
  { num: "1", title: "Experienced Technicians" },
  { num: "2", title: "No Hidden Fees" },
  { num: "3", title: "Quick Service" },
  { num: "4", title: "Warranties on Repairs" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">
          Why Choose Tyre Repair?
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <Image
          src="/images/about_x2.jpg"
          alt="Our workshop and technicians"
          width={600}
          height={500}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.num} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white">
                {feature.num}
              </span>
              <p className="pt-2 font-semibold text-black">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
