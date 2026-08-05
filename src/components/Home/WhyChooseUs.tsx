import SectionTitle from "../Common/SectionTitle";

const items = [
  {
    title: "30-Minute Emergency Response",
    paragraph:
      "Don't get stranded. Our technicians arrive within 30-45 minutes anywhere in Dubai.",
  },
  {
    title: "Certified Technicians, Fully Equipped",
    paragraph:
      "Trained for every vehicle type. Diagnose batteries accurately and fit them correctly.",
  },
  {
    title: "Transparent, No-Surprise Pricing",
    paragraph:
      "No call-out fee. The price you see is the price you pay, with no hidden charges.",
  },
  {
    title: "Complete Dubai Coverage",
    paragraph:
      "From Al Quoz to Palm Jumeirah, our mobile units cover every neighborhood and highway.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Why Choose Us" paragraph="" center />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-6 shadow-one dark:bg-dark dark:shadow-three">
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-base text-body-color">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
