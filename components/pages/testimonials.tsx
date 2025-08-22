"use client";
import { AnimatedTestimonials } from "../common/animated-testimonials";
import { testimonials } from "@/lib/data";

export default function Testimonials() {

  return (
    <section id="services" className="w-full py-27 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}