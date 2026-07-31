const STEPS = [
  {
    title: "Thorough Inspections",
    text: "We start with a detailed inspection to identify the root cause of the issue, ensuring no problem goes unnoticed.",
    icon: SearchIcon,
  },
  {
    title: "Expert Precision",
    text: "Our certified technicians use advanced tools and techniques to perform each repair with precision and care.",
    icon: WrenchIcon,
  },
  {
    title: "Quality Assurance",
    text: "Before handing back your vehicle, we double-check every repair to ensure it meets our high standards of safety and performance.",
    icon: ShieldIcon,
  },
  {
    title: "On-Site Service",
    text: "Enjoy the convenience of on-site repairs, with many services completed in just 20-25 minutes.",
    icon: PinIcon,
  },
  {
    title: "Expert Mechanics",
    text: "Our certified and highly skilled mechanics have the experience to work on all car makes and models.",
    icon: PersonIcon,
  },
  {
    title: "Complete Services",
    text: "We offer a full range of auto repair and maintenance services, from routine check-ups to major repairs.",
    icon: ToolboxIcon,
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-tint py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">Work Process</h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-primary">
          We Complete Every Step Carefully
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
          At Tyre Repair, attention to detail is our top priority. From diagnostics to final
          repairs, we ensure every step is performed with precision and care.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-xl bg-white p-6 shadow-sm">
              <step.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold text-black">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a4 4 0 10-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z"
      />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}
function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function PersonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}
function ToolboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path strokeLinecap="round" d="M8 9V6a4 4 0 018 0v3" />
      <path strokeLinecap="round" d="M3 13h18" />
    </svg>
  );
}
