const ROW1_STEPS = [
  {
    title: "Thorough Inspections",
    text: "We start with a detailed inspection to identify the root cause of the issue, ensuring no problem goes unnoticed.",
  },
  {
    title: "Expert Precision",
    text: "Our certified technicians use advanced tools and techniques to perform each repair with precision and care.",
  },
  {
    title: "Quality Assurance",
    text: "Before handing back your vehicle, we double-check every repair to ensure it meets our high standards of safety and performance.",
  },
];

const ROW2_STEPS = [
  {
    title: "On-Site Service",
    text: "Enjoy the convenience of on-site repairs, with many services completed in just 20-25 minutes.",
    inverted: false,
  },
  {
    title: "Expert Mechanics",
    text: "Our certified and highly skilled mechanics have the experience to work on all car makes and models",
    inverted: true,
  },
  {
    title: "Complete Services",
    text: "We offer a full range of auto repair and maintenance services, from routine check-ups to major repairs",
    inverted: false,
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-tint py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="inline-block border-b-2 border-primary pb-2 font-display text-xl font-bold text-black sm:text-2xl">
          Work Process
        </h3>
        <h2 className="mt-4 font-display text-4xl font-extrabold text-black sm:text-5xl">
          We Complete Every Step Carefully
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          At Tyre Repair, attention to detail is our top priority. From diagnostics to final
          repairs, we ensure every step is performed with precision and care.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-3">
          {ROW1_STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="mx-auto flex h-32 w-32 items-center justify-center bg-primary">
                <DocumentSearchIcon className="h-14 w-14 text-white" />
              </div>
              {i === 0 && <CurveArrow direction="up" />}
              {i === 1 && <CurveArrow direction="down" />}

              <h4 className="mt-6 font-display text-xl font-bold text-black">{step.title}</h4>
              <p className="mx-auto mt-3 max-w-xs text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 border border-neutral-200 text-left sm:grid-cols-3">
          {ROW2_STEPS.map((step) => (
            <div
              key={step.title}
              className={`border border-neutral-200 p-8 ${
                step.inverted ? "bg-primary" : "bg-white"
              }`}
            >
              <GearIcon
                className={`h-10 w-10 ${step.inverted ? "text-white" : "text-primary"}`}
              />
              <h4
                className={`mt-5 font-display text-xl font-bold ${
                  step.inverted ? "text-white" : "text-black"
                }`}
              >
                {step.title}
              </h4>
              <p className={`mt-3 ${step.inverted ? "text-white/90" : "text-neutral-600"}`}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurveArrow({ direction }: { direction: "up" | "down" }) {
  const path =
    direction === "up"
      ? "M10 90 C 60 90, 90 30, 150 15"
      : "M10 15 C 60 15, 90 75, 150 90";
  const headPoints =
    direction === "up" ? "150,15 136,14 145,28" : "150,90 136,91 145,77";

  return (
    <svg
      viewBox="0 0 160 100"
      className="pointer-events-none absolute top-8 left-full hidden h-16 w-32 -translate-x-1/2 text-neutral-400 sm:block"
      fill="none"
    >
      <path d={path} stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
      <polygon points={headPoints} fill="currentColor" />
    </svg>
  );
}

function DocumentSearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="5" y="3" width="11" height="15" rx="1" />
      <line x1="7.5" y1="7" x2="13.5" y2="7" strokeLinecap="round" />
      <line x1="7.5" y1="10" x2="13.5" y2="10" strokeLinecap="round" />
      <line x1="7.5" y1="13" x2="11" y2="13" strokeLinecap="round" />
      <circle cx="16.5" cy="16.5" r="3.5" />
      <line x1="19" y1="19" x2="21.3" y2="21.3" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
