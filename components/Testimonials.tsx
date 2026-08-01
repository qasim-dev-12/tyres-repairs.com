"use client";

import Image from "next/image";
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
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative hidden h-[500px] md:block">
        <Image
          src="/images/istockphoto-1497239621-612x612-1.jpg"
          alt="Auto mechanic talking to the customer in a repair shop"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex min-h-[500px] flex-col items-center justify-center bg-black px-10 py-16 text-center sm:px-16">
        <div className="mb-6 h-1 w-24 bg-primary" />
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Our Customers Love Us!
        </h2>

        <p className="mt-10 max-w-xl text-lg italic leading-relaxed text-white">
          &ldquo;{current.text}&rdquo;
        </p>
        <p className="mt-6 font-semibold text-white">{current.name}</p>

        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-white/70 hover:text-white sm:left-8"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white/70 hover:text-white sm:right-8"
        >
          ›
        </button>
      </div>
    </section>
  );
}
