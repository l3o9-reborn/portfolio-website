"use client";
import { AnimatedTestimonials } from "../common/animated-testimonials";
import { testimonials } from "@/lib/data";
import { motion } from "motion/react";

export default function Testimonials() {

  return (
    <section id="testimonials" className="w-full pt-20 bg-muted/40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What People Say
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I’ve been fortunate to work with amazing clients and collaborators. Here’s what they had to say about our journey together.
          </motion.p>
        </div>      
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}