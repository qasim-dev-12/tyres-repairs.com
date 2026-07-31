"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    text: "The team at Tyre Repair got my car back on the road in no time. They were professional and efficient. Highly recommend!",
    name: "khan hasim",
  },
  {
    text: "I've used Tyre Repair multiple times, and they always deliver great service. I trust them completely with my vehicle",
    name: "wajed hasmi",
  },
  {
    text: "I was amazed at how quickly they fixed my car on-site. The mechanics are knowledgeable and friendly, and the convenience is unbeatable",
    name: "md Aslam",
  },
  {
    text: "The pricing was transparent, and the quality of work was excellent. I appreciate their honesty and professionalism.",
    name: "Asad",
  },
  {
    text: "They came to my home, replaced my car battery, and I didn't even have to leave. Super convenient and fast!",
    name: "Shahid",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const current = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">
        Our Customers Love Us!
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded bg-primary" />

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint text-black hover:bg-primary hover:text-white transition-colors"
        >
          ‹
        </button>

        <div className="min-h-[140px] flex-1">
          <p className="text-lg italic text-neutral-700">&ldquo;{current.text}&rdquo;</p>
          <p className="mt-4 font-display font-bold text-primary">{current.name}</p>
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint text-black hover:bg-primary hover:text-white transition-colors"
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-primary" : "bg-neutral-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
