type BulletSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  bullets: string[];
  reverse?: boolean;
};

const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const BulletSection = ({ eyebrow, title, intro, bullets, reverse }: BulletSectionProps) => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className={`-mx-4 flex flex-wrap items-center gap-y-10 ${reverse ? "flex-row-reverse" : ""}`}>
          {/* Left: heading */}
          <div className="w-full px-4 lg:w-2/5">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="text-base leading-relaxed text-body-color">{intro}</p>
            )}
            <div className="mt-8 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* Right: animated cards grid */}
          <div className="w-full px-4 lg:w-3/5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bullets.map((bullet, i) => (
                <div
                  key={bullet}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="group flex items-start gap-4 rounded-2xl bg-dark p-5 ring-1 ring-stroke-dark transition-all duration-300 hover:-translate-y-1 hover:ring-primary hover:shadow-[0_8px_30px_rgba(52,235,229,0.12)] animate-[fadeInUp_0.5s_ease_both]"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20">
                    <CheckIcon />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-body-color-dark group-hover:text-white transition-colors duration-300">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletSection;
